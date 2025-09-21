"use client"

import { Footer } from "@/components/footer"
import { Header } from "@/components/Header"
import { Mail, Phone, MapPin, Clock, MessageSquare, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="bw-title text-white mb-6">
                Get In Touch
              </h1>
              <p className="bw-body-light text-xl mb-8 max-w-2xl mx-auto">
                Ready to transform your construction projects with AI? We'd love to hear from you. 
                Our team is here to help you find the perfect solution.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="bw-heading-lg text-gray-900 mb-6">Send us a Message</h2>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="bw-body block mb-2 font-medium text-gray-700">
                          First Name *
                        </label>
                        <Input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          className="w-full bg-orange-50/30 border-orange-200 text-gray-900 placeholder:text-gray-500 focus:border-orange-500 focus:ring-orange-500/20"
                          placeholder="Your first name"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="bw-body block mb-2 font-medium text-gray-700">
                          Last Name *
                        </label>
                        <Input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          className="w-full bg-orange-50/30 border-orange-200 text-gray-900 placeholder:text-gray-500 focus:border-orange-500 focus:ring-orange-500/20"
                          placeholder="Your last name"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="bw-body block mb-2 font-medium text-gray-700">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full bg-orange-50/30 border-orange-200 text-gray-900 placeholder:text-gray-500 focus:border-orange-500 focus:ring-orange-500/20"
                        placeholder="your.email@company.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="bw-body block mb-2 font-medium text-gray-700">
                        Company
                      </label>
                      <Input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full bg-orange-50/30 border-orange-200 text-gray-900 placeholder:text-gray-500 focus:border-orange-500 focus:ring-orange-500/20"
                        placeholder="Your company name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="bw-body block mb-2 font-medium text-gray-700">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full bg-orange-50/30 border-orange-200 text-gray-900 placeholder:text-gray-500 focus:border-orange-500 focus:ring-orange-500/20"
                        placeholder="+44 20 1234 5678"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="bw-body block mb-2 font-medium text-gray-700">
                        Subject *
                      </label>
                      <Input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        className="w-full bg-orange-50/30 border-orange-200 text-gray-900 placeholder:text-gray-500 focus:border-orange-500 focus:ring-orange-500/20"
                        placeholder="How can we help you?"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="bw-body block mb-2 font-medium text-gray-700">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        className="w-full bg-orange-50/30 border-orange-200 text-gray-900 placeholder:text-gray-500 focus:border-orange-500 focus:ring-orange-500/20 resize-none"
                        placeholder="Tell us about your project, challenges, or questions..."
                      />
                    </div>
                    
                    <Button className="btn-gradient w-full">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </div>

                {/* Contact Details */}
                <div className="space-y-8">
                  <div>
                    <h2 className="bw-heading-lg text-gray-900 mb-6">Contact Information</h2>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <Mail className="h-6 w-6 text-orange-500 mt-1" />
                        <div>
                          <h4 className="bw-heading-sm mb-2">Email</h4>
                          <p className="bw-body text-gray-600">contact@buildwellai.com</p>
                          <p className="bw-body text-gray-600">support@buildwellai.com</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <Phone className="h-6 w-6 text-orange-500 mt-1" />
                        <div>
                          <h4 className="bw-heading-sm mb-2">Phone</h4>
                          <p className="bw-body text-gray-600">+44 20 1234 5678</p>
                          <p className="bw-caption text-gray-500">Monday - Friday, 9:00 AM - 6:00 PM GMT</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <MapPin className="h-6 w-6 text-orange-500 mt-1" />
                        <div>
                          <h4 className="bw-heading-sm mb-2">Office</h4>
                          <p className="bw-body text-gray-600">
                            BuildwellAI Ltd<br />
                            123 Construction House<br />
                            London, EC2A 4NE<br />
                            United Kingdom
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <Clock className="h-6 w-6 text-orange-500 mt-1" />
                        <div>
                          <h4 className="bw-heading-sm mb-2">Business Hours</h4>
                          <p className="bw-body text-gray-600">
                            Monday - Friday: 9:00 AM - 6:00 PM GMT<br />
                            Saturday: 10:00 AM - 2:00 PM GMT<br />
                            Sunday: Closed
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Links */}
                  <div className="card-sand">
                    <h3 className="bw-heading-sm mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                      <Button 
                        variant="outline" 
                        className="w-full justify-start bg-orange-50/50 text-orange-600 border-orange-200 hover:bg-orange-100/70 hover:border-orange-300 hover:text-orange-700"
                        onClick={() => window.open("https://chat.buildwellai.com", "_blank")}
                      >
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Try Our AI Chat Assistant
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full justify-start bg-orange-50/50 text-orange-600 border-orange-200 hover:bg-orange-100/70 hover:border-orange-300 hover:text-orange-700"
                        onClick={() => window.location.href = "/pricing"}
                      >
                        View Pricing Plans
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full justify-start bg-orange-50/50 text-orange-600 border-orange-200 hover:bg-orange-100/70 hover:border-orange-300 hover:text-orange-700"
                        onClick={() => window.location.href = "/api_documentation"}
                      >
                        API Documentation
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="bw-subtitle text-gray-900 mb-6">Frequently Asked Questions</h2>
                <p className="bw-body text-lg">
                  Quick answers to common questions about BuildwellAI
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="bw-heading-sm mb-3">How quickly can I get started?</h4>
                    <p className="bw-body text-gray-600">
                      Most clients can begin using our solutions within 24-48 hours of initial contact. 
                      We offer rapid deployment and comprehensive onboarding support.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="bw-heading-sm mb-3">Do you offer custom solutions?</h4>
                    <p className="bw-body text-gray-600">
                      Absolutely! We specialise in creating tailored AI solutions that address your 
                      specific construction challenges and integrate with your existing workflows.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="bw-heading-sm mb-3">What support do you provide?</h4>
                    <p className="bw-body text-gray-600">
                      We offer comprehensive support including training, documentation, ongoing 
                      technical assistance, and regular system updates.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="bw-heading-sm mb-3">Is my data secure?</h4>
                    <p className="bw-body text-gray-600">
                      Yes, we employ enterprise-grade security measures, including encryption, 
                      secure data centres, and compliance with UK data protection regulations.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="bw-heading-sm mb-3">Can I try before I buy?</h4>
                    <p className="bw-body text-gray-600">
                      We offer free consultations and demonstrations. Many of our solutions 
                      include trial periods so you can evaluate their effectiveness.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="bw-heading-sm mb-3">Do you work with small companies?</h4>
                    <p className="bw-body text-gray-600">
                      Yes! We serve construction companies of all sizes, from independent 
                      contractors to large enterprises, with scalable solutions.
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
                Don't let outdated processes hold your projects back. Contact us today 
                and discover how BuildwellAI can transform your construction workflow.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  className="btn-primary bg-white text-gray-900 hover:bg-gray-100"
                  onClick={() => document.getElementById('firstName')?.focus()}
                >
                  Start Conversation
                </Button>
                <Button 
                  variant="outline"
                  className="btn-secondary border-white text-white hover:bg-white hover:text-gray-900"
                  onClick={() => window.open("https://chat.buildwellai.com", "_blank")}
                >
                  Try AI Chat
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