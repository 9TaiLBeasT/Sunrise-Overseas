"use client";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin as LinkedIn,
} from "lucide-react";
import { FooterBackgroundGradient, TextHoverEffect } from "@/components/ui/hover-footer";

function EduCompassFooter() {
  const location = useLocation();
  const navigate = useNavigate();

  // Handle navigation for all types of links
  const handleNavigation = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    
    if (href.startsWith('#')) {
      // Handle anchor links
      const sectionId = href.substring(1);
      
      if (location.pathname === '/') {
        // On home page, scroll to section
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // On other pages, navigate to home then scroll to section
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else if (href.startsWith('mailto:') || href.startsWith('tel:')) {
      // Handle external links (email, phone)
      window.location.href = href;
    } else {
      // Handle route navigation
      navigate(href);
    }
  };

  // Footer link data for educational consultancy
  const footerLinks = [
    {
      title: "Our Services",
      links: [
        { label: "Student Visas", href: "/services/student-visas" },
        { label: "Career Guidance", href: "/services/career-guidance" },
        { label: "University Selection", href: "/services/university-selection" },
        { label: "Visa Assistance", href: "/services/visa-assistance" },
        { label: "Education Loan Help", href: "/services/education-loan-help" },
        { label: "Travel Assistance", href: "/services/travel-assistance" },
      ],
    },
    {
      title: "Popular Destinations",
      links: [
        { label: "Study in USA", href: "/countries/united-states" },
        { label: "Study in UK", href: "/countries/united-kingdom" },
        { label: "Study in Canada", href: "/countries/canada" },
        { label: "Study in Australia", href: "/countries/australia" },
        { label: "Study in Germany", href: "/countries/germany" },
        { label: "Study in New Zealand", href: "/countries/new-zealand" },
      ],
    },
    {
      title: "Quick Links",
      links: [
        { label: "About Us", href: "#" },
        { label: "Success Stories", href: "#testimonials" },
        { label: "Contact Us", href: "#contact" },
        { label: "Home", href: "/" },
      ],
    },
  ];

  // Contact info data
  const contactInfo = [
    {
      icon: <Mail size={18} className="text-[hsl(25,95%,53%)]" />,
      text: "info@sunriseoverseas.com",
      href: "mailto:info@sunriseoverseas.com",
    },
    {
      icon: <Phone size={18} className="text-[hsl(25,95%,53%)]" />,
      text: "+91 88011 53451",
      href: "tel:+918801153451",
    },
    {
      icon: <Phone size={18} className="text-[hsl(25,95%,53%)]" />,
      text: "+91 97040 93525",
      href: "tel:+919704093525",
    },
    {
      icon: <MapPin size={18} className="text-[hsl(25,95%,53%)]" />,
      text: "Hyderabad, India",
      href: "#contact",
    },
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "https://www.facebook.com/share/1Fcwu7pDQF/", label: "Facebook" },
    { icon: <Instagram size={20} />, href: "https://www.instagram.com/_sunriseoverseas_?utm_source=qr&igsh=am4xeGdpMWh4Nzlp", label: "Instagram" },
    { icon: <LinkedIn size={20} />, href: "https://www.linkedin.com/in/sandeep-g-832752296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn" },
  ];

  return (
    <footer className="relative w-full bg-gradient-to-b from-[hsl(220,25%,8%)] to-[hsl(220,25%,5%)] text-[hsl(210,40%,98%)] overflow-hidden">
      <FooterBackgroundGradient />
      
      {/* Animated Logo/Text Section */}
      <div className="relative z-10 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <TextHoverEffect 
              text="SUNRISE OVERSEAS" 
              duration={0.5}
              className="mx-auto"
            />
            <p className="text-[hsl(210,20%,65%)] mt-4 text-lg">
              Your Trusted Partner for Overseas Education
            </p>
          </div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[hsl(210,40%,98%)] mb-4">About Sunrise Overseas</h3>
              <p className="text-[hsl(210,20%,65%)] leading-relaxed">
                Leading overseas educational consultancy helping students achieve their dreams of studying abroad with 98% success rate.
              </p>
              <div className="flex space-x-4 mt-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="text-[hsl(210,20%,65%)] hover:text-[hsl(25,95%,53%)] transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      // Don't prevent default for external social links
                      e.stopPropagation();
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerLinks.map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-xl font-bold text-[hsl(210,40%,98%)] mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        onClick={(e) => handleNavigation(link.href, e)}
                        className="text-[hsl(210,20%,65%)] hover:text-[hsl(25,95%,53%)] transition-colors duration-200 block py-1 cursor-pointer"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[hsl(210,40%,98%)] mb-4">Contact Us</h3>
              <ul className="space-y-3">
                {contactInfo.map((info, index) => (
                  <li key={index}>
                    <a
                      href={info.href}
                      onClick={(e) => handleNavigation(info.href, e)}
                      className="flex items-center space-x-3 text-[hsl(210,20%,65%)] hover:text-[hsl(25,95%,53%)] transition-colors duration-200 cursor-pointer"
                    >
                      {info.icon}
                      <span>{info.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Address Section */}
          <div className="border-t border-[hsl(217,32%,17.5%)] pt-8 mb-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-[hsl(210,40%,98%)] mb-2">Our Office</h3>
              <p className="text-[hsl(210,20%,65%)]">
                Plot No.3/ H.No: 2-1-30/1/3, Saraswathi Colony<br />
                Behind Sumithra Hospital, Uppal Ring Road, Uppal<br />
                Hyderabad, Telangana, India
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[hsl(217,32%,17.5%)] pt-8">
            <div className="text-center">
              <p className="text-[hsl(215,20%,65%)] text-sm">
                © 2025 Global Sunrise Overseas Educational Consultancy. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default EduCompassFooter;