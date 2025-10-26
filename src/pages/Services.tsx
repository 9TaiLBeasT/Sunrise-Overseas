import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FileCheck, GraduationCap, Building2, HelpCircle, DollarSign, Plane, ArrowLeft, CheckCircle, Clock, Users, Globe, BookOpen, Briefcase, Phone, Mail, Menu, X, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import EduCompassHeader from '@/components/ui/edu-compass-header';
import EduCompassFooter from '@/components/ui/edu-compass-footer';
import { FeaturesSectionWithHoverEffects } from '@/components/ui/feature-section-with-hover-effects';
import SEO from '@/components/SEO';
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
  IconFileText,
  IconFileCheck,
  IconUserCheck,
  IconCreditCard,
  IconEdit,
  IconBuilding,
  IconChartBar,
  IconCompass,
  IconTrendingUp,
  IconTarget,
  IconMap,
  IconUsers,
  IconAward,
  IconBook,
  IconClipboardCheck,
  IconCalculator,
  IconHome,
  IconBriefcase,
  IconListCheck,
  IconFileDescription,
  IconWallet,
  IconMicrophone,
  IconShieldCheck,
  IconBuildingBank,
  IconFileInvoice,
  IconPercentage,
  IconGift,
  IconShield,
  IconReceipt,
  IconCurrency,
  IconShieldLock,
  IconPlane,
  IconHome2,
  IconCar,
  IconFileCertificate,
  IconCircleCheck,
  IconCertificate,
  IconClock,
  IconMicrophone2,
  IconHeadphones,
  IconUserCircle,
  IconUsersGroup,
  IconChartPie,
  IconArrowsExchange,
  IconNetwork,
  IconTimeline,
  IconDatabase,
  IconBulb,
  IconUserStar,
  IconCalendarTime,
  IconCoin,
  IconTrophy,
  IconBook2,
  IconChartLine,
  IconBolt,
  IconThumbUp,
  IconSpeedboat,
  IconCircleDotted,
  IconInfoCircle,
  IconDiscount2,
  IconShieldHeart,
  IconRoute,
  IconLock,
  Icon24Hours,
  IconPackage,
  IconStar
} from "@tabler/icons-react";

interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  gradientFrom: string;
  gradientTo: string;
  detailedDescription: string;
  features: string[];
  process: { step: string; description: string }[];
  benefits: string[];
  faqs: { question: string; answer: string }[];
}

const servicesData: ServiceDetail[] = [
  {
    id: 'student-visas',
    title: 'Student Visas',
    description: 'Complete visa application support and guidance',
    icon: FileCheck,
    gradientFrom: '#ffbc00',
    gradientTo: '#ff0058',
    detailedDescription: 'Our comprehensive student visa service ensures a smooth and successful application process. We provide expert guidance on documentation, interview preparation, and compliance with immigration requirements for all major study destinations.',
    features: [
      'Document preparation and verification',
      'Visa application form assistance',
      'Interview preparation and mock sessions',
      'Financial documentation guidance',
      'SOP and LOR review',
      'University admission coordination'
    ],
    process: [
      { step: 'Initial Assessment', description: 'Evaluate your profile and destination requirements' },
      { step: 'Document Collection', description: 'Gather all required documents and certificates' },
      { step: 'Application Preparation', description: 'Complete visa forms and prepare supporting documents' },
      { step: 'Submission & Tracking', description: 'Submit application and monitor progress' },
      { step: 'Interview Preparation', description: 'Prepare for visa interview if required' },
      { step: 'Visa Approval', description: 'Receive visa and plan your travel' }
    ],
    benefits: [
      '98% visa success rate',
      'Expert guidance from certified consultants',
      'Fast-track processing options',
      'Comprehensive documentation support',
      'Mock interview sessions',
      'Post-visa assistance'
    ],
    faqs: [
      {
        question: 'How long does the visa process take?',
        answer: 'Processing times vary by country: USA (3-5 weeks), Canada (4-6 weeks), UK (3 weeks), Australia (4-6 weeks). We help expedite the process where possible.'
      },
      {
        question: 'What documents are required?',
        answer: 'Required documents include passport, academic transcripts, admission letter, financial statements, language test scores, and medical certificates. We provide a detailed checklist.'
      },
      {
        question: 'Do you guarantee visa approval?',
        answer: 'While we cannot guarantee approval, our 98% success rate speaks for our expertise. We ensure your application is complete and meets all requirements.'
      }
    ]
  },
  {
    id: 'career-guidance',
    title: 'Career Guidance',
    description: 'Expert counseling for your academic journey',
    icon: GraduationCap,
    gradientFrom: '#03a9f4',
    gradientTo: '#ff0058',
    detailedDescription: 'Our career guidance service helps you make informed decisions about your academic and professional future. We assess your strengths, interests, and goals to recommend the best career paths and educational opportunities.',
    features: [
      'Personality and aptitude assessment',
      'Career path analysis and planning',
      'Industry trends and job market insights',
      'Skill gap analysis',
      'Professional development planning',
      'Networking opportunities'
    ],
    process: [
      { step: 'Profile Assessment', description: 'Evaluate your academic background and interests' },
      { step: 'Career Exploration', description: 'Explore various career options and opportunities' },
      { step: 'Goal Setting', description: 'Define short-term and long-term career objectives' },
      { step: 'Pathway Planning', description: 'Create a step-by-step career development plan' },
      { step: 'Skill Development', description: 'Identify and develop required skills' },
      { step: 'Implementation Support', description: 'Ongoing support during career transition' }
    ],
    benefits: [
      'Personalized career recommendations',
      'Access to industry experts',
      'Comprehensive assessment tools',
      'Career transition support',
      'Professional network building',
      'Long-term career success'
    ],
    faqs: [
      {
        question: 'How do you assess career suitability?',
        answer: 'We use scientific assessment tools including personality tests, aptitude evaluations, and interest inventories combined with one-on-one counseling sessions.'
      },
      {
        question: 'Can you help with career changes?',
        answer: 'Yes, we specialize in helping professionals transition to new careers with strategic planning and skill development programs.'
      },
      {
        question: 'What industries do you cover?',
        answer: 'We cover all major industries including IT, healthcare, engineering, business, arts, and emerging fields like AI and sustainability.'
      }
    ]
  },
  {
    id: 'university-selection',
    title: 'University Selection',
    description: 'Choose the perfect institution for your goals',
    icon: Building2,
    gradientFrom: '#4dff03',
    gradientTo: '#00d0ff',
    detailedDescription: 'Our university selection service helps you find the perfect educational institution that matches your academic goals, budget, and career aspirations. We consider rankings, program quality, location, and other factors to recommend the best options.',
    features: [
      'University ranking analysis',
      'Program curriculum evaluation',
      'Admission requirements assessment',
      'Tuition fee and scholarship information',
      'Campus life and facilities review',
      'Graduate employment statistics'
    ],
    process: [
      { step: 'Academic Profile Review', description: 'Analyze your academic achievements and goals' },
      { step: 'Preference Assessment', description: 'Understand your preferences for location, budget, and program' },
      { step: 'University Research', description: 'Research and shortlist suitable universities' },
      { step: 'Comparative Analysis', description: 'Compare universities based on multiple criteria' },
      { step: 'Final Recommendations', description: 'Provide ranked list of best-fit universities' },
      { step: 'Application Strategy', description: 'Develop application strategy for chosen universities' }
    ],
    benefits: [
      'Access to comprehensive university database',
      'Expert insights on admission trends',
      'Personalized university matching',
      'Application timeline management',
      'Scholarship opportunity identification',
      'Higher admission success rate'
    ],
    faqs: [
      {
        question: 'How many universities should I apply to?',
        answer: 'We recommend applying to 5-8 universities: 2-3 reach schools, 3-4 target schools, and 1-2 safety schools for optimal results.'
      },
      {
        question: 'Do you guarantee admission?',
        answer: 'While we cannot guarantee admission, our strategic approach and expert guidance significantly increase your chances of acceptance.'
      },
      {
        question: 'What factors should I consider?',
        answer: 'Key factors include academic reputation, program quality, location, cost, scholarship opportunities, and post-graduation employment prospects.'
      }
    ]
  },
  {
    id: 'visa-assistance',
    title: 'Visa Assistance',
    description: 'End-to-end visa processing support',
    icon: HelpCircle,
    gradientFrom: '#9c27b0',
    gradientTo: '#fd0054',
    detailedDescription: 'Our comprehensive visa assistance service covers all aspects of the visa application process. From initial consultation to final approval, we provide expert support for student visas, work permits, and immigration procedures.',
    features: [
      'Visa category selection guidance',
      'Documentation checklist and review',
      'Application form completion',
      'Financial proof preparation',
      'Interview training and preparation',
      'Post-visa compliance guidance'
    ],
    process: [
      { step: 'Visa Category Assessment', description: 'Determine the most appropriate visa type' },
      { step: 'Eligibility Check', description: 'Verify you meet all visa requirements' },
      { step: 'Document Preparation', description: 'Prepare and review all required documents' },
      { step: 'Application Submission', description: 'Submit visa application with proper documentation' },
      { step: 'Follow-up & Updates', description: 'Monitor application status and respond to queries' },
      { step: 'Visa Collection', description: 'Collect visa and provide travel guidance' }
    ],
    benefits: [
      'Expert knowledge of visa regulations',
      'High success rate in visa approvals',
      'Time-saving streamlined process',
      'Reduced risk of application rejection',
      'Comprehensive support throughout',
      'Updated with latest visa policies'
    ],
    faqs: [
      {
        question: 'What is the difference between visa assistance and visa application?',
        answer: 'Visa assistance provides expert guidance and support throughout the process, while visa application is the actual submission to the embassy. We assist with both.'
      },
      {
        question: 'How do you handle visa rejections?',
        answer: 'We analyze rejection reasons, address deficiencies, and help with reapplication or appeal processes with improved documentation.'
      },
      {
        question: 'Do you help with visa extensions?',
        answer: 'Yes, we provide assistance with visa extensions, status changes, and compliance requirements for students already abroad.'
      }
    ]
  },
  {
    id: 'education-loan-help',
    title: 'Education Loan Help',
    description: 'Financial assistance and loan guidance',
    icon: DollarSign,
    gradientFrom: '#00bcd4',
    gradientTo: '#673ab7',
    detailedDescription: 'Our education loan assistance service helps you secure the necessary funding for your overseas education. We guide you through loan applications, compare different financing options, and help you choose the best financial solution.',
    features: [
      'Loan eligibility assessment',
      'Bank and lender comparison',
      'Interest rate analysis',
      'Documentation assistance',
      'Loan application support',
      'Repayment planning'
    ],
    process: [
      { step: 'Financial Assessment', description: 'Evaluate your financial needs and repayment capacity' },
      { step: 'Loan Options Research', description: 'Research and compare loan products from various lenders' },
      { step: 'Eligibility Check', description: 'Determine eligibility for different loan programs' },
      { step: 'Application Preparation', description: 'Prepare loan application with required documents' },
      { step: 'Submission & Follow-up', description: 'Submit applications and coordinate with lenders' },
      { step: 'Approval & Disbursement', description: 'Facilitate loan approval and fund disbursement' }
    ],
    benefits: [
      'Access to multiple loan options',
      'Competitive interest rates',
      'Flexible repayment terms',
      'Quick approval process',
      'Collateral-free loan options',
      'Tax benefit guidance'
    ],
    faqs: [
      {
        question: 'What is the maximum loan amount I can get?',
        answer: 'Loan amounts vary by lender and program, typically covering 100% of education costs including tuition, living expenses, and travel costs.'
      },
      {
        question: 'Do I need collateral for education loans?',
        answer: 'Many lenders offer collateral-free loans up to certain amounts. For higher amounts, collateral may be required, but we help find suitable options.'
      },
      {
        question: 'When should I start the loan application process?',
        answer: 'We recommend starting 3-4 months before your program begins to allow sufficient time for processing and any required documentation.'
      }
    ]
  },
  {
    id: 'forex-travel-support',
    title: 'Forex & Travel Support',
    description: 'Complete travel and forex services',
    icon: Plane,
    gradientFrom: '#ff9800',
    gradientTo: '#ff5722',
    detailedDescription: 'Our forex and travel support service provides comprehensive assistance for your international travel needs. From currency exchange to travel insurance and flight bookings, we ensure you are fully prepared for your journey abroad.',
    features: [
      'Foreign exchange services',
      'Travel insurance arrangements',
      'Flight booking assistance',
      'Accommodation booking',
      'Airport transfer coordination',
      'Travel document preparation'
    ],
    process: [
      { step: 'Travel Planning', description: 'Plan your travel itinerary and requirements' },
      { step: 'Forex Arrangement', description: 'Arrange foreign currency and forex cards' },
      { step: 'Flight Booking', description: 'Book flights with best routes and prices' },
      { step: 'Insurance Coverage', description: 'Secure comprehensive travel insurance' },
      { step: 'Accommodation Setup', description: 'Arrange temporary and permanent accommodation' },
      { step: 'Final Preparations', description: 'Complete all travel-related arrangements' }
    ],
    benefits: [
      'Competitive exchange rates',
      'Comprehensive travel insurance',
      'Best flight deals and routes',
      'Safe and secure arrangements',
      '24/7 travel support',
      'One-stop travel solution'
    ],
    faqs: [
      {
        question: 'What currencies do you support?',
        answer: 'We support all major currencies including USD, EUR, GBP, CAD, AUD, and many others with competitive exchange rates.'
      },
      {
        question: 'Do you help with travel insurance?',
        answer: 'Yes, we arrange comprehensive travel insurance covering medical emergencies, trip cancellation, baggage loss, and other travel-related risks.'
      },
      {
        question: 'Can you help with accommodation booking?',
        answer: 'Absolutely! We assist with both temporary accommodation upon arrival and permanent housing arrangements near your university.'
      }
    ]
  }
];

// Helper functions to get feature descriptions and icons based on service
function getFeatureDescription(serviceId: string, index: number): string {
  const descriptions: Record<string, string[]> = {
    'student-visas': [
      'We meticulously prepare and verify all your documents to ensure they meet embassy requirements.',
      'Expert assistance in completing complex visa application forms accurately and efficiently.',
      'Comprehensive interview preparation with mock sessions to boost your confidence.',
      'Guidance on preparing financial documents that satisfy visa requirements.',
      'Professional review and enhancement of your Statement of Purpose and Letters of Recommendation.',
      'Seamless coordination with universities for admission-related documentation.'
    ],
    'career-guidance': [
      'Scientific assessment tools to understand your personality traits and career aptitudes.',
      'Comprehensive analysis of various career paths and their growth potential.',
      'Up-to-date insights on industry trends and job market opportunities.',
      'Identify skill gaps and create personalized development plans.',
      'Strategic planning for your professional growth and career advancement.',
      'Connect with industry professionals and build valuable networks.'
    ],
    'university-selection': [
      'Detailed analysis of university rankings across multiple parameters and metrics.',
      'In-depth evaluation of program curriculum, faculty, and research opportunities.',
      'Assessment of admission requirements and your eligibility for different programs.',
      'Comprehensive information on tuition fees, living costs, and available scholarships.',
      'Review of campus facilities, accommodation, and student life quality.',
      'Analysis of graduate employment rates and career outcomes.'
    ],
    'visa-assistance': [
      'Expert guidance on selecting the most appropriate visa category for your needs.',
      'Comprehensive document checklist and thorough review of all paperwork.',
      'Professional assistance in completing visa application forms without errors.',
      'Help in preparing and organizing financial proof documentation.',
      'Intensive interview training and preparation sessions for visa interviews.',
      'Guidance on post-visa compliance and maintaining legal status.'
    ],
    'education-loans': [
      'Access to multiple education loan options from various banks and financial institutions.',
      'Expert guidance on preparing loan applications and required documentation.',
      'Help in understanding and comparing interest rates from different lenders.',
      'Assistance in exploring scholarship opportunities and merit-based aid.',
      'Support in finding collateral-free loan options and flexible repayment terms.',
      'Guidance on education loan subsidies and government schemes.'
    ],
    'forex-travel-support': [
      'Competitive foreign exchange rates and secure currency exchange services.',
      'Comprehensive travel insurance covering medical emergencies and trip cancellations.',
      'Assistance in finding and booking flights with optimal routes and pricing.',
      'Help in arranging temporary and permanent accommodation options.',
      'Coordination of airport transfers and local transportation services.',
      'Support in preparing all necessary travel documents and paperwork.'
    ]
  };
  
  return descriptions[serviceId]?.[index] || 'Detailed description of this feature and its benefits.';
}

function getFeatureIcon(serviceId: string, index: number): React.ReactNode {
  // Map specific icons to each feature based on its content
  const featureIcons: Record<string, React.ReactNode[]> = {
    'student-visas': [
      <IconFileText key="0" />,      // Document preparation
      <IconFileCheck key="1" />,     // Application assistance
      <IconUserCheck key="2" />,     // Interview preparation
      <IconCreditCard key="3" />,    // Financial guidance
      <IconEdit key="4" />,          // SOP/LoR enhancement
      <IconBuilding key="5" />       // University coordination
    ],
    'career-guidance': [
      <IconChartBar key="0" />,      // Personality assessment
      <IconCompass key="1" />,       // Career exploration
      <IconTrendingUp key="2" />,    // Industry trends
      <IconTarget key="3" />,        // Skill gap analysis
      <IconMap key="4" />,           // Career roadmap
      <IconUsers key="5" />          // Professional networking
    ],
    'university-selection': [
      <IconAward key="0" />,         // University rankings
      <IconBook key="1" />,          // Program evaluation
      <IconClipboardCheck key="2" />, // Admission requirements
      <IconCalculator key="3" />,    // Cost analysis
      <IconHome key="4" />,          // Campus facilities
      <IconBriefcase key="5" />      // Career outcomes
    ],
    'visa-assistance': [
      <IconHelp key="0" />,          // Visa category guidance
      <IconListCheck key="1" />,     // Document checklist
      <IconFileDescription key="2" />, // Application forms
      <IconWallet key="3" />,        // Financial proof
      <IconMicrophone key="4" />,    // Interview training
      <IconShieldCheck key="5" />    // Compliance guidance
    ],
    'education-loan-help': [
      <IconBuildingBank key="0" />,  // Multiple lenders
      <IconFileInvoice key="1" />,   // Application guidance
      <IconPercentage key="2" />,    // Interest rates
      <IconGift key="3" />,          // Scholarships
      <IconShield key="4" />,        // Collateral-free options
      <IconReceipt key="5" />        // Tax benefits
    ],
    'forex-travel-support': [
      <IconCurrency key="0" />,      // Foreign exchange
      <IconShieldLock key="1" />,    // Travel insurance
      <IconPlane key="2" />,         // Flight booking
      <IconHome2 key="3" />,         // Accommodation
      <IconCar key="4" />,           // Airport transfer
      <IconFileCertificate key="5" /> // Travel documents
    ]
  };
  
  return featureIcons[serviceId]?.[index] || <IconStar key={index} />;
}

function getBenefitDescription(serviceId: string, index: number): string {
  const descriptions: Record<string, string[]> = {
    'student-visas': [
      'Our proven track record shows a 98% success rate in visa approvals.',
      'All our consultants are certified and have extensive experience in visa processing.',
      'We offer expedited processing options for urgent visa applications.',
      'Complete support for all documentation requirements and verification processes.',
      'Multiple mock interview sessions to prepare you for the actual visa interview.',
      'Continued support even after visa approval for travel and settlement.'
    ],
    'career-guidance': [
      'Tailored career recommendations based on your unique profile and aspirations.',
      'Direct access to industry experts and professionals for insights and advice.',
      'Advanced assessment tools for comprehensive career evaluation.',
      'Dedicated support for smooth career transitions and changes.',
      'Assistance in building professional networks and connections.',
      'Long-term career planning for sustained professional success.'
    ],
    'university-selection': [
      'Access to comprehensive database of universities worldwide with detailed information.',
      'Expert insights on latest admission trends and selection criteria.',
      'Personalized matching of universities based on your profile and preferences.',
      'Professional management of application timelines and deadlines.',
      'Identification of scholarship opportunities and financial aid options.',
      'Strategic approach resulting in higher admission success rates.'
    ],
    'visa-assistance': [
      'In-depth knowledge of current visa regulations and policy changes.',
      'Consistently high success rate in visa application approvals.',
      'Streamlined process that saves you time and reduces stress.',
      'Minimized risk of application rejection through expert review.',
      'End-to-end support throughout the entire visa process.',
      'Regular updates on changing visa policies and requirements.'
    ],
    'education-loans': [
      'Expert knowledge of education loan products from various financial institutions.',
      'High success rate in loan application approvals with favorable terms.',
      'Efficient process that reduces loan approval time significantly.',
      'Lower rejection rates through proper documentation and application preparation.',
      'Complete support from application to disbursement and repayment.',
      'Access to updated information on loan products and interest rates.'
    ],
    'forex-travel-support': [
      'Highly competitive exchange rates with transparent pricing.',
      'Comprehensive travel insurance with extensive coverage options.',
      'Access to best flight deals and optimal travel routes.',
      'Secure and reliable arrangements for all travel services.',
      'Round-the-clock support for any travel-related emergencies.',
      'Complete one-stop solution for all your travel needs.'
    ]
  };
  
  return descriptions[serviceId]?.[index] || 'Key benefit that sets us apart from competitors.';
}

function getBenefitIcon(serviceId: string, index: number): React.ReactNode {
  // Map specific icons to each benefit based on its content
  const benefitIcons: Record<string, React.ReactNode[]> = {
    'student-visas': [
      <IconCircleCheck key="0" />,   // 98% success rate
      <IconCertificate key="1" />,   // Certified consultants
      <IconClock key="2" />,         // Expedited processing
      <IconFileCheck key="3" />,     // Complete support
      <IconMicrophone2 key="4" />,   // Mock interviews
      <IconHeadphones key="5" />     // Continued support
    ],
    'career-guidance': [
      <IconUserCircle key="0" />,    // Tailored recommendations
      <IconUsersGroup key="1" />,    // Industry experts
      <IconChartPie key="2" />,      // Advanced tools
      <IconArrowsExchange key="3" />, // Career transitions
      <IconNetwork key="4" />,       // Professional networks
      <IconTimeline key="5" />       // Long-term planning
    ],
    'university-selection': [
      <IconDatabase key="0" />,      // Comprehensive database
      <IconAward key="1" />,         // Expert insights (using Award instead of LightBulb)
      <IconUserStar key="2" />,     // Personalized matching
      <IconCalendarTime key="3" />,   // Timeline management
      <IconCoin key="4" />,          // Scholarship opportunities
      <IconTrophy key="5" />         // Higher success rates
    ],
    'visa-assistance': [
      <IconBook2 key="0" />,         // In-depth knowledge
      <IconChartLine key="1" />,     // High success rate
      <IconTrendingUp key="2" />,    // Streamlined process (using TrendingUp instead of Zap)
      <IconShieldCheck key="3" />,   // Minimized rejection risk
      <IconCircleCheck key="4" />,   // End-to-end support
      <RefreshCw key="5" />        // Regular updates (using RefreshCw from lucide-react)
    ],
    'education-loan-help': [
      <IconBook key="0" />,          // Expert knowledge
      <IconThumbUp key="1" />,      // High success rate
      <IconSpeedboat key="2" />,     // Efficient process
      <IconShieldCheck key="3" />,   // Lower rejection rates
      <IconCircleDotted key="4" />,  // Complete support
      <IconInfoCircle key="5" />    // Updated information
    ],
    'forex-travel-support': [
      <IconDiscount2 key="0" />,     // Competitive rates
      <IconShieldHeart key="1" />,   // Comprehensive insurance
      <IconRoute key="2" />,         // Best flight deals
      <IconLock key="3" />,          // Secure arrangements
      <Icon24Hours key="4" />,      // 24/7 support
      <IconPackage key="5" />        // One-stop solution
    ]
  };
  
  return benefitIcons[serviceId]?.[index] || <IconStar key={index} />;
}

const Services: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const service = servicesData.find(s => s.id === serviceId);

  const handleCallNow = () => {
    window.open('tel:+918801153451', '_self');
  };

  const handleGetConsultation = () => {
    navigate('/#contact');
  };

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Service Not Found</h1>
          <p className="text-muted-foreground mb-6">The service you're looking for doesn't exist.</p>
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

  const ServiceIcon = service.icon;

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={`${service.title} - Expert Study Abroad Services | EduCompass Global`}
        description={`${service.detailedDescription} Get expert guidance, 98% success rate, and comprehensive support for your international education journey.`}
        keywords={`${service.title.toLowerCase()}, study abroad services, ${service.features.join(', ')}, international education consulting`}
        canonical={`https://educompassglobal.com/services/${serviceId}`}
        image="https://educompassglobal.com/og-image-services.jpg"
        type="service"
        tags={['study abroad', 'education consulting', 'international students', service.title.toLowerCase()]}
      />
      
      {/* Structured Data for Service */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": service.title,
          "description": service.detailedDescription,
          "provider": {
            "@type": "EducationalOrganization",
            "name": "EduCompass Global",
            "url": "https://educompassglobal.com",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "IN"
            }
          },
          "areaServed": {
            "@type": "Country",
            "name": "India"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Service Features",
            "itemListElement": service.features?.map((feature, index) => ({
              "@type": "Offer",
              "name": feature,
              "description": `Key feature: ${feature}`,
              "itemOffered": {
                "@type": "Service",
                "name": feature
              }
            })) || []
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "2000"
          },
          "offers": {
            "@type": "Offer",
            "name": service.title,
            "description": service.detailedDescription,
            "price": "Contact for pricing",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock"
          }
        })}
      </script>
      
      <EduCompassHeader />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6" style={{ background: `linear-gradient(135deg, ${service.gradientFrom}, ${service.gradientTo})` }}>
            <ServiceIcon className="h-10 w-10" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">{service.detailedDescription}</p>
        </div>
      </section>

      {/* Features Section with Hover Effects */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">What makes our {service.title.toLowerCase()} service exceptional</p>
          </div>
          <FeaturesSectionWithHoverEffects 
            features={service.features.map((feature, index) => ({
              title: feature,
              description: getFeatureDescription(service.id, index),
              icon: getFeatureIcon(service.id, index)
            }))}
          />
        </div>
      </section>



      {/* Benefits Section with Hover Effects */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Benefits that set us apart from the competition</p>
          </div>
          <FeaturesSectionWithHoverEffects 
            features={service.benefits.map((benefit, index) => ({
              title: benefit,
              description: getBenefitDescription(service.id, index),
              icon: getBenefitIcon(service.id, index)
            }))}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">Let us help you achieve your dreams of studying abroad</p>
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

export default Services;