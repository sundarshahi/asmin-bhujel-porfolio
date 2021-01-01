import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

interface IProps {
  description?: string;
  lang?: string;
  meta?: any;
  keywords?: string[] | undefined;
  title: string;
}

const SeoHelmet = ({ description, lang, meta, title, keywords }: IProps) => {
  let titleTemplate = `Asmin Bhujel | Security Analyst in IBM India${
    title !== 'Home' ? ' » %s' : ''
  }`;

  switch (title) {
    case 'Home':
      titleTemplate = 'Asmin Bhujel - Security Analyst in IBM India';
      break;
    case 'About':
      titleTemplate = 'About Asmin Bhujel - A Security Analyst in IBM India';
      break;
    case 'Contact':
      titleTemplate =
        'Reach out to Asmin Bhujel - Security Analyst in IBM India';
      break;
    case 'Portfolio':
      titleTemplate =
        'Portfolio - Work samples of Asmin Bhujel (Security Analyst)';
      break;
    default:
      titleTemplate = `Asmin Bhujel | Security Analyst in IBM India${
        title !== 'Home' ? ' » %s' : ''
      }`;
  }

  const metaDescription =
    description ||
    'Security Analyst  with a focus on secured tech world. I have more than 2 years experience working in software engineering and network security field.';
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={titleTemplate}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `author`,
          content: `Asmin Bhujel`,
        },
        {
          property: `og:title`,
          content: titleTemplate,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          name: `og:image`,
          content: ``,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: `https://github.com/sundarshahi`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: 'Asmin Bhujel',
        },
        {
          name: `twitter:image`,
          content: ``,
        },
        {
          name: `twitter:title`,
          content: titleTemplate,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          keywords && keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
      script={[
        {
          type: `application/ld+json`,
          innerHTML: `{"@context":"http://schema.org","@type":"WebSite","name":"https://github.com/sundarshahi","alternateName":"Asmin Bhujel","url":"https://github.com/sundarshahi","description":"Front-End Software Engineer with a focus on JavaScript and React.js. I have more than 2 years experience working in software engineering.","image":" "}`,
        },
        {
          type: `application/ld+json`,
          innerHTML: `{"@context":"http://schema.org","@type":"Person","image":"https://media-exp1.licdn.com/dms/image/C5103AQGsV-51BQlFUQ/profile-displayphoto-shrink_100_100/0/1555234185549?e=1614816000&v=beta&t=56d3Dk3dGuKNMZO6oAyq4ue-rYmb6SzMaq2LsGvAfVE","name":"Asmin Bhujel","alternateName":"JakeHerp","url":"https://herper.io/","jobTitle":["Front-End Engineer","Web Developer","Frontend Engineer", "Front-End Developer"],"hasOccupation":{"@type":"Occupation","name":"Senior Front-End Engineer","occupationLocation":{"@type":"City","name":"Kathmandu"},"estimatedSalary":[{"@type":"MonetaryAmountDistribution","name":"base","currency":"NRS","unitText":"HOUR","percentile10":"74","percentile25":"80","median":"90","percentile75":"100","percentile90":"106"}],"description":"Develops web applications and websites using JavaScript, React and HTML5.","skills":"HTML5, CSS, JavaScript, React, PHP, Sass, Less, Node.js, Express.js, Vue.js, Gatsby, Next.js, JavaScript Frameworks, Git, Github, NPM, SEO, CMS, WordPress, Joomla, Drupal, E-Commerce","alternateName":["Frontend Developer","Full Stack Developer","Frontend Engineer"],"responsibilities":["App Development","Web Design","Website Development","JavaScript Development","WordPress Development","CMS Development","Frontend Development","Full Stack Development","Online Marketing","SEO Services","Web Developer","Website Maintenance"]},"sameAs":["http://linkedin.com/in/asminbhujel","http://twitter.com/asminbhujel","https://github.com/asminbhujel","https://www.facebook.com/asminbhujel","https://instagram.com/asminbhujel"],"brand":[{"@type":"Brand","name":"Software Engineer","alternateName":"Front-End Engineer"},{"@type":"Brand","name":"Asmin","alternateName":"Asmin Bhujel"}],"memberOf":[{"@type":"Organization","url":"https://creativ.agency/","name":"Creativ Agency Ltd","alternateName":"Creativ Advertising Agency"},{"@type":"Organization","url":"https://www.dennis.co.uk/","name":"Dennis Digital","alternateName":"Dennis"}],"homeLocation":{"@type":"City","name":"London"},"owns":{"@type":"Organization","url":"https://creativ.agency/","name":"Creativ Agency Ltd","alternateName":"Creativ Advertising Agency","sameAs":"https://www.linkedin.com/company/creativ.agency"},"alumniOf":{"@type":"Organization","url":"https://www.thespecialistworks.com/","name":"The Specialist Works"},"nationality":{"@type":"Country","name":"Germany"},"birthDate":"1990-11-06","birthPlace":{"@type":"Place","address":{"@type":"PostalAddress","addressLocality":"Oelsnitz","postalCode":"08606","addressCountry":"Germany"}},"parent":[{"name":"Norbert Herper","jobTitle":"Chef","birthDate":"1967-08-22"}],"spouse":{"name":"Cinthia Cid Paz","birthDate":"1995-11-28","nationality":{"@type":"Country","name":"Nepal"},"birthPlace":{"@type":"Place","address":{"@type":"PostalAddress","addressLocality":"Toluca","addressCountry":"Nepal"}}}}`,
        },
      ]}
    />
  );
};

SeoHelmet.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  description: ``,
};

SeoHelmet.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

export default SeoHelmet;
