"use client"

import React, { useState } from "react"
import { Footer } from "@/components/footer"
import { Header } from "@/components/Header"
import { Check, X, Star, Zap, Shield, Users, BarChart, HeadphonesIcon, Clock, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly')

  const plans = {
    trial: {
      name: "Trial",
      description: "Perfect for trying out BuildwellAI",
      price: { monthly: 0, annual: 0 },
      features: [
        "100 API requests/month",
        "Basic news feed access",
        "Email support",
        "7-day trial period",
        "Basic documentation",
      ],
      limitations: [
        "No safety alerts",
        "No compliance checking",
        "Limited to 1 user",
        "No phone support",
        "No SLA guarantee"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    standard: {
      name: "Standard",
      description: "Ideal for small to medium construction companies",
      price: { monthly: 49, annual: 490 },
      features: [
        "5,000 API requests/month",
        "Full news feed access",
        "Safety alerts & notifications",
        "Basic compliance checking",
        "Email & chat support",
        "Up to 5 users",
        "Standard documentation",
        "Basic analytics dashboard"
      ],
      limitations: [
        "No advanced AI features",
        "No phone support",
        "Standard SLA (99% uptime)"
      ],
      popular: true,
      cta: "Get Started"
    },
    pro: {
      name: "Pro",
      description: "Advanced features for large construction enterprises",
      price: { monthly: 149, annual: 1490 },
      features: [
        "25,000 API requests/month",
        "Full news feed access",
        "Priority safety alerts",
        "Advanced AI compliance checking",
        "Custom compliance rules",
        "Priority support (email, chat, phone)",
        "Unlimited users",
        "Advanced analytics & reporting",
        "Custom integrations",
        "Dedicated account manager",
        "White-label options",
        "Advanced security features"
      ],
      limitations: [],
      popular: false,
      cta: "Contact Sales"
    }
  }

  const comparisonFeatures = [
    {
      category: "API Access",
      features: [
        { name: "Monthly API Requests", trial: "100", standard: "5,000", pro: "25,000" },
        { name: "Rate Limiting", trial: "10/min", standard: "100/min", pro: "500/min" },
        { name: "API Documentation", trial: "Basic", standard: "Standard", pro: "Advanced + Custom" },
      ]
    },
    {
      category: "News & Alerts",
      features: [
        { name: "Construction News Feed", trial: true, standard: true, pro: true },
        { name: "Safety Alerts", trial: false, standard: true, pro: true },
        { name: "Priority Alerts", trial: false, standard: false, pro: true },
        { name: "Custom Alert Filters", trial: false, standard: "Basic", pro: "Advanced" },
      ]
    },
    {
      category: "AI Features",
      features: [
        { name: "Basic Compliance Checking", trial: false, standard: true, pro: true },
        { name: "Advanced AI Analysis", trial: false, standard: false, pro: true },
        { name: "Custom Compliance Rules", trial: false, standard: false, pro: true },
        { name: "Predictive Analytics", trial: false, standard: false, pro: true },
      ]
    },
    {
      category: "Support & Users",
      features: [
        { name: "Users Included", trial: "1", standard: "5", pro: "Unlimited" },
        { name: "Email Support", trial: true, standard: true, pro: true },
        { name: "Chat Support", trial: false, standard: true, pro: true },
        { name: "Phone Support", trial: false, standard: false, pro: true },
        { name: "Dedicated Account Manager", trial: false, standard: false, pro: true },
      ]
    },
    {
      category: "Analytics & Reporting",
      features: [
        { name: "Basic Analytics", trial: false, standard: true, pro: true },
        { name: "Advanced Reporting", trial: false, standard: false, pro: true },
        { name: "Custom Dashboards", trial: false, standard: false, pro: true },
        { name: "Data Export", trial: false, standard: "CSV", pro: "CSV, JSON, API" },
      ]
    }
  ]

  const formatPrice = (price: number) => {
    if (price === 0) return "Free"
    return billingPeriod === 'annual' ? `£${price}` : `£${price}`
  }

  const getSavings = (plan: typeof plans.standard) => {
    if (plan.price.monthly === 0) return null
    const monthlyCost = plan.price.monthly * 12
    const annualCost = plan.price.annual
    const savings = monthlyCost - annualCost
    const percentage = Math.round((savings / monthlyCost) * 100)
    return { amount: savings, percentage }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="bw-title text-white mb-6">
                Simple, Transparent Pricing
              </h1>
              <p className="bw-body-light text-xl mb-8 max-w-2xl mx-auto">
                Choose the perfect plan for your construction business. Start with our free trial 
                and scale as you grow.
              </p>
              
              {/* Billing Toggle */}
              <div className="flex items-center justify-center space-x-4 mb-8">
                <span className={`bw-body ${billingPeriod === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                  Monthly
                </span>
                <button
                  onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'annual' : 'monthly')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    billingPeriod === 'annual' ? 'bg-orange-500' : 'bg-gray-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      billingPeriod === 'annual' ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
                <span className={`bw-body ${billingPeriod === 'annual' ? 'text-white' : 'text-gray-400'}`}>
                  Annual
                </span>
                {billingPeriod === 'annual' && (
                  <Badge className="bg-orange-500 text-white ml-2">Save up to 17%</Badge>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8">
                {Object.entries(plans).map(([key, plan]) => {
                  const savings = getSavings(plan)
                  return (
                    <div
                      key={key}
                      className={`relative bg-white rounded-lg shadow-lg overflow-hidden ${
                        plan.popular ? 'ring-2 ring-orange-500 scale-105' : ''
                      }`}
                    >
                      {plan.popular && (
                        <div className="absolute top-0 left-0 right-0 bg-orange-500 text-white text-center py-2">
                          <span className="bw-caption font-medium">Most Popular</span>
                        </div>
                      )}
                      
                      <div className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                        <div className="text-center mb-8">
                          <h3 className="bw-heading-lg text-gray-900 mb-2">{plan.name}</h3>
                          <p className="bw-body text-gray-600 mb-6">{plan.description}</p>
                          
                          <div className="mb-6">
                            <span className="text-4xl font-bold text-gray-900">
                              {formatPrice(plan.price[billingPeriod])}
                            </span>
                            {plan.price[billingPeriod] > 0 && (
                              <span className="bw-body text-gray-500">
                                /{billingPeriod === 'monthly' ? 'month' : 'year'}
                              </span>
                            )}
                          </div>
                          
                          {savings && billingPeriod === 'annual' && (
                            <div className="mb-6">
                              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                Save £{savings.amount}/year ({savings.percentage}% off)
                              </Badge>
                            </div>
                          )}
                          
                          <Button 
                            className={`w-full ${
                              plan.popular 
                                ? 'btn-gradient' 
                                : 'bg-orange-50/50 text-orange-600 border-orange-200 hover:bg-orange-100/70 hover:border-orange-300 hover:text-orange-700'
                            }`}
                          >
                            {plan.cta}
                          </Button>
                        </div>
                        
                        <div className="space-y-4">
                          <h4 className="bw-heading-sm text-gray-900 mb-4">Features included:</h4>
                          <ul className="space-y-3">
                            {plan.features.map((feature, index) => (
                              <li key={index} className="flex items-start space-x-3">
                                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="bw-body text-gray-600">{feature}</span>
                              </li>
                            ))}
                          </ul>
                          
                          {plan.limitations.length > 0 && (
                            <div className="mt-6 pt-6 border-t border-gray-200">
                              <ul className="space-y-3">
                                {plan.limitations.map((limitation, index) => (
                                  <li key={index} className="flex items-start space-x-3">
                                    <X className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                                    <span className="bw-body text-gray-500">{limitation}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="bw-subtitle text-gray-900 mb-6">Detailed Feature Comparison</h2>
                <p className="bw-body text-lg text-gray-600">
                  Compare all features across our pricing tiers to find the perfect fit
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left bw-heading-sm text-gray-900">Features</th>
                        <th className="px-6 py-4 text-center bw-heading-sm text-gray-900">Trial</th>
                        <th className="px-6 py-4 text-center bw-heading-sm text-gray-900 bg-orange-50">
                          Standard
                          <Badge className="bg-orange-500 text-white ml-2 text-xs">Popular</Badge>
                        </th>
                        <th className="px-6 py-4 text-center bw-heading-sm text-gray-900">Pro</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonFeatures.map((category, categoryIndex) => (
                        <React.Fragment key={categoryIndex}>
                          <tr className="bg-orange-50">
                            <td colSpan={4} className="px-6 py-3 bw-heading-sm text-orange-700">
                              {category.category}
                            </td>
                          </tr>
                          {category.features.map((feature, featureIndex) => (
                            <tr key={featureIndex} className="border-b border-gray-200 hover:bg-gray-50">
                              <td className="px-6 py-4 bw-body text-gray-900">{feature.name}</td>
                              <td className="px-6 py-4 text-center">
                                {typeof feature.trial === 'boolean' ? (
                                  feature.trial ? (
                                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                                  ) : (
                                    <X className="h-5 w-5 text-gray-400 mx-auto" />
                                  )
                                ) : (
                                  <span className="bw-body text-gray-600">{feature.trial}</span>
                                )}
                              </td>
                              <td className="px-6 py-4 text-center bg-orange-50/30">
                                {typeof feature.standard === 'boolean' ? (
                                  feature.standard ? (
                                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                                  ) : (
                                    <X className="h-5 w-5 text-gray-400 mx-auto" />
                                  )
                                ) : (
                                  <span className="bw-body text-gray-600">{feature.standard}</span>
                                )}
                              </td>
                              <td className="px-6 py-4 text-center">
                                {typeof feature.pro === 'boolean' ? (
                                  feature.pro ? (
                                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                                  ) : (
                                    <X className="h-5 w-5 text-gray-400 mx-auto" />
                                  )
                                ) : (
                                  <span className="bw-body text-gray-600">{feature.pro}</span>
                                )}
                              </td>
                            </tr>
                          ))}
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="bw-subtitle text-gray-900 mb-6">Frequently Asked Questions</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="bw-heading-sm text-gray-900 mb-3">Can I change plans anytime?</h4>
                    <p className="bw-body text-gray-600">
                      Yes, you can upgrade or downgrade your plan at any time. Changes take effect 
                      at your next billing cycle.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="bw-heading-sm text-gray-900 mb-3">What happens if I exceed my API limits?</h4>
                    <p className="bw-body text-gray-600">
                      We'll notify you when you're approaching your limits. You can upgrade your plan 
                      or purchase additional API calls as needed.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="bw-heading-sm text-gray-900 mb-3">Is there a setup fee?</h4>
                    <p className="bw-body text-gray-600">
                      No setup fees for any plan. You only pay the monthly or annual subscription fee.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="bw-heading-sm text-gray-900 mb-3">Do you offer custom enterprise plans?</h4>
                    <p className="bw-body text-gray-600">
                      Yes, we offer custom enterprise solutions with dedicated support, 
                      custom integrations, and volume pricing.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="bw-heading-sm text-gray-900 mb-3">What payment methods do you accept?</h4>
                    <p className="bw-body text-gray-600">
                      We accept all major credit cards, bank transfers, and can arrange 
                      invoicing for annual plans.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="bw-heading-sm text-gray-900 mb-3">Is there a money-back guarantee?</h4>
                    <p className="bw-body text-gray-600">
                      Yes, we offer a 30-day money-back guarantee on all paid plans. 
                      No questions asked.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="bw-subtitle text-white mb-6">Ready to Get Started?</h2>
              <p className="bw-body-light text-lg mb-8">
                Join hundreds of construction professionals who trust BuildwellAI to 
                streamline their operations and ensure compliance.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="btn-primary bg-white text-gray-900 hover:bg-gray-100">
                  Start Free Trial
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}