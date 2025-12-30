import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Basic",
    price: "$9",
    period: "/month",
    description: "Perfect for individuals and small projects.",
    features: [
      "Up to 5 projects",
      "Basic analytics",
      "24/7 email support",
      "1GB storage",
      "API access",
    ],
    cta: "Start free trial",
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "Best for growing teams and businesses.",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
      "25GB storage",
      "API access",
      "Team collaboration",
      "Custom integrations",
    ],
    highlighted: true,
    cta: "Start free trial",
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "/month",
    description: "For large organizations with custom needs.",
    features: [
      "Everything in Pro",
      "Unlimited storage",
      "Dedicated account manager",
      "Custom SLA",
      "SSO & SAML",
      "Advanced security",
      "On-premise option",
    ],
    cta: "Contact sales",
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the plan that fits your needs. All plans include a 14-day free trial.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-8 ${
                tier.highlighted
                  ? "bg-foreground text-background border-2 border-foreground shadow-2xl scale-105"
                  : "bg-card border border-border"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-primary text-primary-foreground text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-xl font-semibold mb-2 ${tier.highlighted ? "text-background" : "text-foreground"}`}>
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl font-bold ${tier.highlighted ? "text-background" : "text-foreground"}`}>
                    {tier.price}
                  </span>
                  <span className={tier.highlighted ? "text-background/70" : "text-muted-foreground"}>
                    {tier.period}
                  </span>
                </div>
                <p className={`mt-2 text-sm ${tier.highlighted ? "text-background/70" : "text-muted-foreground"}`}>
                  {tier.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      tier.highlighted ? "bg-background/20" : "bg-primary/10"
                    }`}>
                      <Check className={`w-3 h-3 ${tier.highlighted ? "text-background" : "text-primary"}`} />
                    </div>
                    <span className={`text-sm ${tier.highlighted ? "text-background/90" : "text-muted-foreground"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={tier.highlighted ? "hero" : "default"}
                className={`w-full ${tier.highlighted ? "bg-background text-foreground hover:bg-background/90" : ""}`}
                size="lg"
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
