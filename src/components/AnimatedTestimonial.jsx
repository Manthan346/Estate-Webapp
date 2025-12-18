import React from 'react';
import Title from './Title';

const testimonials = [
  {
    author: { name: "Jennifer Martinez", handle: "Downtown Buyer", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400" },
    text: "Found our dream home in just 3 weeks! The team understood exactly what we were looking for and made the entire process seamless.",
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    author: { name: "Michael Chen", handle: "First-Time Seller", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400" },
    text: "Sold our house for 15% above asking price. Their marketing strategy and negotiation skills are unmatched.",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    author: { name: "Priya Sharma", handle: "Luxury Home Buyer", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400" },
    text: "The attention to detail and personalized service exceeded all expectations. They truly care about finding the perfect match.",
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    author: { name: "Robert Thompson", handle: "Investment Property", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400" },
    text: "Helped me build a portfolio of 5 rental properties. Their market knowledge and investment insights are invaluable.",
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    author: { name: "Amanda Foster", handle: "Suburban Family", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400" },
    text: "Moving with three kids was stressful, but they handled everything professionally. We love our new neighborhood!",
    color: "from-indigo-500/20 to-purple-500/20"
  },
  {
    author: { name: "Carlos Rodriguez", handle: "Condo Buyer", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400" },
    text: "As a first-time buyer, I was nervous. They explained every step clearly and got me an amazing deal on my condo.",
    color: "from-teal-500/20 to-blue-500/20"
  },
  {
    author: { name: "Emily Watson", handle: "Relocation Specialist", avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400" },
    text: "Relocated from across the country and they made it effortless. Virtual tours saved us so much time and money.",
    color: "from-rose-500/20 to-pink-500/20"
  },
  {
    author: { name: "David Kim", handle: "Commercial Property", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400" },
    text: "Found the perfect office space for our startup. Their commercial division knows the market inside and out.",
    color: "from-violet-500/20 to-purple-500/20"
  },
];

function TestimonialCard({ author, text, color }) {
  return (
    <div className="relative w-72 sm:w-80 flex-shrink-0 group">
      <div className="relative h-full rounded-xl sm:rounded-2xl bg-card border border-border backdrop-blur-xl shadow-lg overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-xl hover:border-primary/50 p-4 sm:p-6">
        {/* Animated gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
        
        <div className="relative z-10">
          {/* Quote icon */}
          <div className="mb-3 sm:mb-4">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-primary/50" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          {/* Testimonial text */}
          <p className="text-foreground text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
            {text}
          </p>

          {/* Author info */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
              <img
                src={author.avatar}
                alt={author.name}
                className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover ring-2 ring-border group-hover:ring-primary/50 transition-all duration-500"
              />
            </div>
            <div>
              <div className="font-semibold text-foreground text-xs sm:text-sm">{author.name}</div>
              <div className="text-muted-foreground text-xs">{author.handle}</div>
            </div>
          </div>
        </div>

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
}

function MarqueeRow({ testimonials, reverse = false }) {
  const duplicatedTestimonials = [...testimonials, ...testimonials];
  
  return (
    <div className="relative flex overflow-hidden py-2 sm:py-4">
      <div 
        className="flex gap-3 sm:gap-6 animate-marquee hover:[animation-play-state:paused]"
        style={{ 
          '--gap': '1.5rem',
          '--duration': '40s',
          animationDirection: reverse ? 'reverse' : 'normal'
        }}
      >
        {duplicatedTestimonials.map((testimonial, i) => (
          <TestimonialCard key={i} {...testimonial} />
        ))}
      </div>
    </div>
  );
}

export default function AnimatedTestimonials() {
  return (
    <div className="min-h-screen bg-background py-12 sm:py-20 overflow-hidden relative">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-16 px-4 relative z-10">
        <div className="inline-block mb-3 sm:mb-4">
        
        </div>
       <Title Title1={"Customer"} Title2={"Says"} />
      
      </div>

      {/* Marquee rows */}
      <div className="space-y-0 relative bg-chart-3 h-150 z-10">
        <MarqueeRow testimonials={testimonials.slice(0, 4)} />
        <MarqueeRow testimonials={testimonials.slice(4, 8)} reverse={true} />
        
      </div>

      {/* Gradient overlays */}
     
    </div>
  );
}