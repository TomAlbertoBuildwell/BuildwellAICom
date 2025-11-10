"use client"

import { useState } from "react"
import { MarketingNav } from "@/components/marketing-nav"
import { MarketingFooter } from "@/components/marketing-footer"
import { Calendar, Clock, ExternalLink, Newspaper, TrendingUp, AlertCircle, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  // Sample news data - in a real app this would come from an API
  const featuredNews = [
    {
      id: 1,
      title: "New Building Safety Regulations Come Into Effect",
      excerpt: "The latest amendments to UK building safety regulations introduce stricter requirements for high-rise residential buildings, affecting construction practices nationwide.",
      category: "Regulation",
      date: "2024-01-15",
      readTime: "5 min read",
      source: "HSE Building Safety",
      urgent: true
    },
    {
      id: 2,
      title: "AI-Powered Construction Monitoring Shows 40% Efficiency Gain",
      excerpt: "Recent case studies from major UK construction firms demonstrate significant productivity improvements through AI-powered project monitoring and predictive maintenance.",
      category: "Technology",
      date: "2024-01-12",
      readTime: "4 min read",
      source: "Construction News",
      urgent: false
    },
    {
      id: 3,
      title: "Housing Development Targets Revised Upward for 2024",
      excerpt: "Government announces ambitious new housing targets, requiring innovative construction approaches and accelerated delivery timelines across England.",
      category: "Policy",
      date: "2024-01-10",
      readTime: "3 min read",
      source: "Planning Resource",
      urgent: false
    }
  ]

  const recentNews = [
    {
      id: 4,
      title: "CIOB Launches New Professional Standards Framework",
      date: "2024-01-08",
      source: "CIOB",
      category: "Professional"
    },
    {
      id: 5,
      title: "Major Infrastructure Investment Announced for Northern England",
      date: "2024-01-05",
      source: "Construction Enquirer",
      category: "Infrastructure"
    },
    {
      id: 6,
      title: "Sustainable Building Materials See 25% Price Reduction",
      date: "2024-01-03",
      source: "Building Magazine",
      category: "Sustainability"
    },
    {
      id: 7,
      title: "Digital Twin Technology Adoption Accelerates in UK Construction",
      date: "2024-01-01",
      source: "RICS",
      category: "Technology"
    }
  ]

  const categories = [
    { name: "All", count: 47 },
    { name: "Regulation", count: 12 },
    { name: "Technology", count: 8 },
    { name: "Policy", count: 15 },
    { name: "Safety", count: 9 },
    { name: "Sustainability", count: 3 }
  ]

  return (
    <div className="min-h-screen bg-background dark:bg-background">
      <MarketingNav />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#FBB429] to-[#F87866] py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                UK Construction News
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
                Stay informed with the latest developments in UK construction, building safety regulations, 
                and industry innovations. Curated from 20+ trusted sources.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="btn-gradient">
                  <Newspaper className="w-4 h-4 mr-2" />
                  Subscribe to Updates
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  RSS Feed
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* News Categories */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => {
                const isActive = activeCategory === category.name
                return (
                  <button
                    key={category.name}
                    onClick={() => setActiveCategory(category.name)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-orange-500 text-white hover:bg-orange-600 shadow-md"
                        : "bg-gray-100 text-gray-700 hover:bg-orange-50 hover:text-orange-700 border border-gray-200"
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                )
              })}
            </div>
          </div>
        </section>

        {/* Featured News */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center mb-8">
                <TrendingUp className="h-6 w-6 text-orange-500 mr-3" />
                <h2 className="bw-heading-lg text-gray-900">Featured Stories</h2>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {featuredNews.map((article) => (
                  <article key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <Badge 
                          variant="outline" 
                          className={`${
                            article.category === 'Regulation' ? 'border-red-200 text-red-700' :
                            article.category === 'Technology' ? 'border-blue-200 text-blue-700' :
                            'border-green-200 text-green-700'
                          }`}
                        >
                          {article.category}
                        </Badge>
                        {article.urgent && (
                          <AlertCircle className="h-5 w-5 text-red-500" />
                        )}
                      </div>
                      
                      <h3 className="bw-heading-sm text-gray-900 mb-3 line-clamp-2">
                        {article.title}
                      </h3>
                      
                      <p className="bw-body text-gray-600 mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span className="bw-caption text-gray-500">
                              {new Date(article.date).toLocaleDateString('en-GB')}
                            </span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            <span className="bw-caption text-gray-500">
                              {article.readTime}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="bw-caption text-gray-500">
                          Source: {article.source}
                        </span>
                        <Button size="sm" variant="outline" className="bg-orange-50/50 text-orange-600 border-orange-200 hover:bg-orange-100/70 hover:border-orange-300 hover:text-orange-700">
                          Read More
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Recent News */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center mb-8">
                <Clock className="h-6 w-6 text-orange-500 mr-3" />
                <h2 className="bw-heading-lg text-gray-900">Recent Updates</h2>
              </div>

              <div className="space-y-4">
                {recentNews.map((article) => (
                  <div key={article.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center space-x-4">
                      <Building2 className="h-5 w-5 text-gray-400" />
                      <div>
                        <h4 className="bw-heading-sm text-gray-900 mb-1">{article.title}</h4>
                        <div className="flex items-center space-x-3">
                          <span className="bw-caption text-gray-500">
                            {new Date(article.date).toLocaleDateString('en-GB')}
                          </span>
                          <span className="bw-caption text-gray-500">•</span>
                          <span className="bw-caption text-gray-500">{article.source}</span>
                          <Badge variant="outline" className="bw-caption bg-orange-50/50 text-orange-600 border-orange-200">
                            {article.category}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <Button size="sm" variant="ghost" className="text-gray-600 hover:text-orange-500">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <Button variant="outline" size="lg">
                  Load More Articles
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted Sources */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="bw-heading-lg text-gray-900 mb-6">Trusted News Sources</h2>
              <p className="bw-body text-gray-600 mb-8">
                Our AI-powered news aggregation system monitors 20+ authoritative sources 
                to bring you the most relevant and timely construction industry updates.
              </p>
              
              <div className="grid md:grid-cols-4 gap-6">
                <div className="card-sand text-center">
                  <h4 className="bw-heading-sm mb-2">Government Bodies</h4>
                  <p className="bw-caption text-gray-600">HSE, MHCLG, Planning Inspectorate</p>
                </div>
                <div className="card-sand text-center">
                  <h4 className="bw-heading-sm mb-2">Professional Bodies</h4>
                  <p className="bw-caption text-gray-600">CIOB, RICS, ICE, RIBA</p>
                </div>
                <div className="card-sand text-center">
                  <h4 className="bw-heading-sm mb-2">Industry Publications</h4>
                  <p className="bw-caption text-gray-600">Construction News, Building Magazine</p>
                </div>
                <div className="card-sand text-center">
                  <h4 className="bw-heading-sm mb-2">Specialist Media</h4>
                  <p className="bw-caption text-gray-600">Construction Enquirer, Planning Resource</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="bw-subtitle text-white mb-6">Never Miss Important Updates</h2>
              <p className="bw-body-light text-lg mb-8">
                Get the most critical construction industry news delivered to your inbox. 
                Our AI filters ensure you only receive what matters to your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your.email@company.com"
                  className="flex-1 px-4 py-3 rounded-md border-0 focus:ring-2 focus:ring-white"
                />
                <Button className="btn-primary bg-white text-gray-900 hover:bg-gray-100 px-6">
                  Subscribe
                </Button>
              </div>
              <p className="bw-caption text-white/80 mt-4">
                Weekly digest • No spam • Unsubscribe anytime
              </p>
            </div>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </div>
  )
}