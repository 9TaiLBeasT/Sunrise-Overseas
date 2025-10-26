import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Phone, Mail, CheckCircle, Star, Users, Building, Globe, TrendingUp, Award, BookOpen, Calendar, MapPin, Clock, Shield } from 'lucide-react';
import EduCompassHeader from '@/components/ui/edu-compass-header';
import EduCompassFooter from '@/components/ui/edu-compass-footer';
import { FeaturesSectionWithHoverEffects } from '@/components/ui/feature-section-with-hover-effects';
import SEO from '@/components/SEO';
import LazyImage from '@/components/LazyImage';

// Country data with comprehensive information
const countriesData = {
  'united-states': {
    id: 'united-states',
    name: 'United States',
    flag: '🇺🇸',
    imageUrl: '/src/assets/countries/usa.jpg',
    themeColor: '220 60% 35%',
    gradientFrom: '#1e40af',
    gradientTo: '#3b82f6',
    description: 'Experience world-class education in the land of opportunities with access to cutting-edge research and innovation.',
    stats: {
      universities: '4000+',
      internationalStudents: '1.1M+',
      topRanked: '25+',
      avgTuition: '$25,000-50,000'
    },
    highlights: [
      'Home to 25+ universities in global top 100',
      'Flexible education system with diverse course options',
      'Strong industry connections and internship opportunities',
      'Post-study work opportunities with OPT programs'
    ],
    features: [
      'World-Class Universities',
      'Research Opportunities',
      'Flexible Curriculum',
      'Industry Connections',
      'Cultural Diversity',
      'Career Support'
    ],
    benefits: [
      'Access to cutting-edge research facilities',
      'Networking with global industry leaders',
      'Practical learning through internships',
      'Pathway to global career opportunities',
      'Diverse cultural experiences',
      'Comprehensive student support services'
    ],
    universities: [
      { name: 'Harvard University', ranking: '#3 Global', location: 'Massachusetts' },
      { name: 'Stanford University', ranking: '#2 Global', location: 'California' },
      { name: 'MIT', ranking: '#1 Global', location: 'Massachusetts' },
      { name: 'University of California, Berkeley', ranking: '#10 Global', location: 'California' }
    ],
    visaProcess: [
      'Secure admission to SEVP-approved institution',
      'Receive I-20 form from university',
      'Pay SEVIS fee and schedule visa interview',
      'Attend visa interview at US embassy/consulate',
      'Receive F-1 student visa upon approval'
    ],
    costBreakdown: {
      tuition: '$25,000 - $50,000',
      living: '$12,000 - $18,000',
      insurance: '$1,000 - $2,000',
      total: '$38,000 - $70,000'
    }
  },
  'canada': {
    id: 'canada',
    name: 'Canada',
    flag: '🇨🇦',
    imageUrl: '/src/assets/countries/canada.jpg',
    themeColor: '0 70% 45%',
    gradientFrom: '#dc2626',
    gradientTo: '#ef4444',
    description: 'Discover high-quality education in a multicultural environment with excellent post-graduation opportunities.',
    stats: {
      universities: '200+',
      internationalStudents: '800K+',
      topRanked: '15+',
      avgTuition: '$15,000-35,000'
    },
    highlights: [
      'Affordable tuition compared to other English-speaking countries',
      'Post-Graduate Work Permit (PGWP) opportunities',
      'Pathway to permanent residency',
      'Safe and welcoming multicultural society'
    ],
    features: [
      'Affordable Education',
      'Work While Studying',
      'Post-Graduate Work Permit',
      'Multicultural Environment',
      'Quality of Life',
      'Immigration Pathway'
    ],
    benefits: [
      'Lower tuition fees with high-quality education',
      'Work opportunities during and after studies',
      'Clear pathway to permanent residency',
      'Safe and inclusive society',
      'Excellent healthcare system',
      'Stunning natural landscapes'
    ],
    universities: [
      { name: 'University of Toronto', ranking: '#18 Global', location: 'Ontario' },
      { name: 'McGill University', ranking: '#31 Global', location: 'Quebec' },
      { name: 'University of British Columbia', ranking: '#34 Global', location: 'BC' },
      { name: 'University of Alberta', ranking: '#111 Global', location: 'Alberta' }
    ],
    visaProcess: [
      'Secure admission to DLI-approved institution',
      'Gather required documents (LOA, financial proof)',
      'Apply for study permit online',
      'Provide biometrics if required',
      'Receive study permit upon approval'
    ],
    costBreakdown: {
      tuition: '$15,000 - $35,000',
      living: '$10,000 - $15,000',
      insurance: '$600 - $1,000',
      total: '$25,600 - $51,000'
    }
  },
  'united-kingdom': {
    id: 'united-kingdom',
    name: 'United Kingdom',
    flag: '🇬🇧',
    imageUrl: '/src/assets/countries/uk.jpg',
    themeColor: '250 50% 40%',
    gradientFrom: '#5b21b6',
    gradientTo: '#7c3aed',
    description: 'Experience prestigious education in historic institutions with world-renowned academic excellence.',
    stats: {
      universities: '160+',
      internationalStudents: '600K+',
      topRanked: '20+',
      avgTuition: '£15,000-35,000'
    },
    highlights: [
      'Home to world\'s oldest and most prestigious universities',
      'Shorter degree duration (3 years bachelor\'s, 1 year master\'s)',
      'Graduate visa route for post-study work',
      'Rich cultural and historical heritage'
    ],
    features: [
      'Prestigious Universities',
      'Shorter Duration',
      'Graduate Visa Route',
      'Rich Heritage',
      'Global Recognition',
      'Research Excellence'
    ],
    benefits: [
      'Degrees from world-renowned institutions',
      'Faster completion with lower overall costs',
      'Post-study work opportunities',
      'Rich cultural experiences',
      'Strong global career prospects',
      'Access to European opportunities'
    ],
    universities: [
      { name: 'University of Oxford', ranking: '#4 Global', location: 'Oxford' },
      { name: 'University of Cambridge', ranking: '#5 Global', location: 'Cambridge' },
      { name: 'Imperial College London', ranking: '#8 Global', location: 'London' },
      { name: 'University College London', ranking: '#22 Global', location: 'London' }
    ],
    visaProcess: [
      'Secure admission to licensed sponsor institution',
      'Receive CAS (Confirmation of Acceptance for Studies)',
      'Prepare financial documents and TB test',
      'Apply for Student visa online',
      'Attend biometrics appointment and receive decision'
    ],
    costBreakdown: {
      tuition: '£15,000 - £35,000',
      living: '£12,000 - £15,000',
      insurance: '£470',
      total: '£27,470 - £50,470'
    }
  },
  'australia': {
    id: 'australia',
    name: 'Australia',
    flag: '🇦🇺',
    imageUrl: '/src/assets/countries/australia.jpg',
    themeColor: '40 70% 50%',
    gradientFrom: '#f59e0b',
    gradientTo: '#fbbf24',
    description: 'Enjoy world-class education in a stunning natural environment with excellent work opportunities.',
    stats: {
      universities: '43+',
      internationalStudents: '750K+',
      topRanked: '10+',
      avgTuition: 'AUD 25,000-45,000'
    },
    highlights: [
      'High-quality education with strong research focus',
      'Post-study work visa opportunities',
      'Beautiful natural environment and lifestyle',
      'Multicultural and welcoming society'
    ],
    features: [
      'Quality Education',
      'Work Opportunities',
      'Beautiful Environment',
      'Multicultural Society',
      'Research Excellence',
      'Lifestyle Benefits'
    ],
    benefits: [
      'Degrees recognized globally',
      'Generous post-study work rights',
      'Excellent quality of life',
      'Safe and welcoming environment',
      'Strong research opportunities',
      'Pathway to permanent residency'
    ],
    universities: [
      { name: 'University of Melbourne', ranking: '#33 Global', location: 'Melbourne' },
      { name: 'University of Sydney', ranking: '#41 Global', location: 'Sydney' },
      { name: 'Australian National University', ranking: '#59 Global', location: 'Canberra' },
      { name: 'University of Queensland', ranking: '#70 Global', location: 'Brisbane' }
    ],
    visaProcess: [
      'Secure admission to CRICOS-registered course',
      'Receive CoE (Confirmation of Enrolment)',
      'Gather documents and apply for Student visa',
      'Provide biometrics and health examination',
      'Receive visa decision and travel to Australia'
    ],
    costBreakdown: {
      tuition: 'AUD 25,000 - 45,000',
      living: 'AUD 21,000 - 25,000',
      insurance: 'AUD 600 - 1,000',
      total: 'AUD 46,600 - 71,000'
    }
  },
  'ireland': {
    id: 'ireland',
    name: 'Ireland',
    flag: '🇮🇪',
    imageUrl: '/src/assets/countries/ireland.jpg',
    themeColor: '140 50% 35%',
    gradientFrom: '#059669',
    gradientTo: '#10b981',
    description: 'Experience world-class education in the heart of Europe with access to EU opportunities and rich cultural heritage.',
    stats: {
      universities: '100+',
      internationalStudents: '35K+',
      topRanked: '8+',
      avgTuition: '€10,000-25,000'
    },
    highlights: [
      'English-speaking country in the European Union',
      'Post-study work visa opportunities',
      'Gateway to European job market',
      'Rich cultural heritage and friendly people'
    ],
    features: [
      'EU Access',
      'English Speaking',
      'Work Opportunities',
      'Cultural Heritage',
      'Quality Education',
      'Safe Environment'
    ],
    benefits: [
      'Access to European Union job market',
      'No language barrier for English speakers',
      '2-year post-study work visa',
      'Rich literary and cultural traditions',
      'High-quality education standards',
      'Safe and welcoming environment'
    ],
    universities: [
      { name: 'Trinity College Dublin', ranking: '#101 Global', location: 'Dublin' },
      { name: 'University College Dublin', ranking: '#177 Global', location: 'Dublin' },
      { name: 'National University of Ireland Galway', ranking: '#238 Global', location: 'Galway' },
      { name: 'University College Cork', ranking: '#298 Global', location: 'Cork' }
    ],
    visaProcess: [
      'Secure admission to Irish institution',
      'Receive acceptance letter from university',
      'Prepare financial and academic documents',
      'Apply for student visa online',
      'Attend biometrics appointment if required'
    ],
    costBreakdown: {
      tuition: '€10,000 - €25,000',
      living: '€12,000 - €18,000',
      insurance: '€500 - €800',
      total: '€22,500 - €43,800'
    }
  },
  'germany': {
    id: 'germany',
    name: 'Germany',
    flag: '🇩🇪',
    imageUrl: '/src/assets/countries/germany.jpg',
    themeColor: '0 0% 30%',
    gradientFrom: '#374151',
    gradientTo: '#4b5563',
    description: 'Access world-class education with no tuition fees at public universities and strong industry connections.',
    stats: {
      universities: '400+',
      internationalStudents: '400K+',
      topRanked: '15+',
      avgTuition: '€0-20,000'
    },
    highlights: [
      'Tuition-free education at public universities',
      'Strong engineering and technology programs',
      'Excellent job opportunities after graduation',
      'Central location in Europe'
    ],
    features: [
      'Tuition Free',
      'Engineering Excellence',
      'Industry Connections',
      'Central Europe',
      'Research Focus',
      'Quality Standards'
    ],
    benefits: [
      'Save on tuition costs at public universities',
      'Learn from world-leading engineering programs',
      'Access to strong German job market',
      'Travel easily throughout Europe',
      'Benefit from cutting-edge research',
      'Earn globally recognized degrees'
    ],
    universities: [
      { name: 'Technical University of Munich', ranking: '#37 Global', location: 'Munich' },
      { name: 'Heidelberg University', ranking: '#54 Global', location: 'Heidelberg' },
      { name: 'LMU Munich', ranking: '#63 Global', location: 'Munich' },
      { name: 'University of Bonn', ranking: '#107 Global', location: 'Bonn' }
    ],
    visaProcess: [
      'Secure admission to German university',
      'Open blocked bank account for living expenses',
      'Obtain health insurance coverage',
      'Schedule visa appointment at German embassy',
      'Attend interview and receive student visa'
    ],
    costBreakdown: {
      tuition: '€0 - €20,000',
      living: '€10,000 - €12,000',
      insurance: '€1,000 - €1,500',
      total: '€11,000 - €33,500'
    }
  },
  'new-zealand': {
    id: 'new-zealand',
    name: 'New Zealand',
    flag: '🇳🇿',
    imageUrl: '/src/assets/countries/newzealand.jpg',
    themeColor: '180 50% 35%',
    gradientFrom: '#0891b2',
    gradientTo: '#06b6d4',
    description: 'Discover quality education in a stunning natural environment with excellent work-life balance and adventure opportunities.',
    stats: {
      universities: '80+',
      internationalStudents: '30K+',
      topRanked: '5+',
      avgTuition: 'NZD 20,000-35,000'
    },
    highlights: [
      'High-quality education system',
      'Post-study work visa opportunities',
      'Stunning natural landscapes',
      'Safe and peaceful environment'
    ],
    features: [
      'Quality Education',
      'Work Rights',
      'Natural Beauty',
      'Safe Environment',
      'Adventure Sports',
      'Work-Life Balance'
    ],
    benefits: [
      'Globally recognized qualifications',
      'Work during studies and after graduation',
      'Experience breathtaking natural beauty',
      'Live in one of the world\'s safest countries',
      'Enjoy outdoor adventures and activities',
      'Excellent work-life balance'
    ],
    universities: [
      { name: 'University of Auckland', ranking: '#68 Global', location: 'Auckland' },
      { name: 'University of Otago', ranking: '#206 Global', location: 'Dunedin' },
      { name: 'Victoria University of Wellington', ranking: '#241 Global', location: 'Wellington' },
      { name: 'University of Canterbury', ranking: '#317 Global', location: 'Christchurch' }
    ],
    visaProcess: [
      'Secure admission to NZ institution',
      'Receive offer of place from university',
      'Prepare financial and health documents',
      'Apply for student visa online',
      'Provide biometrics if required'
    ],
    costBreakdown: {
      tuition: 'NZD 20,000 - 35,000',
      living: 'NZD 15,000 - 20,000',
      insurance: 'NZD 600 - 1,000',
      total: 'NZD 35,600 - 56,000'
    }
  },
  'latvia': {
    id: 'latvia',
    name: 'Latvia',
    flag: '🇱🇻',
    imageUrl: '/src/assets/countries/latvia.jpg',
    themeColor: '350 60% 35%',
    gradientFrom: '#be185d',
    gradientTo: '#e11d48',
    description: 'Access affordable European education in a beautiful Baltic country with rich cultural traditions.',
    stats: {
      universities: '50+',
      internationalStudents: '15K+',
      topRanked: '3+',
      avgTuition: '€3,000-15,000'
    },
    highlights: [
      'Affordable tuition fees in Europe',
      'Schengen visa access',
      'Beautiful natural landscapes',
      'Rich cultural heritage'
    ],
    features: [
      'Affordable Education',
      'Schengen Access',
      'Natural Beauty',
      'Cultural Heritage',
      'Quality Standards',
      'European Location'
    ],
    benefits: [
      'Study in Europe at affordable costs',
      'Travel freely in Schengen countries',
      'Enjoy pristine natural environments',
      'Experience unique Baltic culture',
      'Earn EU-recognized degrees',
      'Access to European job market'
    ],
    universities: [
      { name: 'University of Latvia', ranking: '#801 Global', location: 'Riga' },
      { name: 'Riga Technical University', ranking: '#1001 Global', location: 'Riga' },
      { name: 'Latvia University of Life Sciences', ranking: '#1201 Global', location: 'Jelgava' },
      { name: 'Turiba University', ranking: '#1501 Global', location: 'Riga' }
    ],
    visaProcess: [
      'Secure admission to Latvian university',
      'Receive invitation letter from institution',
      'Prepare financial documents and accommodation',
      'Apply for long-term visa at Latvian embassy',
      'Receive visa and register in Latvia'
    ],
    costBreakdown: {
      tuition: '€3,000 - €15,000',
      living: '€6,000 - €9,000',
      insurance: '€300 - €500',
      total: '€9,300 - €24,500'
    }
  },
  'slovenia': {
    id: 'slovenia',
    name: 'Slovenia',
    flag: '🇸🇮',
    imageUrl: '/src/assets/countries/slovenia.jpg',
    themeColor: '200 50% 35%',
    gradientFrom: '#0284c7',
    gradientTo: '#0ea5e9',
    description: 'Discover quality education in Central Europe with stunning Alpine scenery and Mediterranean coastline.',
    stats: {
      universities: '40+',
      internationalStudents: '10K+',
      topRanked: '2+',
      avgTuition: '€2,000-12,000'
    },
    highlights: [
      'Affordable education in Central Europe',
      'Beautiful Alpine and Mediterranean landscapes',
      'Safe and peaceful environment',
      'Strategic European location'
    ],
    features: [
      'Affordable Tuition',
      'Scenic Beauty',
      'Safe Environment',
      'Central Europe',
      'Quality Education',
      'Strategic Location'
    ],
    benefits: [
      'Study at affordable European tuition rates',
      'Enjoy mountains and sea in one country',
      'Live in one of Europe\'s safest countries',
      'Easy access to neighboring European countries',
      'Earn internationally recognized degrees',
      'Experience diverse natural landscapes'
    ],
    universities: [
      { name: 'University of Ljubljana', ranking: '#601 Global', location: 'Ljubljana' },
      { name: 'University of Maribor', ranking: '#1001 Global', location: 'Maribor' },
      { name: 'University of Primorska', ranking: '#1501 Global', location: 'Koper' },
      { name: 'University of Nova Gorica', ranking: '#2001 Global', location: 'Nova Gorica' }
    ],
    visaProcess: [
      'Secure admission to Slovenian university',
      'Receive admission letter from institution',
      'Prepare financial proof and accommodation',
      'Apply for residence permit at Slovenian embassy',
      'Receive permit and register residence'
    ],
    costBreakdown: {
      tuition: '€2,000 - €12,000',
      living: '€7,000 - €10,000',
      insurance: '€400 - €600',
      total: '€9,400 - €22,600'
    }
  },
  'malta': {
    id: 'malta',
    name: 'Malta',
    flag: '🇲🇹',
    imageUrl: '/src/assets/countries/malta.jpg',
    themeColor: '210 60% 40%',
    gradientFrom: '#2563eb',
    gradientTo: '#3b82f6',
    description: 'Study English-language programs in a Mediterranean paradise with rich history and EU access.',
    stats: {
      universities: '30+',
      internationalStudents: '8K+',
      topRanked: '2+',
      avgTuition: '€7,000-18,000'
    },
    highlights: [
      'English-speaking Mediterranean country',
      'EU member with Schengen access',
      'Rich 7,000-year history',
      'Beautiful Mediterranean climate'
    ],
    features: [
      'English Speaking',
      'EU Access',
      'Mediterranean Climate',
      'Historical Heritage',
      'Quality Education',
      'Island Lifestyle'
    ],
    benefits: [
      'Study in English without language barrier',
      'Access to EU job market and opportunities',
      'Enjoy Mediterranean weather year-round',
      'Live among 7,000 years of history',
      'Earn internationally recognized degrees',
      'Experience unique island lifestyle'
    ],
    universities: [
      { name: 'University of Malta', ranking: '#801 Global', location: 'Msida' },
      { name: 'Malta College of Arts, Science & Technology', ranking: '#1501 Global', location: 'Paola' },
      { name: 'Global College Malta', ranking: '#2001 Global', location: 'San Ġwann' },
      { name: 'American University of Malta', ranking: '#2501 Global', location: 'Cospicua' }
    ],
    visaProcess: [
      'Secure admission to Maltese institution',
      'Receive acceptance letter from university',
      'Prepare financial documents and health insurance',
      'Apply for student visa at Maltese embassy',
      'Receive visa and travel to Malta'
    ],
    costBreakdown: {
      tuition: '€7,000 - €18,000',
      living: '€9,000 - €12,000',
      insurance: '€300 - €500',
      total: '€16,300 - €30,500'
    }
  }
};

// Helper functions for descriptions and icons
function getFeatureDescription(countryId: string, index: number): string {
  const descriptions: Record<string, string[]> = {
    'united-states': [
      'Access to Ivy League and top-ranked universities worldwide',
      'Cutting-edge research facilities and opportunities',
      'Flexible course selection and interdisciplinary studies',
      'Strong connections with industry leaders and companies',
      'Diverse student community from around the world',
      'Comprehensive career services and job placement support'
    ],
    'canada': [
      'High-quality education at affordable tuition rates',
      'Work up to 20 hours per week during studies',
      '3-year work permit after graduation',
      'Welcoming environment with people from 200+ countries',
      'Consistently ranked among world\'s safest countries',
      'Clear immigration pathway for skilled graduates'
    ],
    'united-kingdom': [
      'Degrees from centuries-old prestigious institutions',
      'Complete bachelor\'s in 3 years, master\'s in 1 year',
      '2-year post-study work visa for graduates',
      'Study in historic cities with rich cultural heritage',
      'Degrees recognized and respected worldwide',
      'World-leading research across all disciplines'
    ],
    'australia': [
      'Globally recognized qualifications and standards',
      'Work up to 40 hours per fortnight during studies',
      'Beautiful beaches, wildlife, and natural wonders',
      'Welcoming society with people from 190+ countries',
      'Strong emphasis on research and innovation',
      'Excellent healthcare and social benefits'
    ]
  };
  
  return descriptions[countryId]?.[index] || 'Detailed description of this feature and its benefits.';
}

function getBenefitDescription(countryId: string, index: number): string {
  const descriptions: Record<string, string[]> = {
    'united-states': [
      'State-of-the-art laboratories and research centers',
      'Connect with Fortune 500 companies and startups',
      'Hands-on experience through co-op programs and internships',
      'Global career opportunities with multinational corporations',
      'Experience diverse cultures and perspectives',
      'Comprehensive support from admission to graduation'
    ],
    'canada': [
      'Save on tuition while getting world-class education',
      'Gain valuable Canadian work experience',
      'Transition from student to permanent resident smoothly',
      'Feel welcome and safe in multicultural society',
      'Access to universal healthcare system',
      'Enjoy breathtaking natural beauty and outdoor activities'
    ],
    'united-kingdom': [
      'Learn from Nobel laureates and world experts',
      'Enter workforce faster with shorter programs',
      'Build career in UK with post-study work rights',
      'Immerse yourself in rich history and culture',
      'Boost career prospects with UK degree',
      'Access to European research collaborations'
    ],
    'australia': [
      'Qualifications accepted by employers worldwide',
      'Build career while studying and after graduation',
      'Enjoy outdoor lifestyle and natural beauty',
      'Feel at home in friendly, multicultural society',
      'Work with leading researchers in your field',
      'Access to Medicare and social security benefits'
    ]
  };
  
  return descriptions[countryId]?.[index] || 'Key benefit that sets this destination apart.';
}

function getFeatureIcon(countryId: string, index: number): React.ReactNode {
  const featureIcons: Record<string, React.ReactNode[]> = {
    'united-states': [
      <Award key="0" />,
      <BookOpen key="1" />,
      <Globe key="2" />,
      <TrendingUp key="3" />,
      <Users key="4" />,
      <CheckCircle key="5" />
    ],
    'canada': [
      <Award key="0" />,
      <Clock key="1" />,
      <Shield key="2" />,
      <Users key="3" />,
      <Star key="4" />,
      <MapPin key="5" />
    ],
    'united-kingdom': [
      <Award key="0" />,
      <Clock key="1" />,
      <Shield key="2" />,
      <Globe key="3" />,
      <TrendingUp key="4" />,
      <BookOpen key="5" />
    ],
    'australia': [
      <Star key="0" />,
      <Clock key="1" />,
      <Globe key="2" />,
      <Users key="3" />,
      <BookOpen key="4" />,
      <CheckCircle key="5" />
    ]
  };
  
  return featureIcons[countryId]?.[index] || <Star key={index} />;
}

function getBenefitIcon(countryId: string, index: number): React.ReactNode {
  const benefitIcons: Record<string, React.ReactNode[]> = {
    'united-states': [
      <Building key="0" />,
      <Users key="1" />,
      <TrendingUp key="2" />,
      <Globe key="3" />,
      <Users key="4" />,
      <CheckCircle key="5" />
    ],
    'canada': [
      <Award key="0" />,
      <TrendingUp key="1" />,
      <MapPin key="2" />,
      <Users key="3" />,
      <Shield key="4" />,
      <Globe key="5" />
    ],
    'united-kingdom': [
      <Award key="0" />,
      <Clock key="1" />,
      <Shield key="2" />,
      <Globe key="3" />,
      <TrendingUp key="4" />,
      <Users key="5" />
    ],
    'australia': [
      <TrendingUp key="0" />,
      <TrendingUp key="1" />,
      <Globe key="2" />,
      <Users key="3" />,
      <BookOpen key="4" />,
      <Shield key="5" />
    ]
  };
  
  return benefitIcons[countryId]?.[index] || <Star key={index} />;
}

const Country: React.FC = () => {
  const { countryId } = useParams<{ countryId: string }>();
  const navigate = useNavigate();
  const country = countriesData[countryId as keyof typeof countriesData];

  const handleCallNow = () => {
    window.open('tel:+918801153451', '_self');
  };

  const handleGetConsultation = () => {
    navigate('/#contact');
  };

  if (!country) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Country Not Found</h1>
          <p className="text-muted-foreground mb-6">The country you're looking for doesn't exist.</p>
          <Link to="/">
            <Button className="bg-gradient-primary">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={`Study in ${country.name} - International Education Guide | EduCompass Global`}
        description={`Discover why ${country.name} is the perfect destination for your international education. ${country.stats.universities} universities, ${country.stats.internationalStudents} international students, world-class education, and excellent career opportunities.`}
        keywords={`study in ${country.name.toLowerCase()}, ${country.name.toLowerCase()} universities, international students ${country.name.toLowerCase()}, study abroad ${country.name.toLowerCase()}, ${country.name.toLowerCase()} education system`}
        canonical={`https://educompassglobal.com/countries/${countryId}`}
        image={country.imageUrl}
        type="article"
        tags={['study abroad', country.name.toLowerCase(), 'international education', 'universities', 'higher education']}
      />
      
      {/* Structured Data for Country */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": `Study in ${country.name} - EduCompass Global`,
          "description": `Discover why ${country.name} is the perfect destination for your international education. ${country.stats.universities} universities, ${country.stats.internationalStudents} international students, world-class education, and excellent career opportunities.`,
          "url": `https://educompassglobal.com/countries/${countryId}`,
          "image": country.imageUrl,
          "address": {
            "@type": "PostalAddress",
            "addressCountry": country.name
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "1500"
          },
          "offers": {
            "@type": "Offer",
            "name": "Study Abroad Consulting Services",
            "description": "Comprehensive study abroad consulting for international students",
            "priceRange": country.costBreakdown?.total || "Contact for pricing"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Universities in Country",
            "itemListElement": country.universities?.map((uni, index) => ({
              "@type": "Offer",
              "name": uni.name,
              "description": `${uni.name} - ${uni.ranking} university located in ${uni.location}`,
              "itemOffered": {
                "@type": "EducationalOccupationalProgram",
                "name": "University Education Program",
                "provider": {
                  "@type": "EducationalOrganization",
                  "name": uni.name
                }
              }
            })) || []
          }
        })}
      </script>
      
      <EduCompassHeader />

      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden">
        <div className="absolute inset-0">
          <LazyImage 
            src={country.imageUrl} 
            alt={country.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6" style={{ background: `linear-gradient(135deg, ${country.gradientFrom}, ${country.gradientTo})` }}>
            <span className="text-3xl">{country.flag}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Study in {country.name}</h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">{country.description}</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-card rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-primary mb-2">{country.stats.universities}</div>
              <div className="text-sm text-muted-foreground">Universities</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-primary mb-2">{country.stats.internationalStudents}</div>
              <div className="text-sm text-muted-foreground">International Students</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-primary mb-2">{country.stats.topRanked}</div>
              <div className="text-sm text-muted-foreground">Top Ranked Universities</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-primary mb-2">{country.stats.avgTuition}</div>
              <div className="text-sm text-muted-foreground">Average Tuition/Year</div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose {country.name}?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Key highlights that make {country.name} an excellent study destination</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {country.highlights.map((highlight, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-card rounded-lg shadow-sm">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-foreground">{highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section with Hover Effects */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">What makes studying in {country.name} exceptional</p>
          </div>
          <FeaturesSectionWithHoverEffects 
            features={country.features.map((feature, index) => ({
              title: feature,
              description: getFeatureDescription(country.id, index),
              icon: getFeatureIcon(country.id, index)
            }))}
          />
        </div>
      </section>

      {/* Top Universities Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Top Universities in {country.name}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Leading institutions that offer world-class education</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {country.universities.map((university, index) => (
              <div key={index} className="p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-foreground">{university.name}</h3>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">{university.ranking}</span>
                </div>
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{university.location}</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Star className="h-4 w-4 mr-2 text-yellow-500" />
                  <span>World-class education and research facilities</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section with Hover Effects */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Benefits of Studying in {country.name}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Advantages that set {country.name} apart from other study destinations</p>
          </div>
          <FeaturesSectionWithHoverEffects 
            features={country.benefits.map((benefit, index) => ({
              title: benefit,
              description: getBenefitDescription(country.id, index),
              icon: getBenefitIcon(country.id, index)
            }))}
          />
        </div>
      </section>

      {/* Top Universities Section */}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Study in {country.name}?</h2>
          <p className="text-xl mb-8 opacity-90">Let us help you achieve your dream of studying in {country.name}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-primary hover:bg-gray-100"
              onClick={handleCallNow}
            >
              <Phone className="mr-2 h-5 w-5" />
              +91 88011 53451
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
              onClick={handleGetConsultation}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <EduCompassFooter />
    </div>
  );
};

export default Country;