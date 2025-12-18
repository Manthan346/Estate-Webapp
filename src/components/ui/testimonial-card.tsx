"use client"

import { cn } from "../../lib/utils"
import { Avatar, AvatarImage, AvatarFallback } from "../../components/ui/avatar"

export interface TestimonialAuthor {
  name: string
  handle: string
  avatar: string
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
  className?: string
}

export function TestimonialCard({
  author,
  text,
  href,
  className,
}: TestimonialCardProps) {
  const Card = href ? "a" : "div"

  return (
    <Card
      {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "group relative flex max-w-[320px] flex-col overflow-hidden rounded-2xl",
        "border border-border/60 bg-background/80 backdrop-blur",
        "p-5 sm:p-6",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-1 hover:shadow-xl",
        "hover:border-primary/30",
        className
      )}
    >
      {/* Gradient glow on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-chart-3/20" />
      </div>

      {/* Header */}
      <div className="relative z-10 flex items-center gap-4">
        <div className="relative">
          <Avatar className="h-12 w-12 ring-2 ring-transparent transition group-hover:ring-primary/40">
            <AvatarImage src={author.avatar} alt={author.name} />
            <AvatarFallback>
              {author.name.charAt(0)}
            </AvatarFallback>
          </Avatar>

          {/* Pulse dot */}
          <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-primary ring-2 ring-background animate-pulse" />
        </div>

        <div className="flex flex-col">
          <h3 className="text-sm font-semibold leading-tight text-foreground">
            {author.name}
          </h3>
          <span className="text-xs text-muted-foreground">
            {author.handle}
          </span>
        </div>
      </div>

      {/* Quote */}
      <p className="relative z-10 mt-4 text-sm leading-relaxed text-muted-foreground">
        “{text}”
      </p>

      {/* Bottom fade */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-background to-transparent"
      />
    </Card>
  )
}
