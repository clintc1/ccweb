export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Clinton Cawood',
    subtitle: 'Drinks Journalist',
    description: 'Portfolio site of Clinton Cawood',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Portfolio',
            href: '/portfolio'
        },
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
     //   {
     //       text: 'Terms',
     //       href: '/terms'
     //   },
     //   {
     //       text: 'Download theme',
     //       href: 'https://github.com/JustGoodUI/dante-astro-theme'
     //   }
    ],
    socialLinks: [
        {
            text: 'Instagram',
            href: 'https://instagram.com/clintc1'
        },
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/clinton-cawood/'
        },
    //    {
    //        text: 'X/Twitter',
    //        href: 'https://twitter.com/'
    //    }
    ],
    hero: {
        title: 'Clinton Cawood',
        text: "Portfolio site",
        image: {
            src: '/hero.png',
            alt: 'Drinks'
        },
        actions: [
            {
                text: 'Get in touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
