import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { Phone, ChevronDown, Menu, X } from 'lucide-react';
import logo from '@/assets/logo.png';

const services = [
  { id: 'student-visas', title: 'Student Visas', description: 'Complete visa application support' },
  { id: 'career-guidance', title: 'Career Guidance', description: 'Expert counseling for your academic journey' },
  { id: 'university-selection', title: 'University Selection', description: 'Choose the perfect institution for your goals' },
  { id: 'visa-assistance', title: 'Visa Assistance', description: 'End-to-end visa processing support' },
  { id: 'education-loan-help', title: 'Education Loan Help', description: 'Financial assistance and loan guidance' },
  { id: 'forex-travel-support', title: 'Forex & Travel Support', description: 'Complete travel and forex services' },
];

const countries = [
  { name: 'United States', slug: 'united-states', flag: '🇺🇸' },
  { name: 'Canada', slug: 'canada', flag: '🇨🇦' },
  { name: 'Australia', slug: 'australia', flag: '🇦🇺' },
  { name: 'United Kingdom', slug: 'united-kingdom', flag: '🇬🇧' },
  { name: 'Ireland', slug: 'ireland', flag: '🇮🇪' },
  { name: 'Germany', slug: 'germany', flag: '🇩🇪' },
  { name: 'New Zealand', slug: 'new-zealand', flag: '🇳🇿' },
  { name: 'Latvia', slug: 'latvia', flag: '🇱🇻' },
  { name: 'Slovenia', slug: 'slovenia', flag: '🇸🇮' },
  { name: 'Malta', slug: 'malta', flag: '🇲🇹' },
];

const EduCompassHeader = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCountriesOpen, setIsCountriesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleScrollToSection = (sectionId: string) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/">
            <img src={logo} alt="Global Sunrise Overseas" className="h-16" />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link 
                  to="/" 
                  className={navigationMenuTriggerStyle()}
                >
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {services.map((service) => (
                    <NavigationMenuLink asChild key={service.id}>
                      <Link
                        to={`/services/${service.id}`}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">{service.title}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {service.description}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Countries</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {countries.map((country) => (
                    <NavigationMenuLink asChild key={country.slug}>
                      <Link
                        to={`/countries/${country.slug}`}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none flex items-center gap-2">
                          <span>{country.flag}</span>
                          {country.name}
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Study in {country.name}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <button
                  onClick={() => handleScrollToSection('contact')}
                  className={navigationMenuTriggerStyle()}
                >
                  Contact
                </button>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-accent"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Call Now Button - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-3">
          <Button 
            variant="default" 
            className="bg-gradient-primary"
            onClick={() => handleScrollToSection('contact')}
          >
            <Phone className="mr-2 h-4 w-4" />
            Call Now
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Services</h3>
                {services.map((service) => (
                  <Link
                    key={service.id}
                    to={`/services/${service.id}`}
                    className="block pl-4 text-base hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
              
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Countries</h3>
                {countries.map((country) => (
                  <Link
                    key={country.slug}
                    to={`/countries/${country.slug}`}
                    className="block pl-4 text-base hover:text-primary transition-colors flex items-center gap-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>{country.flag}</span>
                    {country.name}
                  </Link>
                ))}
              </div>
              
              <button
                onClick={() => {
                  handleScrollToSection('contact');
                  setIsMobileMenuOpen(false);
                }}
                className="text-lg font-medium hover:text-primary transition-colors text-left"
              >
                Contact
              </button>
              
              <Button 
                variant="default" 
                className="bg-gradient-primary w-full"
                onClick={() => {
                  handleScrollToSection('contact');
                  setIsMobileMenuOpen(false);
                }}
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default EduCompassHeader;