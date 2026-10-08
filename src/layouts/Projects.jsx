import { useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import SectionHeading from "../components/common/SectionHeading";
import ProjectCard from "../components/projects/ProjectCard";
import ProjectFilters from "../components/projects/ProjectFilters";
import ProjectsEmpty from "../components/projects/ProjectsEmpty";
import { projects, activeProjectCategories } from "../data/projects";

function Projects() {
  const [active, setActive] = useState("All");

  const visible = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((project) => project.category === active),
    [active]
  );

  const isEmpty = projects.length === 0;

  return (
    <section
      id="projects"
      className="engineering-section engineering-projects relative mx-auto w-[calc(100%-32px)] max-w-[1080px] py-20 sm:w-[calc(100%-44px)] sm:py-28"
    >
      <SectionHeading
        eyebrow="Selected Work"
        title="Ideas across one connected system"
        description="One gallery across every engineering area. Filter by primary category — specialisations and tools are shown as tags on each card."
      />

      {isEmpty ? (
        <ProjectsEmpty />
      ) : (
        <>
          <ProjectFilters
            categories={activeProjectCategories}
            active={active}
            onChange={setActive}
          />
          {visible.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {visible.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <ProjectsEmpty filtered />
          )}
        </>
      )}
    </section>
  );
}

export default Projects;
