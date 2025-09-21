"use client"

import { Footer } from "@/components/footer"
import { Header } from "@/components/Header"
import { Shield, Lock, Eye, FileText, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="bw-title text-white mb-6">
                Privacy Policy
              </h1>
              <p className="bw-body-light text-xl mb-8 max-w-2xl mx-auto">
                Your privacy is important to us. This policy explains how we collect, 
                use, and protect your personal information.
              </p>
              <div className="flex items-center justify-center space-x-2 text-white/80">
                <Clock className="h-4 w-4" />
                <span className="bw-caption">Last updated: January 2024</span>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Principles */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="bw-subtitle text-gray-900 mb-6">Our Privacy Principles</h2>
                <p className="bw-body text-lg">
                  BuildwellAI is committed to protecting your privacy and maintaining 
                  the confidentiality of your personal information.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="card-sand text-center">
                  <Shield className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h3 className="bw-heading-sm mb-3">Data Protection</h3>
                  <p className="bw-body">
                    We implement robust security measures to protect your data from 
                    unauthorised access, alteration, or disclosure.
                  </p>
                </div>
                <div className="card-sand text-center">
                  <Eye className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="bw-heading-sm mb-3">Transparency</h3>
                  <p className="bw-body">
                    We clearly explain what data we collect, how we use it, and 
                    provide you with control over your information.
                  </p>
                </div>
                <div className="card-sand text-center">
                  <Lock className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="bw-heading-sm mb-3">Minimal Collection</h3>
                  <p className="bw-body">
                    We only collect the personal information necessary to provide 
                    our services and improve your experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                
                {/* Information We Collect */}
                <div className="mb-12">
                  <h2 className="bw-heading-lg text-gray-900 mb-6">1. Information We Collect</h2>
                  
                  <h3 className="bw-heading-md text-gray-800 mb-4">Personal Information</h3>
                  <p className="bw-body mb-4">
                    When you use our services, we may collect the following personal information:
                  </p>
                  <ul className="bw-body space-y-2 mb-6 list-disc list-inside">
                    <li>Name, email address, and contact details</li>
                    <li>Company name and job title</li>
                    <li>Account credentials and authentication information</li>
                    <li>Payment information (processed securely by third-party providers)</li>
                    <li>Communication preferences and subscription settings</li>
                  </ul>

                  <h3 className="bw-heading-md text-gray-800 mb-4">Usage Information</h3>
                  <p className="bw-body mb-4">
                    We automatically collect certain information about your use of our services:
                  </p>
                  <ul className="bw-body space-y-2 mb-6 list-disc list-inside">
                    <li>Device information (IP address, browser type, operating system)</li>
                    <li>Usage patterns and feature interactions</li>
                    <li>Log files and error reports</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>

                {/* How We Use Information */}
                <div className="mb-12">
                  <h2 className="bw-heading-lg text-gray-900 mb-6">2. How We Use Your Information</h2>
                  <p className="bw-body mb-4">
                    We use your personal information for the following purposes:
                  </p>
                  <ul className="bw-body space-y-2 mb-6 list-disc list-inside">
                    <li>Providing and maintaining our services</li>
                    <li>Processing transactions and managing your account</li>
                    <li>Communicating with you about our services</li>
                    <li>Improving our products and developing new features</li>
                    <li>Ensuring security and preventing fraud</li>
                    <li>Complying with legal obligations</li>
                    <li>Sending marketing communications (with your consent)</li>
                  </ul>
                </div>

                {/* Information Sharing */}
                <div className="mb-12">
                  <h2 className="bw-heading-lg text-gray-900 mb-6">3. Information Sharing</h2>
                  <p className="bw-body mb-4">
                    We do not sell, trade, or rent your personal information to third parties. 
                    We may share your information in the following limited circumstances:
                  </p>
                  <ul className="bw-body space-y-2 mb-6 list-disc list-inside">
                    <li>With service providers who assist in delivering our services</li>
                    <li>When required by law or legal process</li>
                    <li>To protect our rights, property, or safety</li>
                    <li>With your explicit consent</li>
                    <li>In connection with a business transaction (merger, acquisition, etc.)</li>
                  </ul>
                </div>

                {/* Data Security */}
                <div className="mb-12">
                  <h2 className="bw-heading-lg text-gray-900 mb-6">4. Data Security</h2>
                  <p className="bw-body mb-4">
                    We implement appropriate technical and organisational measures to protect 
                    your personal information:
                  </p>
                  <ul className="bw-body space-y-2 mb-6 list-disc list-inside">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security assessments and audits</li>
                    <li>Access controls and authentication measures</li>
                    <li>Employee training on data protection</li>
                    <li>Incident response and breach notification procedures</li>
                  </ul>
                </div>

                {/* Your Rights */}
                <div className="mb-12">
                  <h2 className="bw-heading-lg text-gray-900 mb-6">5. Your Rights</h2>
                  <p className="bw-body mb-4">
                    Under UK data protection law, you have the following rights:
                  </p>
                  <ul className="bw-body space-y-2 mb-6 list-disc list-inside">
                    <li>Right to access your personal information</li>
                    <li>Right to rectify inaccurate or incomplete data</li>
                    <li>Right to erasure ("right to be forgotten")</li>
                    <li>Right to restrict processing</li>
                    <li>Right to data portability</li>
                    <li>Right to object to processing</li>
                    <li>Right to withdraw consent</li>
                  </ul>
                  <p className="bw-body">
                    To exercise these rights, please contact us using the information provided below.
                  </p>
                </div>

                {/* Cookies */}
                <div className="mb-12">
                  <h2 className="bw-heading-lg text-gray-900 mb-6">6. Cookies and Tracking</h2>
                  <p className="bw-body mb-4">
                    We use cookies and similar technologies to enhance your experience:
                  </p>
                  <ul className="bw-body space-y-2 mb-6 list-disc list-inside">
                    <li>Essential cookies for website functionality</li>
                    <li>Analytics cookies to understand usage patterns</li>
                    <li>Preference cookies to remember your settings</li>
                    <li>Marketing cookies for personalised content (with consent)</li>
                  </ul>
                  <p className="bw-body">
                    You can control cookie settings through your browser preferences.
                  </p>
                </div>

                {/* Data Retention */}
                <div className="mb-12">
                  <h2 className="bw-heading-lg text-gray-900 mb-6">7. Data Retention</h2>
                  <p className="bw-body mb-4">
                    We retain your personal information only as long as necessary:
                  </p>
                  <ul className="bw-body space-y-2 mb-6 list-disc list-inside">
                    <li>Account data: While your account is active and for 2 years after closure</li>
                    <li>Usage data: Up to 3 years for analytics and improvement purposes</li>
                    <li>Communication records: Up to 5 years for customer service</li>
                    <li>Legal compliance: As required by applicable laws</li>
                  </ul>
                </div>

                {/* International Transfers */}
                <div className="mb-12">
                  <h2 className="bw-heading-lg text-gray-900 mb-6">8. International Data Transfers</h2>
                  <p className="bw-body mb-4">
                    Your personal information is primarily processed within the UK. If we transfer 
                    data internationally, we ensure appropriate safeguards are in place, including:
                  </p>
                  <ul className="bw-body space-y-2 mb-6 list-disc list-inside">
                    <li>Adequacy decisions by the UK government</li>
                    <li>Standard contractual clauses</li>
                    <li>Binding corporate rules</li>
                    <li>Other approved transfer mechanisms</li>
                  </ul>
                </div>

                {/* Changes to Policy */}
                <div className="mb-12">
                  <h2 className="bw-heading-lg text-gray-900 mb-6">9. Changes to This Policy</h2>
                  <p className="bw-body mb-4">
                    We may update this privacy policy from time to time. We will notify you of 
                    significant changes by:
                  </p>
                  <ul className="bw-body space-y-2 mb-6 list-disc list-inside">
                    <li>Email notification to registered users</li>
                    <li>Prominent notice on our website</li>
                    <li>In-app notifications where applicable</li>
                  </ul>
                  <p className="bw-body">
                    Continued use of our services after changes indicates acceptance of the updated policy.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="card-dark text-center">
                <h2 className="bw-heading-lg text-white mb-6">Contact Us About Privacy</h2>
                <p className="bw-body-light mb-8">
                  If you have questions about this privacy policy or how we handle your 
                  personal information, please don't hesitate to contact us.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 text-left">
                  <div>
                    <h4 className="bw-heading-sm text-white mb-4">Data Protection Officer</h4>
                    <div className="space-y-2 bw-body-light">
                      <p>BuildwellAI Ltd</p>
                      <p>123 Construction House</p>
                      <p>London, EC2A 4NE</p>
                      <p>United Kingdom</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="bw-heading-sm text-white mb-4">Contact Details</h4>
                    <div className="space-y-2 bw-body-light">
                      <p>Email: privacy@buildwellai.com</p>
                      <p>Phone: +44 20 1234 5678</p>
                      <p>Response time: Within 5 business days</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button className="btn-gradient">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Privacy Team
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Regulatory Information */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="bw-heading-lg text-gray-900 mb-6">Regulatory Compliance</h2>
              <p className="bw-body text-gray-600 mb-8">
                BuildwellAI is committed to compliance with applicable data protection regulations.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="card-sand">
                  <FileText className="h-8 w-8 text-blue-500 mx-auto mb-3" />
                  <h4 className="bw-heading-sm mb-2">UK GDPR</h4>
                  <p className="bw-caption text-gray-600">
                    Compliant with UK General Data Protection Regulation
                  </p>
                </div>
                <div className="card-sand">
                  <Shield className="h-8 w-8 text-green-500 mx-auto mb-3" />
                  <h4 className="bw-heading-sm mb-2">Data Protection Act</h4>
                  <p className="bw-caption text-gray-600">
                    Adheres to UK Data Protection Act 2018
                  </p>
                </div>
                <div className="card-sand">
                  <Lock className="h-8 w-8 text-orange-500 mx-auto mb-3" />
                  <h4 className="bw-heading-sm mb-2">ISO 27001</h4>
                  <p className="bw-caption text-gray-600">
                    Information security management certification
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}