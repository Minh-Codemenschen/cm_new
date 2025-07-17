import { Plugin } from "../types/plugin";

export const plugins: Plugin[] = [
  {
    id: "autoblog-gpt",
    name: "AutoBlogGPT",
    description: "Create blog posts on your website from your ideas and automatically publish them using ChatGPT. This plugin seamlessly transforms your concepts into full articles, making content creation faster and easier directly on your WordPress site.",
    downloads: 15420,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    category: "Content",
    pricing: {
      single: 49,
      unlimited: 79
    }
  },
  {
    id: "autoupdate-plugins",
    name: "Autoupdate Plugins & Themes",
    description: "Manage updates and restore versions of plugins on your website safely. This plugin helps you maintain and control all your WordPress plugins and themes updates.",
    downloads: 8350,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    category: "Maintenance",
    pricing: {
      single: 19,
      unlimited: 39
    }
  },
  {
    id: "woocommerce-gdpr",
    name: "WooCommerce GDPR (DSGVO) Data Protection",
    description: "This plugin will encrypt all WooCommerce users and orders data very securely in the database. It also allows users to manage their personal data, helping website and webshop owners comply with European privacy regulations (GDPR).",
    downloads: 12840,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    category: "Security"
  },
  {
    id: "wp-gdpr",
    name: "WP GDPR Data Protection",
    description: "Secure all your user's private data with the most secure AES Encryption and Decryption with OpenSSL method. This plugin will encrypt all your user's data in your database while showing normal data to users.",
    downloads: 9240,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
    category: "Security"
  },
  {
    id: "virtual-room",
    name: "WP Virtual Room Configurator",
    description: "Add a virtual room on your website where users can configure the space directly with included devices. Easy to add highlightable areas of your image and edit devices/images later.",
    downloads: 6420,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
    category: "Design"
  },
  {
    id: "gift-voucher",
    name: "WP Gift Voucher Plugin",
    description: "Let customers buy gift cards/certificates for your services & products directly on your website. Includes templates for Birthday, New Year, Valentine's day, Independence day, etc. Create custom templates with your own logo or event images.",
    downloads: 11320,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48",
    category: "eCommerce"
  },
  {
    id: "acf-s3",
    name: "ACF S3 Media Files",
    description: "A developer-friendly plugin for managing ACF media files with Amazon S3. Extremely affordable with powerful governance framework, actions, and filters for easy scaling and optimization.",
    downloads: 7840,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    category: "Development"
  }
];