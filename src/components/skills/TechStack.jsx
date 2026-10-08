import SectionHeading from "../common/SectionHeading";
import SkillCategoryCard from "./SkillCategoryCard";
import { skillGroups } from "../../data/skills";

function TechStack() {
  return (
    <section
      id="skills"
      className="engineering-section engineering-skills relative mx-auto w-[calc(100%-32px)] max-w-[1080px] py-20 sm:w-[calc(100%-44px)] sm:py-28"
    >
      <SectionHeading
        eyebrow="Skills"
        title="Technical toolkit"
        description="Grouped by engineering area — the tools I actually reach for across AI, software, and embedded work."
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <SkillCategoryCard key={group.title} group={group} index={index} />
        ))}
      </div>
    </section>
  );
}

export default TechStack;
