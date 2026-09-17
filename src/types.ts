export interface Product {
  id: string;
  categoryNumber: string;
  name: string;
  description: string;
  image: string;
  applications: string[];
  customizationOptions: string[];
}

export interface ConfiguratorOption {
  value: string;
  label: string;
}

export interface SiteConfig {
  whatsappNumber: string;
  companyInfo: {
    name: string;
    tagline: string;
    phone: string;
    email: string;
    address: string;
    social: {
      linkedin?: string;
      twitter?: string;
      instagram?: string;
    };
  };
}

export interface BagConfiguration {
  material: string;
  quality: string;
  thickness: string;
  size: string;
  color: string;
  printing: string;
  quantity?: string;
  specialRequirements?: string;
}
