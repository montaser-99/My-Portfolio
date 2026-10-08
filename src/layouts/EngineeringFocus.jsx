import SectionHeading from "../components/common/SectionHeading";
import FocusCard from "../components/focus/FocusCard";
import { focusAreas } from "../data/focus";

function EngineeringFocus() {
  return (
    <section
      id="focus"
      className="engineering-section engineering-focus relative mx-auto w-[calc(100%-32px)] max-w-[1080px] py-20 sm:w-[calc(100%-44px)] sm:py-28"
    >
      <SectionHeading
        eyebrow="Engineering Focus"
        title="Three interconnected areas, one engineering identity"
        description="These aren't separate job titles — they're the areas where my work connects software, intelligence, and hardware into complete systems."
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {focusAreas.map((area, index) => (
          <FocusCard key={area.id} area={area} index={index} />
        ))}
      </div>
    </section>
  );
}

export default EngineeringFocus;
