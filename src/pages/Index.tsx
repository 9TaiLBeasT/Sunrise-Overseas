import { Phone, Mail, MapPin, GraduationCap, FileCheck, Building2, HelpCircle, DollarSign, Plane } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import EduCompassFooter from "@/components/ui/edu-compass-footer";
import EduCompassHeader from "@/components/ui/edu-compass-header";
import { HeroCarousel } from "@/components/HeroCarousel";
import { DestinationCard } from "@/components/ui/card-21";
import { ScrollFlyIn } from "@/components/ui/hero-section-3";
import SkewCards from "@/components/ui/gradient-card-showcase";
import { FeatureSteps } from "@/components/ui/feature-section";
import { visaFeatures, successCountries } from "@/components/ui/visa-feature-data";
import TestimonialsSection from "@/components/ui/testimonials-section";
import SEO from "@/components/SEO";
import heroBanner1 from "@/assets/hero-banner.jpg";
import heroBanner2 from "@/assets/hero-banner-2.jpg";
import heroBanner3 from "@/assets/hero-banner-3.jpg";
import usaImage from "@/assets/countries/usa.jpg";
import canadaImage from "@/assets/countries/canada.jpg";
import australiaImage from "@/assets/countries/australia.jpg";
import ukImage from "@/assets/countries/uk.jpg";
import irelandImage from "@/assets/countries/ireland.jpg";
import germanyImage from "@/assets/countries/germany.jpg";
import newzealandImage from "@/assets/countries/newzealand.jpg";
import latviaImage from "@/assets/countries/latvia.jpg";
import sloveniaImage from "@/assets/countries/slovenia.jpg";
import maltaImage from "@/assets/countries/malta.jpg";

const Index = () => {
  const navigate = useNavigate();

  const handleCallNow = () => {
    window.location.href = 'tel:+918801153451';
  };

  const handleScrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const heroImages = [heroBanner1, heroBanner2, heroBanner3];
  
  const services = [
    { icon: FileCheck, title: "Student Visas", description: "Complete visa application support and guidance" },
    { icon: GraduationCap, title: "Career Guidance", description: "Expert counseling for your academic journey" },
    { icon: Building2, title: "University Selection", description: "Choose the perfect institution for your goals" },
    { icon: HelpCircle, title: "Visa Assistance", description: "End-to-end visa processing support" },
    { icon: DollarSign, title: "Education Loan Help", description: "Financial assistance and loan guidance" },
    { icon: Plane, title: "Forex & Travel Support", description: "Complete travel and forex services" },
  ];

  const countries = [
    { name: "United States", flag: "🇺🇸", imageUrl: usaImage, stats: "500+ Universities • Top Ranked", themeColor: "220 60% 35%" },
    { name: "Canada", flag: "🇨🇦", imageUrl: canadaImage, stats: "200+ Universities • High Quality", themeColor: "0 70% 45%" },
    { name: "Australia", flag: "🇦🇺", imageUrl: australiaImage, stats: "150+ Universities • Great Lifestyle", themeColor: "40 70% 50%" },
    { name: "United Kingdom", flag: "🇬🇧", imageUrl: ukImage, stats: "300+ Universities • World Class", themeColor: "250 50% 40%" },
    { name: "Ireland", flag: "🇮🇪", imageUrl: irelandImage, stats: "100+ Universities • EU Access", themeColor: "140 50% 35%" },
    { name: "Germany", flag: "🇩🇪", imageUrl: germanyImage, stats: "250+ Universities • Tuition Free", themeColor: "0 0% 30%" },
    { name: "New Zealand", flag: "🇳🇿", imageUrl: newzealandImage, stats: "80+ Universities • Adventure", themeColor: "180 50% 35%" },
    { name: "Latvia", flag: "🇱🇻", imageUrl: latviaImage, stats: "50+ Universities • Affordable", themeColor: "350 60% 35%" },
    { name: "Slovenia", flag: "🇸🇮", imageUrl: sloveniaImage, stats: "40+ Universities • Scenic", themeColor: "200 50% 35%" },
    { name: "Malta", flag: "🇲🇹", imageUrl: maltaImage, stats: "30+ Universities • English", themeColor: "210 60% 40%" },
  ];

  const stats = [
    { value: "98%", label: "Success Rate" },
    { value: "10+", label: "Countries" },
    { value: "360°", label: "Services" },
    { value: "1000+", label: "Happy Students" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Study Abroad with 98% Success Rate | Global Sunrise Overseas"
        description="Hyderabad's #1 study abroad consultant with 98% success rate. Free IELTS training, visa assistance, scholarship help. 5000+ students placed in top universities worldwide."
        keywords="study abroad, overseas education, student visa, IELTS training, study in USA, study in Canada, study in UK, study in Australia, study in Germany, study in Ireland, study in New Zealand, study in Malta, study in Latvia, study in Slovenia, educational consultancy, Hyderabad study abroad"
        canonical="https://globalsunriseoverseas.com"
        image="https://globalsunriseoverseas.com/og-home.jpg"
        type="website"
        tags={["study abroad", "overseas education", "student visa", "IELTS", "Hyderabad"]}
      />
      <EduCompassHeader />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-blue-50 via-white to-indigo-50 text-foreground">
        <ScrollFlyIn
          imageUrl="src\assets\plane.png"
          imageAlt="Top view of a private jet flying across the screen"
        >
          {/* This is the static text content */}
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-sm md:text-md font-semibold uppercase tracking-widest text-primary mb-4">
               Hyderabad's #1 Study Abroad Consultant
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-7xl font-bold leading-tight mb-6">
              <span className="text-primary">Study Abroad</span> with 98% Success Rate
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              From IELTS coaching to visa approval, we make your overseas education dream come true. 
              <span className="font-semibold text-foreground">5000+ students placed</span> in top universities worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
                onClick={handleScrollToContact}
              >
                <Phone className="mr-2 h-4 w-4" />
                Get Free Counseling
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary hover:bg-primary/10 px-8"
                onClick={handleCallNow}
              >
                <span className="font-semibold">📞 +91 88011 53451</span>
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Free IELTS Training</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Visa Guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Scholarship Assistance</span>
              </div>
            </div>
          </div>
        </ScrollFlyIn>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center animate-fade-in border-primary/20">
                <CardContent className="pt-4 md:pt-6">
                  <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-primary mb-1 md:mb-2">{stat.value}</div>
                  <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wide">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Services are <span className="text-primary">360°</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A Single Step Solution For All Your Overseas Education & Job Placement Abroad
            </p>
          </div>
          <SkewCards 
            cards={services.map(service => ({
              title: service.title,
              description: service.description,
              icon: service.icon
            }))}
            buttonText="Learn More"
            buttonLinks={[
              "/services/student-visas",
              "/services/career-guidance", 
              "/services/university-selection",
              "/services/visa-assistance",
              "/services/education-loan-help",
              "/services/forex-travel-support"
            ]}
          />
        </div>
      </section>

      {/* Countries Section */}
      <section id="countries" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Study in Your <span className="text-secondary">Dream Country</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We Deal With Top Destinations Worldwide
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {countries.map((country, index) => (
              <div key={index} className="h-[300px] sm:h-[400px] animate-fade-in">
                <DestinationCard
                  imageUrl={country.imageUrl}
                  location={country.name}
                  flag={country.flag}
                  stats={country.stats}
                  href={`/countries/${country.name.toLowerCase().replace(/\s+/g, '-')}`}
                  themeColor={country.themeColor}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visas Section */}
      <section className="py-20">
        <div className="container">
          <FeatureSteps
            features={visaFeatures}
            title="Work Visas & Travel Solutions"
            autoPlayInterval={5000}
            className="bg-muted/10 rounded-xl"
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Custom Footer */}
      <EduCompassFooter />
    </div>
  );
};

export default Index;
