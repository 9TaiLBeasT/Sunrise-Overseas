import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article' | 'service';
  siteName?: string;
  locale?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  tags?: string[];
  noindex?: boolean;
  nofollow?: boolean;
}

const SEO = ({
  title = 'Global Sunrise Overseas - Educational Consultancy | Study Abroad',
  description = 'Global Sunrise Overseas Educational Consultancy - Your trusted partner for study abroad. 98% success rate. Expert guidance for student visas, university selection, and overseas education.',
  keywords = 'study abroad, educational consultancy, student visa, overseas education, USA, UK, Canada, Australia, Germany, New Zealand, Ireland, Malta, Latvia, Slovenia',
  canonical = 'https://globalsunriseoverseas.com',
  image = 'https://globalsunriseoverseas.com/og-image.jpg',
  type = 'website',
  siteName = 'Global Sunrise Overseas',
  locale = 'en_US',
  publishedTime,
  modifiedTime,
  author = 'Global Sunrise Overseas',
  tags = [],
  noindex = false,
  nofollow = false,
}: SEOProps) => {
  const fullTitle = title.includes('Global Sunrise Overseas') ? title : `${title} | Global Sunrise Overseas`;
  const robots = `${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={robots} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={description} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@GlobalSunriseOS" />
      <meta name="twitter:creator" content="@GlobalSunriseOS" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={description} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="googlebot" content={robots} />
      <meta name="bingbot" content={robots} />
      
      {/* Article specific meta tags */}
      {type === 'article' && (
        <>
          <meta name="article:author" content={author} />
          <meta name="article:section" content="Education" />
          {tags.map((tag, index) => (
            <meta key={index} name="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Service specific meta tags */}
      {type === 'service' && (
        <>
          <meta name="service:provider" content="Global Sunrise Overseas" />
          <meta name="service:area_served" content="India, USA, UK, Canada, Australia, Germany, New Zealand, Ireland, Malta, Latvia, Slovenia" />
        </>
      )}
    </Helmet>
  );
};

export default SEO;