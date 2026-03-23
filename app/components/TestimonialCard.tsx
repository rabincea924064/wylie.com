import Card from "./Card";

interface TestimonialCardProps {
  quote: string;
  author: string;
  rating?: number;
  id?: string;
}

function StarRating({ rating = 5 }: { rating: number }) {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 20 20"
          fill={i < rating ? "#c8a96e" : "#e5e7eb"}
        >
          <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.44.91-5.32L2.27 6.62l5.34-.78L10 1z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialCard({
  quote,
  author,
  rating = 5,
  id,
}: TestimonialCardProps) {
  return (
    <Card variant="elevated" className="h-full flex flex-col" id={id}>
      <StarRating rating={rating} />
      <blockquote className="text-body text-muted flex-1 mb-6 italic leading-relaxed">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center">
          <span className="text-sm font-bold text-primary">
            {author.charAt(0)}
          </span>
        </div>
        <span className="font-semibold text-secondary">{author}</span>
      </div>
    </Card>
  );
}
