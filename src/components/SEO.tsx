import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'service';
  structuredData?: object;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Dr Watts Electrical Hibiscus Coast | Licensed Electricians & Electrical Services',
  description = 'Professional electrical services on the Hibiscus Coast and Auckland. Licensed electricians for switchboard upgrades, LED lighting, new builds, renovations & emergency repairs. Free quotes available.',
  keywords = 'electrician hibiscus coast, orewa electrician, whangaparaoa electrician, electrical services auckland, switchboard upgrade, LED lighting, electrical repairs, licensed electrician, emergency electrician',
  image = 'https://drwattselectrical.co.nz/og-image.jpg',
  url = 'https://drwattselectrical.co.nz',
  type = 'website',
  structuredData
}) => {
  // Default structured data for local business
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://drwattselectrical.co.nz/#organization',
    name: 'Dr Watts Electrical',
    alternateName: 'Dr Watts Electrical Services',
    description: 'Professional electrical services on the Hibiscus Coast and Auckland including switchboard upgrades, LED lighting installations, new builds, renovations, and emergency electrical repairs.',
    url: 'https://drwattselectrical.co.nz',
    telephone: '+64220208415',
    email: 'office@drwatts.co.nz',
    priceRange: '$$',
    image: [
      'https://drwattselectrical.co.nz/images/logo.png',
      'https://drwattselectrical.co.nz/images/team.jpg',
      'https://drwattselectrical.co.nz/images/services.jpg'
    ],
    logo: {
      '@type': 'ImageObject',
      url: 'https://drwattselectrical.co.nz/images/logo.png',
      width: 300,
      height: 100
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Orewa',
      addressLocality: 'Hibiscus Coast',
      addressRegion: 'Auckland',
      postalCode: '0931',
      addressCountry: 'NZ'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -36.8485,
      longitude: 174.7633
    },
    areaServed: [
      {
        '@type': 'Place',
        name: 'Hibiscus Coast',
        containedInPlace: {
          '@type': 'City',
          name: 'Auckland'
        }
      },
      {
        '@type': 'Place',
        name: 'Orewa',
        containedInPlace: {
          '@type': 'Place',
          name: 'Hibiscus Coast'
        }
      },
      {
        '@type': 'Place',
        name: 'Whangaparaoa',
        containedInPlace: {
          '@type': 'Place',
          name: 'Hibiscus Coast'
        }
      },
      {
        '@type': 'City',
        name: 'Auckland',
        sameAs: 'https://en.wikipedia.org/wiki/Auckland'
      },
      {
        '@type': 'Place',
        name: 'North Shore',
        containedInPlace: {
          '@type': 'City',
          name: 'Auckland'
        }
      },
      {
        '@type': 'Place',
        name: 'West Auckland',
        containedInPlace: {
          '@type': 'City',
          name: 'Auckland'
        }
      },
      {
        '@type': 'Place',
        name: 'South Auckland',
        containedInPlace: {
          '@type': 'City',
          name: 'Auckland'
        }
      },
      {
        '@type': 'Place',
        name: 'East Auckland',
        containedInPlace: {
          '@type': 'City',
          name: 'Auckland'
        }
      }
    ],
    serviceType: [
      'Electrical Services',
      'Switchboard Upgrades',
      'LED Lighting Installation',
      'Electrical Repairs',
      'New Build Electrical',
      'Renovation Electrical',
      'Emergency Electrical Services',
      'RCD Safety Switch Installation',
      'Fault Finding',
      'Electrical Inspections'
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Electrical Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Switchboard Upgrades',
            description: 'Professional switchboard upgrade services for improved electrical safety and capacity.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'LED Lighting Installation',
            description: 'Energy-efficient LED lighting solutions for homes and businesses.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'New Build Electrical',
            description: 'Complete electrical installations for new construction projects.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Electrical Renovations',
            description: 'Electrical upgrades and installations for home renovations.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Fault Finding & Repairs',
            description: 'Professional electrical troubleshooting and repair services.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'RCD Safety Switch Services',
            description: 'Installation and maintenance of RCD safety switches for electrical protection.'
          }
        }
      ]
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '16:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '09:00',
        closes: '15:00'
      }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1'
    },
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Sarah Johnson'
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5'
        },
        reviewBody: 'Excellent service! Dr Watts upgraded our switchboard quickly and professionally. Highly recommend for any electrical work in Auckland.'
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Mike Chen'
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5'
        },
        reviewBody: 'Professional LED lighting installation. Great communication and fair pricing. Will definitely use again.'
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Emma Wilson'
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5'
        },
        reviewBody: 'Fast emergency response when our power went out. Fixed the fault quickly and explained everything clearly.'
      }
    ],
    sameAs: [
      'https://www.facebook.com/drwattselectrical',
      'https://www.instagram.com/drwattselectrical',
      'https://www.linkedin.com/company/drwattselectrical'
    ],
    founder: {
      '@type': 'Person',
      name: 'Mark Rosewell',
      jobTitle: 'Master Electrician'
    },
    employee: [
      {
        '@type': 'Person',
        name: 'Mark Rosewell',
        jobTitle: 'Master Electrician & Founder'
      },
      {
        '@type': 'Person',
        name: 'Sarah Mitchell',
        jobTitle: 'Senior Electrician'
      },
      {
        '@type': 'Person',
        name: 'Mike Thompson',
        jobTitle: 'Residential Specialist'
      }
    ],
    makesOffer: {
      '@type': 'Offer',
      name: 'Free Electrical Quote',
      description: 'Get a free, no-obligation quote for your electrical project',
      price: '0',
      priceCurrency: 'NZD'
    }
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Dr Watts Electrical" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={url} />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Dr Watts Electrical" />
      <meta property="og:locale" content="en_NZ" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@drwattselectrical" />

      {/* Additional SEO Meta Tags */}
      <meta name="geo.region" content="NZ-AUK" />
      <meta name="geo.placename" content="Hibiscus Coast" />
      <meta name="geo.position" content="-36.6020;174.6929" />
      <meta name="ICBM" content="-36.6020, 174.6929" />

      {/* Business Information */}
      <meta name="business:contact_data:street_address" content="Orewa" />
      <meta name="business:contact_data:locality" content="Hibiscus Coast" />
      <meta name="business:contact_data:region" content="Auckland" />
      <meta name="business:contact_data:postal_code" content="0931" />
      <meta name="business:contact_data:country_name" content="New Zealand" />
      <meta name="business:contact_data:phone_number" content="+64220208415" />
      <meta name="business:contact_data:email" content="office@drwatts.co.nz" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>

      {/* Additional Structured Data for Website */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          '@id': 'https://drwattselectrical.co.nz/#website',
          url: 'https://drwattselectrical.co.nz',
          name: 'Dr Watts Electrical',
          description: 'Professional electrical services in Auckland',
          publisher: {
            '@id': 'https://drwattselectrical.co.nz/#organization'
          },
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: 'https://drwattselectrical.co.nz/search?q={search_term_string}'
            },
            'query-input': 'required name=search_term_string'
          }
        })}
      </script>

      {/* Breadcrumb Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://drwattselectrical.co.nz'
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Services',
              item: 'https://drwattselectrical.co.nz/services'
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Contact',
              item: 'https://drwattselectrical.co.nz/contact'
            }
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;