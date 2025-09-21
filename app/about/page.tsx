"use client"

import { Footer } from "@/components/footer"
import { Header } from "@/components/Header"
import { Building, Users, Target, Award, CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="bw-title text-white mb-6">
                About BuildwellAI
              </h1>
              <p className="bw-body-light text-xl mb-8 max-w-2xl mx-auto">
                Transforming the UK construction industry through intelligent automation, 
                safety innovation, and data-driven insights.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="bw-subtitle text-gray-900 mb-6">Our Mission</h2>
                <p className="bw-body text-lg">
                  We're dedicated to revolutionising the construction industry by providing 
                  AI-powered solutions that enhance safety, efficiency, and productivity 
                  across all phases of building projects.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="card-sand text-center">
                  <Building className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="bw-heading-sm mb-3">Innovation</h3>
                  <p className="bw-body">
                    Pioneering cutting-edge AI technologies to solve complex construction challenges.
                  </p>
                </div>
                <div className="card-sand text-center">
                  <Users className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="bw-heading-sm mb-3">Collaboration</h3>
                  <p className="bw-body">
                    Working closely with industry professionals to understand real-world needs.
                  </p>
                </div>
                <div className="card-sand text-center">
                  <Target className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="bw-heading-sm mb-3">Excellence</h3>
                  <p className="bw-body">
                    Delivering solutions that exceed expectations and drive measurable results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="bw-subtitle text-gray-900 mb-6">Our Story</h2>
                  <p className="bw-body mb-6">
                    Founded by construction industry veterans and AI specialists, BuildwellAI 
                    emerged from a shared vision to address the sector's most pressing challenges 
                    through intelligent technology solutions.
                  </p>
                  <p className="bw-body mb-6">
                    Our team combines decades of construction experience with cutting-edge 
                    artificial intelligence expertise, enabling us to create solutions that 
                    truly understand the industry's unique requirements.
                  </p>
                  <p className="bw-body">
                    Today, we're proud to serve construction professionals across the UK, 
                    helping them build safer, more efficient, and more profitable projects.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                    <div>
                      <h4 className="bw-heading-sm mb-2">Industry Expertise</h4>
                      <p className="bw-body">Deep understanding of construction workflows and challenges</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                    <div>
                      <h4 className="bw-heading-sm mb-2">AI Innovation</h4>
                      <p className="bw-body">Cutting-edge machine learning and automation technologies</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                    <div>
                      <h4 className="bw-heading-sm mb-2">Proven Results</h4>
                      <p className="bw-body">Track record of successful implementations across the UK</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="bw-subtitle text-gray-900 mb-6">Our Values</h2>
                <p className="bw-body text-lg">
                  The principles that guide everything we do
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="card-dark">
                  <h3 className="bw-heading-sm text-white mb-4">Safety First</h3>
                  <p className="bw-body-light">
                    Every solution we develop prioritises worker safety and regulatory compliance, 
                    helping construction sites become safer environments for everyone.
                  </p>
                </div>
                <div className="card-dark">
                  <h3 className="bw-heading-sm text-white mb-4">Transparency</h3>
                  <p className="bw-body-light">
                    We believe in clear communication, honest partnerships, and transparent 
                    processes that build trust with our clients and stakeholders.
                  </p>
                </div>
                <div className="card-dark">
                  <h3 className="bw-heading-sm text-white mb-4">Continuous Learning</h3>
                  <p className="bw-body-light">
                    The construction industry evolves rapidly, and so do we. We're committed 
                    to staying at the forefront of both industry trends and technological advances.
                  </p>
                </div>
                <div className="card-dark">
                  <h3 className="bw-heading-sm text-white mb-4">Sustainability</h3>
                  <p className="bw-body-light">
                    Our solutions help reduce waste, optimise resource usage, and support 
                    environmentally responsible construction practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="bw-subtitle text-white mb-6">Ready to Transform Your Projects?</h2>
              <p className="bw-body-light text-lg mb-8">
                Join hundreds of construction professionals who trust BuildwellAI to 
                deliver smarter, safer, and more efficient building solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact" className="btn-primary bg-white text-gray-900 hover:bg-gray-100">
                  Get In Touch
                </a>
                <a href="/pricing" className="btn-secondary border-white text-white hover:bg-white hover:text-gray-900">
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}