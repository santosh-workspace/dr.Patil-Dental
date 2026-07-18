import { statistics } from "@/data/statistics";
import { Section } from "@/components/layout/Section";
import { Counter } from "@/components/animations/Counter";
import { Stagger, StaggerItem } from "@/components/animations/Reveal";

/** 4-up quantified-trust counters on the mint tint. */
export function StatisticsSection() {
  return (
    <Section tone="mint" labelledBy="stats-heading" className="!py-16 md:!py-20">
      <h2 id="stats-heading" className="sr-only">
        Clinic statistics
      </h2>
      <Stagger className="grid grid-cols-2 gap-8 text-center md:grid-cols-4 md:divide-x md:divide-mint-200/70">
        {statistics.map((stat) => (
          <StaggerItem key={stat.label} variant="fade">
            <p className="font-heading text-4xl font-bold tracking-tight text-primary-700 md:text-5xl">
              <Counter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2.5 text-sm font-medium text-neutral-700">{stat.label}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
