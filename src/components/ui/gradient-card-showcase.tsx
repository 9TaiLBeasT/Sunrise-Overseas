import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  gradientFrom?: string;
  gradientTo?: string;
}

interface SkewCardsProps {
  cards: CardProps[];
  buttonText?: string;
  minHeight?: string;
  buttonLinks?: string[];
}

// Default gradient colors for cards if not provided
const defaultGradients = [
  { from: '#ffbc00', to: '#ff0058' },
  { from: '#03a9f4', to: '#ff0058' },
  { from: '#4dff03', to: '#00d0ff' },
  { from: '#9c27b0', to: '#fd0054' },
  { from: '#00bcd4', to: '#673ab7' },
  { from: '#ff9800', to: '#ff5722' },
];

export default function SkewCards({ 
  cards, 
  buttonText = "Read More",
  minHeight = "min-h-0",
  buttonLinks = []
}: SkewCardsProps) {
  return (
    <>
      <div className={`flex justify-center items-center flex-wrap py-10 bg-background ${minHeight}`}>
        {cards.map(({ title, description, icon: Icon, gradientFrom, gradientTo }, idx) => {
          // Use default gradients if not provided
          const from = gradientFrom || defaultGradients[idx % defaultGradients.length].from;
          const to = gradientTo || defaultGradients[idx % defaultGradients.length].to;
          
          return (
            <div
              key={idx}
              className="group relative w-[280px] h-[350px] sm:w-[320px] sm:h-[400px] m-[20px_15px] sm:m-[40px_30px] transition-all duration-500"
            >
              {/* Skewed gradient panels */}
              <span
                className="absolute top-0 left-[50px] w-1/2 h-full rounded-lg transform skew-x-[15deg] transition-all duration-500 group-hover:skew-x-0 group-hover:left-[20px] group-hover:w-[calc(100%-90px)]"
                style={{
                  background: `linear-gradient(315deg, ${from}, ${to})`,
                }}
              />
              <span
                className="absolute top-0 left-[50px] w-1/2 h-full rounded-lg transform skew-x-[15deg] blur-[30px] transition-all duration-500 group-hover:skew-x-0 group-hover:left-[20px] group-hover:w-[calc(100%-90px)]"
                style={{
                  background: `linear-gradient(315deg, ${from}, ${to})`,
                }}
              />

              {/* Animated blurs */}
              <span className="pointer-events-none absolute inset-0 z-10">
                <span className="absolute top-0 left-0 w-0 h-0 rounded-lg opacity-0 bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.08)] transition-all duration-100 animate-blob group-hover:top-[-50px] group-hover:left-[50px] group-hover:w-[100px] group-hover:h-[100px] group-hover:opacity-100" />
                <span className="absolute bottom-0 right-0 w-0 h-0 rounded-lg opacity-0 bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.08)] transition-all duration-500 animate-blob animation-delay-1000 group-hover:bottom-[-50px] group-hover:right-[50px] group-hover:w-[100px] group-hover:h-[100px] group-hover:opacity-100" />
              </span>

              {/* Content */}
              <div className="relative z-20 left-0 p-[20px_40px] bg-[rgba(255,255,255,0.05)] backdrop-blur-[10px] shadow-lg rounded-lg text-white transition-all duration-500 group-hover:left-[-25px] group-hover:p-[60px_40px]">
                {Icon && (
                  <div className="mb-4 p-3 rounded-lg bg-white/10 inline-block">
                    <Icon className="h-6 w-6" />
                  </div>
                )}
                <h2 className="text-xl sm:text-2xl mb-2">{title}</h2>
                <p className="text-base sm:text-lg leading-relaxed mb-4">{description}</p>
                <a
                  href={buttonLinks[idx] || "#"}
                  className="inline-block text-base sm:text-lg font-bold text-black bg-white px-3 py-2 rounded hover:bg-[#ffcf4d] hover:border hover:border-[rgba(255,0,88,0.4)] hover:shadow-md"
                >
                  {buttonText}
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Tailwind custom utilities for animation and shadows */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translateY(10px); }
          50% { transform: translate(-10px); }
        }
        .animate-blob { animation: blob 2s ease-in-out infinite; }
        .animation-delay-1000 { animation-delay: -1s; }
        .shadow-\\[0_5px_15px_rgba\\(0,0,0,0.08\\)] { box-shadow: 0 5px 15px rgba(0,0,0,0.08); }
      `}</style>
    </>
  );
}