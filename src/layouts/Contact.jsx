import { motion } from "framer-motion";
import SectionHeading from "../components/common/SectionHeading";
import ContactInfoCard from "../components/contact/ContactInfoCard";

function Contact() {
  return (
    <section
      id="contact"
      className="engineering-section engineering-contact relative mx-auto w-[calc(100%-32px)] max-w-[1080px] py-20 sm:w-[calc(100%-44px)] sm:py-28"
    >
      <div className="card-surface relative overflow-hidden rounded-3xl p-6 sm:p-10 lg:p-12">
        <div className="tech-grid pointer-events-none absolute inset-0 opacity-50" />
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[var(--accent)]/10 blur-3xl" />

        <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Let's build something intelligent"
              description="Open to collaborations, learning opportunities, and engineering projects across AI, software, and embedded systems."
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <div className="w-full">
              <ContactInfoCard />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
