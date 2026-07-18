import { stats } from "@/data/stats";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/animations/Reveal";
import { Counter } from "@/components/animations/Counter";

/** Trust Badges — verified-fact stats strip with animated counters. */
export function TrustBadges() {
  return (
    <div className="border-y border-neutral-200 bg-surface">
      <Container>
        <Reveal>
          <dl className="grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-1 text-center">
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-h2 font-extrabold text-primary-600">
                  {typeof s.to === "number" ? (
                    <Counter to={s.to} prefix={s.prefix} suffix={s.suffix} />
                  ) : (
                    s.value
                  )}
                </dd>
                <p className="text-body-sm font-medium text-neutral-600">{s.label}</p>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </div>
  );
}
