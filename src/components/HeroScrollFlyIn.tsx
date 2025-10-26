import { ScrollFlyIn } from "@/components/ui/hero-section-3";

export default function HeroScrollFlyIn() {
  return (
    <div className="w-full bg-background text-foreground">
      <ScrollFlyIn
        imageUrl="https://cdn.prod.website-files.com/661fdce3e735db03332bf817/66223004372c7c1124c1b0d1_Top-view2x-p-2000.webp"
        imageAlt="Top view of a private jet flying across the screen"
      >
        {/* This is the static text content */}
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-md font-semibold uppercase tracking-widest text-muted-foreground">
            Welcome to Sunrise Overseas Consultancy
          </p>
          <h2 className="text-5xl md:text-7xl font-bold leading-tight mt-2">
            Where education becomes your passport
          </h2>
        </div>
      </ScrollFlyIn>
    </div>
  );
}