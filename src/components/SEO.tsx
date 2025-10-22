import { Helmet } from 'react-helmet-async';
import { buildCanonicalUrl, siteMetadata } from '@/data/siteMetadata';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  type?: string;
  structuredData?: Record<string, unknown>[];
}

const SEO = ({
  title = 'Impresa di Pulizie a Brescia e Provincia',
  description = 'Artic Pulizie è l’impresa di pulizie a Brescia specializzata in uffici, condomini, industrie e sanificazioni. Preventivo gratuito in 24 ore.',
  keywords = 'impresa di pulizie brescia, pulizie uffici, pulizie industriali, sanificazione ambienti, pulizie condomini',
  canonical,
  ogImage = `${siteMetadata.baseUrl}/assets/og-default.png`,
  type = 'website',
  structuredData
}: SEOProps) => {
  const fullTitle = title.includes(siteMetadata.siteName) ? title : `${title} | ${siteMetadata.siteName}`;
  const canonicalUrl = canonical
    ? canonical.startsWith('http')
      ? canonical
      : buildCanonicalUrl(canonical)
    : buildCanonicalUrl(typeof window !== 'undefined' ? window.location.pathname : '/');
  const baseStructuredData: Record<string, unknown>[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: siteMetadata.siteName,
      image: siteMetadata.logoUrl,
      '@id': `${siteMetadata.baseUrl}#localbusiness`,
      url: siteMetadata.baseUrl,
      telephone: siteMetadata.phone,
      priceRange: '€€',
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteMetadata.streetAddress,
        addressLocality: siteMetadata.locality,
        postalCode: siteMetadata.postalCode,
        addressCountry: siteMetadata.countryCode
      },
      sameAs: siteMetadata.socialProfiles,
      areaServed: siteMetadata.areaServed,
      aggregateRating: siteMetadata.aggregateRating
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: siteMetadata.legalName,
      url: siteMetadata.baseUrl,
      logo: siteMetadata.logoUrl,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: siteMetadata.phone,
        contactType: 'customer service',
        availableLanguage: ['Italian']
      }
    }
  ];

  const schemaToRender = structuredData
    ? [...baseStructuredData, ...structuredData].filter(Boolean) as Record<string, unknown>[]
    : baseStructuredData;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content={siteMetadata.legalName} />
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hrefLang="it" href={canonicalUrl} />
      <link rel="alternate" hrefLang="it-IT" href={canonicalUrl} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteMetadata.siteName} />
      <meta property="og:locale" content="it_IT" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {schemaToRender.map((schema, index) => (
        <script
          key={`structured-data-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Helmet>
  );
};

export default SEO;
