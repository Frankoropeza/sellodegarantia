// seo.ts — JSON-LD Schema generators for Sello de Garantía
import {
  SITE_NAME, SITE_URL, LEGAL_NAME, SITE_DESCRIPTION,
  PHONE, PHONE_HREF, EMAIL, WHATSAPP_HREF,
  HOURS, LOCATION, GEO, BRAND, EXPERIENCE_YEARS,
} from './config';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    legalName: LEGAL_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: SITE_DESCRIPTION,
    telephone: `+52 ${PHONE}`,
    email: EMAIL,
    foundingDate: '1998',
    address: {
      '@type': 'PostalAddress',
      streetAddress: LOCATION.street,
      addressLocality: LOCATION.borough,
      addressRegion: LOCATION.state,
      postalCode: LOCATION.zip,
      addressCountry: LOCATION.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: GEO.lat,
      longitude: GEO.lng,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Mexico',
    },
    sameAs: [],
  };
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Manufacturer',
    name: SITE_NAME,
    legalName: LEGAL_NAME,
    url: SITE_URL,
    image: `${SITE_URL}/logo.png`,
    description: SITE_DESCRIPTION,
    telephone: PHONE_HREF,
    email: EMAIL,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: LOCATION.street,
      addressLocality: LOCATION.borough,
      addressRegion: LOCATION.state,
      postalCode: LOCATION.zip,
      addressCountry: LOCATION.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: GEO.lat,
      longitude: GEO.lng,
    },
    openingHoursSpecification: HOURS.structured.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days.split('-').length > 1
        ? h.days
        : [h.days],
      opens: h.open,
      closes: h.close,
    })),
    areaServed: {
      '@type': 'Country',
      name: 'Mexico',
    },
  };
}

export function webSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    inLanguage: 'es-MX',
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { text: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.text,
      item: item.href.startsWith('http') ? item.href : `${SITE_URL}${item.href}`,
    })),
  };
}

export function productSchema(opts: {
  name: string;
  description: string;
  url: string;
  category?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: opts.name,
    description: opts.description,
    url: opts.url.startsWith('http') ? opts.url : `${SITE_URL}${opts.url}`,
    brand: {
      '@type': 'Brand',
      name: SITE_NAME,
    },
    manufacturer: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    category: opts.category || 'Packaging Materials',
    countryOfOrigin: {
      '@type': 'Country',
      name: 'Mexico',
    },
  };
}
