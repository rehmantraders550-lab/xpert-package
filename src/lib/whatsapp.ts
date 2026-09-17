import { siteConfig } from '../data/content';
import { BagConfiguration } from '../types';

export function createWhatsAppLink(message: string): string {
  const encodedMessage = encodeURIComponent(message);
  // Default to a placeholder if the number is not set, or return a mailto fallback?
  // User asked to open WhatsApp. 
  const number = siteConfig.whatsappNumber;
  if (!number || number === "[INSERT COMPANY NUMBER]") {
     // In a real scenario you'd want a valid number. We'll format it assuming it's valid enough for the intent.
     // Removing non-numeric characters for the URL
     const cleanNumber = number.replace(/\D/g, '');
     return `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
  }
  
  const cleanNumber = number.replace(/\D/g, '');
  return `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
}

export function generateConfiguratorMessage(config: BagConfiguration): string {
  return `Hello Xpert Packages, I am interested in an LLDPE bag.

Material: ${config.material}
Quality: ${config.quality}
Thickness: ${config.thickness}
Size: ${config.size}
Colour: ${config.color}
Printing: ${config.printing}

Please provide quotation and production details.`;
}

export function generateQuoteFormMessage(data: any): string {
  return `Hello Xpert Packages,

I would like to request a quotation.

Bag Type:
${data.bagType}

Size:
${data.size}

Thickness:
${data.thickness || 'Not specified'}

Quantity:
${data.quantity}

Printing:
${data.printing}

Special Requirements:
${data.specialRequirements || 'None'}

Please provide quotation and production details.`;
}
