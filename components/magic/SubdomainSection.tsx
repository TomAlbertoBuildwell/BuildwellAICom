import React from 'react';
import { SubdomainCard } from './SubdomainCard';
import { MessageSquareIcon, EyeIcon, NewspaperIcon, SearchIcon, GitMergeIcon } from 'lucide-react';
export function SubdomainSection() {
  const subdomains = [{
    title: 'Chat Platform',
    description: 'Communicate with your team and AI assistants to streamline construction workflows.',
    icon: <MessageSquareIcon className="h-6 w-6" />,
    url: 'https://chat.buildwellai.com',
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  }, {
    title: 'Eye Monitoring',
    description: 'Visual inspection and monitoring solutions for construction sites and projects.',
    icon: <EyeIcon className="h-6 w-6" />,
    url: 'https://eye.buildwellai.com',
    imageUrl: 'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
  }, {
    title: 'News Hub',
    description: 'Stay updated with the latest trends and news in the UK construction industry.',
    icon: <NewspaperIcon className="h-6 w-6" />,
    url: 'https://news.buildwellai.com',
    imageUrl: 'https://images.unsplash.com/photo-1512187849-463fdb898f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
  }, {
    title: 'Inspect Tool',
    description: 'Advanced inspection tools for quality assurance and compliance in construction.',
    icon: <SearchIcon className="h-6 w-6" />,
    url: 'https://inspect.buildwellai.com',
    imageUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  }, {
    title: 'Thread Collaboration',
    description: 'Collaborative platform for project threads, discussions, and documentation.',
    icon: <GitMergeIcon className="h-6 w-6" />,
    url: 'https://thread.buildwellai.com',
    imageUrl: 'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  }];
  return <section id="solutions" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our AI-Powered Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our suite of specialized tools designed to revolutionize
            the UK construction industry through artificial intelligence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subdomains.map((subdomain, index) => <SubdomainCard key={index} title={subdomain.title} description={subdomain.description} icon={subdomain.icon} url={subdomain.url} imageUrl={subdomain.imageUrl} />)}
        </div>
      </div>
    </section>;
}