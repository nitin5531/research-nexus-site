import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <img 
              src="/lovable-uploads/1bb50883-a0e2-48a3-bf37-79d255a7651a.png" 
              alt="Clarity Research" 
              className="h-8 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Leading quantitative research company providing comprehensive research solutions 
              across various industries with precision and expertise.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Mail size={16} />
                <span className="text-sm">statusclarity@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} />
                <span className="text-sm">B 14 Rajori Garden West Delhi, Delhi 110027</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Industries", href: "/industries" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Research Services</h3>
            <ul className="space-y-2">
              {[
                "Business Research",
                "Qualitative Research", 
                "Healthcare Research",
                "Market Research",
                "Primary Research",
                "Secondary Research"
              ].map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/80 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80 text-sm">
            © {currentYear} Clarity Research. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;