"use client"

import { MarketingNav } from "@/components/marketing-nav"
import { MarketingFooter } from "@/components/marketing-footer"
import { Code, Copy, Play, Shield, Zap, Database, Key, CheckCircle, AlertCircle, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"
import Image from "next/image"

export default function ApiDocumentationPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const endpoints = [
    {
      id: "news-feed",
      method: "GET",
      path: "/api/v1/news",
      title: "Get Construction News",
      description: "Retrieve the latest UK construction industry news, filtered and curated by AI.",
      parameters: [
        { name: "category", type: "string", required: false, description: "Filter by category (regulation, technology, policy, safety)" },
        { name: "limit", type: "integer", required: false, description: "Number of articles to return (default: 20, max: 100)" },
        { name: "date_from", type: "string", required: false, description: "Filter articles from this date (ISO 8601 format)" },
        { name: "urgent_only", type: "boolean", required: false, description: "Return only urgent/breaking news" }
      ],
      example: `curl -X GET "https://api.buildwellai.com/v1/news?category=regulation&limit=10" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,
      response: `{
  "status": "success",
  "data": {
    "articles": [
      {
        "id": "article_123",
        "title": "New Building Safety Regulations Come Into Effect",
        "excerpt": "The latest amendments to UK building safety regulations...",
        "category": "regulation",
        "source": "HSE Building Safety",
        "published_at": "2024-01-15T09:30:00Z",
        "url": "https://source-url.com/article",
        "urgent": true,
        "ai_summary": "Key changes affect high-rise residential buildings..."
      }
    ],
    "total_count": 47,
    "page": 1,
    "has_more": true
  }
}`
    },
    {
      id: "safety-alerts",
      method: "GET",
      path: "/api/v1/safety-alerts",
      title: "Get Safety Alerts",
      description: "Retrieve critical safety alerts and building regulation updates.",
      parameters: [
        { name: "severity", type: "string", required: false, description: "Filter by severity (critical, high, medium, low)" },
        { name: "region", type: "string", required: false, description: "Filter by UK region" }
      ],
      example: `curl -X GET "https://api.buildwellai.com/v1/safety-alerts?severity=critical" \\
  -H "Authorization: Bearer YOUR_API_KEY"`,
      response: `{
  "status": "success",
  "data": {
    "alerts": [
      {
        "id": "alert_456",
        "title": "Critical: Fire Safety System Recall",
        "description": "Urgent recall of XYZ fire safety systems...",
        "severity": "critical",
        "affected_regions": ["England", "Wales"],
        "issued_at": "2024-01-14T14:20:00Z",
        "expires_at": "2024-02-14T23:59:59Z"
      }
    ]
  }
}`
    },
    {
      id: "compliance-check",
      method: "POST",
      path: "/api/v1/compliance/check",
      title: "Check Compliance",
      description: "Submit project details for AI-powered compliance checking against current UK building regulations.",
      parameters: [
        { name: "project_type", type: "string", required: true, description: "Type of construction project" },
        { name: "location", type: "object", required: true, description: "Project location details" },
        { name: "specifications", type: "object", required: true, description: "Project specifications and materials" }
      ],
      example: `curl -X POST "https://api.buildwellai.com/v1/compliance/check" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "project_type": "residential_high_rise",
    "location": {
      "postcode": "EC2A 4NE",
      "local_authority": "City of London"
    },
    "specifications": {
      "height": "45m",
      "floors": 15,
      "fire_safety_system": "sprinkler_system"
    }
  }'`,
      response: `{
  "status": "success",
  "data": {
    "compliance_score": 92,
    "status": "compliant",
    "checks": [
      {
        "regulation": "Building Safety Act 2022",
        "status": "passed",
        "details": "Fire safety requirements met"
      },
      {
        "regulation": "Part B Fire Safety",
        "status": "attention_required",
        "details": "Additional fire exits recommended for floors 10+"
      }
    ],
    "recommendations": [
      "Consider upgrading to advanced fire detection system",
      "Review emergency evacuation procedures"
    ]
  }
}`
    }
  ]

  const codeExamples = {
    javascript: `// Initialize BuildwellAI SDK
const BuildwellAI = require('@buildwellai/sdk');

const client = new BuildwellAI({
  apiKey: process.env.BUILDWELLAI_API_KEY,
  environment: 'production' // or 'sandbox'
});

// Get latest construction news
async function getLatestNews() {
  try {
    const news = await client.news.list({
      category: 'regulation',
      limit: 10,
      urgent_only: true
    });
    
    console.log(\`Found \${news.data.total_count} articles\`);
    return news.data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
  }
}`,
    python: `# Install: pip install buildwellai
from buildwellai import BuildwellAI

# Initialize client
client = BuildwellAI(
    api_key="your_api_key_here",
    environment="production"
)

# Get construction news
def get_latest_news():
    try:
        response = client.news.list(
            category="regulation",
            limit=10,
            urgent_only=True
        )
        
        print(f"Found {response.data.total_count} articles")
        return response.data.articles
    except Exception as e:
        print(f"Error: {e}")`,
    curl: `# Get your API key from https://buildwellai.com/dashboard

# Fetch latest news
curl -X GET "https://api.buildwellai.com/v1/news" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"

# Check compliance
curl -X POST "https://api.buildwellai.com/v1/compliance/check" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"project_type": "residential", "location": {"postcode": "SW1A 1AA"}}'`
  }

  return (
    <div className="min-h-screen bg-background dark:bg-background">
      <MarketingNav />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#FBB429] to-[#F87866] py-20">
          <Image
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80"
            alt="API Documentation"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="bw-title text-white mb-6">
                BuildwellAI API Documentation
              </h1>
              <p className="bw-body-light text-xl mb-8 max-w-2xl mx-auto">
                Integrate construction intelligence into your applications with our comprehensive REST API. 
                Access real-time news, safety alerts, and AI-powered compliance checking.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="btn-gradient">
                  <Key className="w-4 h-4 mr-2" />
                  Get API Key
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                  <Play className="w-4 h-4 mr-2" />
                  Try Interactive Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Start */}
        <section className="py-16 bg-background dark:bg-[#0a1929]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground dark:text-white mb-6">Quick Start Guide</h2>
                <p className="text-lg text-foreground/80 dark:text-white/80">
                  Get up and running with the BuildwellAI API in minutes
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-card dark:bg-white/5 border border-border dark:border-white/10 rounded-[5px] p-6 text-center">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-500/20 rounded-[5px] flex items-center justify-center mx-auto mb-4">
                    <Key className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground dark:text-white mb-3">1. Get Your API Key</h3>
                  <p className="text-foreground/80 dark:text-white/70">
                    Sign up for a free account and generate your API key from the dashboard.
                  </p>
                </div>
                <div className="bg-card dark:bg-white/5 border border-border dark:border-white/10 rounded-[5px] p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-500/20 rounded-[5px] flex items-center justify-center mx-auto mb-4">
                    <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground dark:text-white mb-3">2. Make Your First Call</h3>
                  <p className="text-foreground/80 dark:text-white/70">
                    Use our SDKs or make direct HTTP requests to start accessing construction data.
                  </p>
                </div>
                <div className="bg-card dark:bg-white/5 border border-border dark:border-white/10 rounded-[5px] p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-500/20 rounded-[5px] flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground dark:text-white mb-3">3. Build & Scale</h3>
                  <p className="text-foreground/80 dark:text-white/70">
                    Integrate our API into your applications and scale with confidence.
                  </p>
                </div>
              </div>

              {/* Code Examples */}
              <div className="bg-card dark:bg-white/5 border border-border dark:border-white/10 rounded-[5px] shadow-lg overflow-hidden">
                <div className="border-b border-border dark:border-white/10">
                  <div className="px-6 py-4">
                    <h3 className="text-xl font-display font-semibold text-foreground dark:text-white">Code Examples</h3>
                  </div>
                </div>
                <Tabs defaultValue="javascript" className="w-full">
                  <TabsList className="w-full justify-start rounded-none border-b bg-muted dark:bg-white/5">
                    <TabsTrigger value="javascript" className="px-6">JavaScript</TabsTrigger>
                    <TabsTrigger value="python" className="px-6">Python</TabsTrigger>
                    <TabsTrigger value="curl" className="px-6">cURL</TabsTrigger>
                  </TabsList>
                  {Object.entries(codeExamples).map(([lang, code]) => (
                    <TabsContent key={lang} value={lang} className="mt-0">
                      <div className="relative">
                        <pre className="bg-gray-900 dark:bg-black/50 text-gray-100 dark:text-white/90 p-6 overflow-x-auto">
                          <code className="text-sm font-mono">{code}</code>
                        </pre>
                        <Button
                          size="sm"
                          variant="outline"
                          className="absolute top-4 right-4 bg-gray-800 dark:bg-white/10 border-gray-600 dark:border-white/20 text-gray-300 dark:text-white/80 hover:bg-gray-700 dark:hover:bg-white/20"
                          onClick={() => copyToClipboard(code, lang)}
                        >
                          {copiedCode === lang ? (
                            <CheckCircle className="w-4 h-4" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </Button>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            </div>
          </div>
        </section>

        {/* API Endpoints */}
        <section className="py-16 bg-muted dark:bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground dark:text-white mb-6">API Endpoints</h2>
                <p className="text-lg text-foreground/80 dark:text-white/80">
                  Comprehensive reference for all available endpoints
                </p>
              </div>

              <div className="space-y-8">
                {endpoints.map((endpoint) => (
                  <div key={endpoint.id} className="bg-card dark:bg-white/5 border border-border dark:border-white/10 rounded-[5px] overflow-hidden shadow-sm">
                    <div className="p-6 border-b border-border dark:border-white/10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <Badge 
                            variant="outline" 
                            className={`font-mono ${
                              endpoint.method === 'GET' ? 'border-green-200 dark:border-green-500/30 text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-500/10' :
                              endpoint.method === 'POST' ? 'border-blue-200 dark:border-blue-500/30 text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10' :
                              'border-gray-200 dark:border-white/20 text-gray-700 dark:text-white/70'
                            }`}
                          >
                            {endpoint.method}
                          </Badge>
                          <code className="font-mono text-foreground dark:text-white/90">{endpoint.path}</code>
                        </div>
                      </div>
                      <h3 className="text-xl font-display font-semibold text-foreground dark:text-white mb-2">{endpoint.title}</h3>
                      <p className="text-foreground/70 dark:text-white/60">{endpoint.description}</p>
                    </div>

                    <div className="p-6">
                      <Tabs defaultValue="parameters" className="w-full">
                        <TabsList className="mb-6">
                          <TabsTrigger value="parameters">Parameters</TabsTrigger>
                          <TabsTrigger value="example">Example</TabsTrigger>
                          <TabsTrigger value="response">Response</TabsTrigger>
                        </TabsList>

                        <TabsContent value="parameters">
                          <div className="space-y-4">
                            {endpoint.parameters.map((param, index) => (
                              <div key={index} className="flex items-start space-x-4 p-4 bg-muted dark:bg-white/5 rounded-[5px]">
                                <div className="flex-shrink-0">
                                  <code className="text-sm font-mono bg-orange-50 dark:bg-orange-500/20 text-orange-700 dark:text-orange-400 px-2 py-1 rounded-[5px] border border-orange-200 dark:border-orange-500/30">
                                    {param.name}
                                  </code>
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center space-x-2 mb-1">
                                    <Badge variant="outline" className="text-xs bg-orange-50 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-500/30">
                                      {param.type}
                                    </Badge>
                                    {param.required && (
                                      <Badge variant="outline" className="text-xs bg-red-50 dark:bg-red-500/20 border-red-200 dark:border-red-500/30 text-red-700 dark:text-red-400">
                                        required
                                      </Badge>
                                    )}
                                  </div>
                                  <p className="text-foreground/70 dark:text-white/60">{param.description}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </TabsContent>

                        <TabsContent value="example">
                          <div className="relative">
                            <pre className="bg-gray-900 dark:bg-black/50 text-gray-100 dark:text-white/90 p-4 rounded-[5px] overflow-x-auto">
                              <code className="text-sm font-mono">{endpoint.example}</code>
                            </pre>
                            <Button
                              size="sm"
                              variant="outline"
                              className="absolute top-2 right-2 bg-gray-800 dark:bg-white/10 border-gray-600 dark:border-white/20 text-gray-300 dark:text-white/80 hover:bg-gray-700 dark:hover:bg-white/20"
                              onClick={() => copyToClipboard(endpoint.example, `${endpoint.id}-example`)}
                            >
                              {copiedCode === `${endpoint.id}-example` ? (
                                <CheckCircle className="w-4 h-4" />
                              ) : (
                                <Copy className="w-4 h-4" />
                              )}
                            </Button>
                          </div>
                        </TabsContent>

                        <TabsContent value="response">
                          <div className="relative">
                            <pre className="bg-gray-900 dark:bg-black/50 text-gray-100 dark:text-white/90 p-4 rounded-[5px] overflow-x-auto">
                              <code className="text-sm font-mono">{endpoint.response}</code>
                            </pre>
                            <Button
                              size="sm"
                              variant="outline"
                              className="absolute top-2 right-2 bg-gray-800 dark:bg-white/10 border-gray-600 dark:border-white/20 text-gray-300 dark:text-white/80 hover:bg-gray-700 dark:hover:bg-white/20"
                              onClick={() => copyToClipboard(endpoint.response, `${endpoint.id}-response`)}
                            >
                              {copiedCode === `${endpoint.id}-response` ? (
                                <CheckCircle className="w-4 h-4" />
                              ) : (
                                <Copy className="w-4 h-4" />
                              )}
                            </Button>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Authentication */}
        <section className="py-16 bg-background dark:bg-[#0a1929]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground dark:text-white mb-8">Authentication</h2>
              
              <div className="bg-gray-900 dark:bg-black/50 border border-gray-700 dark:border-white/10 rounded-[5px] p-8 mb-8">
                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-orange-500 dark:text-orange-400 mt-1" />
                  <div>
                    <h3 className="text-xl font-display font-semibold text-white mb-3">API Key Authentication</h3>
                    <p className="text-white/80 mb-4">
                      All API requests must include your API key in the Authorization header using Bearer token authentication.
                    </p>
                    <div className="bg-gray-800 dark:bg-white/5 p-4 rounded-[5px]">
                      <code className="text-green-400 dark:text-green-300 font-mono">
                        Authorization: Bearer YOUR_API_KEY
                      </code>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card dark:bg-white/5 border border-border dark:border-white/10 rounded-[5px] p-6">
                  <h4 className="text-xl font-display font-semibold text-foreground dark:text-white mb-3">Rate Limits</h4>
                  <ul className="text-foreground/80 dark:text-white/70 space-y-2">
                    <li>• Free tier: 1,000 requests/month</li>
                    <li>• Pro tier: 10,000 requests/month</li>
                    <li>• Enterprise: Custom limits</li>
                  </ul>
                </div>
                <div className="bg-card dark:bg-white/5 border border-border dark:border-white/10 rounded-[5px] p-6">
                  <h4 className="text-xl font-display font-semibold text-foreground dark:text-white mb-3">Response Codes</h4>
                  <ul className="text-foreground/80 dark:text-white/70 space-y-2">
                    <li>• <code>200</code> - Success</li>
                    <li>• <code>400</code> - Bad Request</li>
                    <li>• <code>401</code> - Unauthorized</li>
                    <li>• <code>429</code> - Rate Limited</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SDKs and Libraries */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="bw-subtitle text-gray-900 mb-6">SDKs & Libraries</h2>
              <p className="bw-body text-lg mb-8">
                Official libraries to get you started quickly in your preferred language
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="card-sand">
                  <Code className="h-8 w-8 text-yellow-500 mx-auto mb-3" />
                  <h4 className="bw-heading-sm mb-2">JavaScript/Node.js</h4>
                  <p className="bw-caption text-gray-600 mb-4">npm install @buildwellai/sdk</p>
                  <Button size="sm" variant="outline" className="bg-orange-50/50 text-orange-600 border-orange-200 hover:bg-orange-100/70 hover:border-orange-300 hover:text-orange-700 transition-all duration-200">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    View Docs
                  </Button>
                </div>
                <div className="card-sand">
                  <Code className="h-8 w-8 text-blue-500 mx-auto mb-3" />
                  <h4 className="bw-heading-sm mb-2">Python</h4>
                  <p className="bw-caption text-gray-600 mb-4">pip install buildwellai</p>
                  <Button size="sm" variant="outline" className="bg-orange-50/50 text-orange-600 border-orange-200 hover:bg-orange-100/70 hover:border-orange-300 hover:text-orange-700 transition-all duration-200">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    View Docs
                  </Button>
                </div>
                <div className="card-sand">
                  <Code className="h-8 w-8 text-red-500 mx-auto mb-3" />
                  <h4 className="bw-heading-sm mb-2">PHP</h4>
                  <p className="bw-caption text-gray-600 mb-4">composer install buildwellai/sdk</p>
                  <Button size="sm" variant="outline" className="bg-orange-50/50 text-orange-600 border-orange-200 hover:bg-orange-100/70 hover:border-orange-300 hover:text-orange-700 transition-all duration-200">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    View Docs
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support */}
        <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="bw-subtitle text-white mb-6">Need Help?</h2>
              <p className="bw-body-light text-lg mb-8">
                Our developer support team is here to help you integrate successfully. 
                Get in touch if you have questions or need assistance.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="btn-primary bg-white text-gray-900 hover:bg-gray-100">
                  Contact Support
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                  Join Discord Community
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </div>
  )
}