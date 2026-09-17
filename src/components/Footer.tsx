import { siteConfig } from '../data/content';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="font-display font-bold text-2xl leading-tight tracking-tight mb-4">
              XPERT<br/>
              <span className="text-brand-secondary">PACKAGES</span>
            </div>
            <p className="text-brand-secondary text-sm mb-6 max-w-xs">
              {siteConfig.companyInfo.tagline || "Flexible Packaging Solutions."}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider mb-6 text-gray-400">Navigation</h4>
            <ul className="space-y-3">
              <li><a href="#products" className="text-sm text-brand-secondary hover:text-white transition-colors">Products</a></li>
              <li><a href="#capabilities" className="text-sm text-brand-secondary hover:text-white transition-colors">Capabilities</a></li>
              <li><a href="#industries" className="text-sm text-brand-secondary hover:text-white transition-colors">Industries</a></li>
              <li><a href="#contact" className="text-sm text-brand-secondary hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div id="contact">
            <h4 className="text-xs font-bold uppercase tracking-wider mb-6 text-gray-400">Contact Us</h4>
            <ul className="space-y-4">
              {siteConfig.companyInfo.phone && (
                <li>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Phone</div>
                  <a href={`tel:${siteConfig.companyInfo.phone}`} className="text-sm text-brand-secondary hover:text-white transition-colors">{siteConfig.companyInfo.phone}</a>
                </li>
              )}
              {siteConfig.whatsappNumber && siteConfig.whatsappNumber !== "[INSERT COMPANY NUMBER]" && (
                <li>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">WhatsApp</div>
                  <a href={`https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-sm text-brand-secondary hover:text-white transition-colors">{siteConfig.whatsappNumber}</a>
                </li>
              )}
              {siteConfig.companyInfo.email && (
                <li>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Email</div>
                  <a href={`mailto:${siteConfig.companyInfo.email}`} className="text-sm text-brand-secondary hover:text-white transition-colors">{siteConfig.companyInfo.email}</a>
                </li>
              )}
            </ul>
          </div>

          {/* Address */}
          <div>
            {siteConfig.companyInfo.address && (
              <>
                <h4 className="text-xs font-bold uppercase tracking-wider mb-6 text-gray-400">Location</h4>
                <address className="not-italic text-sm text-brand-secondary leading-relaxed">
                  {siteConfig.companyInfo.address.split(',').map((line, i) => (
                    <div key={i}>{line.trim()}</div>
                  ))}
                </address>
              </>
            )}
          </div>
          
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            &copy; {currentYear} Xpert Packages. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
