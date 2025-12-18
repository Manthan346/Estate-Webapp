import { cn } from "../../lib/utils"
import { TestimonialCard, TestimonialAuthor } from "../../components/ui/testimonial-card"

interface TestimonialsSectionProps {
  title: string
  description: string
  testimonials: Array<{
    author: TestimonialAuthor
    text: string
    href?: string
  }>
  className?: string
}

export function TestimonialsSection({
  title,
  description,
  testimonials,
  className
}: TestimonialsSectionProps) {
  return (
    <section
      className={cn(
        "bg-background text-foreground py-12 sm:py-24 md:py-32",
        className
      )}
    >
      <div className="mx-auto max-w-container text-center flex flex-col gap-16">
        <div className="px-4">
          <h2 className="text-3xl sm:text-5xl font-semibold">{title}</h2>
          <p className="mt-4 text-muted-foreground sm:text-xl max-w-[600px] mx-auto">
            {description}
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex gap-4 animate-marquee hover:[animation-play-state:paused]">
            {[...Array(4)].map((_, setIndex) =>
              testimonials.map((t, i) => (
                <TestimonialCard key={`${setIndex}-${i}`} {...t} />
              ))
            )}
          </div>

          <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background pointer-events-none" />
        </div>
      </div>
    </section>
  )
}
