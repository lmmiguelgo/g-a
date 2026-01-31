import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.gordonandassociates.biz',
      lastModified: new Date('2026-01-30'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://www.gordonandassociates.biz/services',
      lastModified: new Date('2026-01-30'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://www.gordonandassociates.biz/services/business-management',
      lastModified: new Date('2026-01-30'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.gordonandassociates.biz/services/tax-services',
      lastModified: new Date('2026-01-30'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
     
    {
      url: 'https://www.gordonandassociates.biz/services/executive-mentorship',
      lastModified: new Date('2026-01-30'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.gordonandassociates.biz/services/small-business-consulting',
      lastModified: new Date('2026-01-30'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.gordonandassociates.biz/services/above-the-neck',
      lastModified: new Date('2026-01-30'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.gordonandassociates.biz/company',
      lastModified: new Date('2026-01-30'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.gordonandassociates.biz/philanthropy',
      lastModified: new Date('2026-01-30'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://www.gordonandassociates.biz/press',
      lastModified: new Date('2026-01-30'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.gordonandassociates.biz/contact',
      lastModified: new Date('2026-01-30'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
   
  ];
}