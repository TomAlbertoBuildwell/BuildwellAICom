import React from 'react';
import { ExternalLinkIcon } from 'lucide-react';
interface SubdomainCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  url: string;
  imageUrl: string;
}
export function SubdomainCard({
  title,
  description,
  icon,
  url,
  imageUrl
}: SubdomainCardProps) {
  return <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1 group">
      <div className="h-48 overflow-hidden relative">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="p-2 bg-orange-100 rounded-md text-orange-500 mr-3">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium">
          Visit {title.split(' ')[0]}
          <ExternalLinkIcon className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>;
}
