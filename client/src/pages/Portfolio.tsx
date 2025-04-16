import { projects } from "../assets/projects";
import PortfolioCard from "../components/portfolioCard";

const featured = projects.filter((p) => p.featured);
const others = projects.filter((p) => !p.featured);

export default function Portfolio() {
  return (
    <div className="container-default py-12 space-y-12">
      {/* Featured */}
      <section className="space-y-8">
        <h2>Featured Projects</h2>
        <div className="flex flex-col gap-12">
          {featured.map((project, index) => (
            <PortfolioCard key={index} project={project} />
          ))}
        </div>
      </section>

      {/* All Projects */}
      <section className="space-y-6">
        <h3>Other Projects</h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {others.map((project, index) => (
            <PortfolioCard key={index} project={project} compact />
          ))}
        </div>
      </section>
    </div>
  );
}
