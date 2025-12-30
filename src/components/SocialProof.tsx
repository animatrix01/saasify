const logos = [
  { name: "Vercel", letters: "Vercel" },
  { name: "Stripe", letters: "Stripe" },
  { name: "Notion", letters: "Notion" },
  { name: "Figma", letters: "Figma" },
  { name: "Linear", letters: "Linear" },
  { name: "Slack", letters: "Slack" },
  { name: "GitHub", letters: "GitHub" },
  { name: "Discord", letters: "Discord" },
];

export const SocialProof = () => {
  return (
    <section className="py-16 border-y border-border bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8">
          Trusted by innovative teams worldwide
        </p>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-card to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-card to-transparent z-10" />

          {/* Marquee */}
          <div className="flex animate-marquee">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex items-center justify-center mx-12 min-w-[120px]"
              >
                <span className="text-2xl font-bold text-muted-foreground/50 hover:text-muted-foreground transition-colors duration-300">
                  {logo.letters}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">10K+</div>
            <div className="text-sm text-muted-foreground">Active users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">500+</div>
            <div className="text-sm text-muted-foreground">Companies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime SLA</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">4.9/5</div>
            <div className="text-sm text-muted-foreground">Customer rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};
