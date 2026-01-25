import { PageTransition } from "@/components/layout/PageTransition";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { caseStudies } from "@/data/caseStudies";

const CaseStudies = () => {
  return (
    <PageTransition>
      <section className="section pt-32 md:pt-40">
        <div className="container-wide">
          <SectionHeader
            caption="Selected Work"
            title="Case Studies"
            description="Deep dives into product design challenges. Each project explores the full journey from problem discovery to measurable outcomes."
          />

          <div className="grid-case-studies">
            {caseStudies.map((study, index) => (
              <CaseStudyCard
                key={study.id}
                id={study.id}
                title={study.title}
                subtitle={study.subtitle}
                role={study.role}
                year={study.year}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default CaseStudies;
