export default function Home() {
  return (
    <div className="container-default space-y-16">
      {/* Hero Section */}
      <section className="section text-center">
        <h1 className="text-heading">Hi, I'm Lisa Jorgensen!</h1>
        <h2 className="text-subheading">
          Front-End Developer | Clean Code Enthusiast | UX-Focused Problem
          Solver
        </h2>
      </section>

      <section className="section">
        <p className="text-body">
          I build accessible, user-friendly web apps that balance elegant design
          with functional precision. With a background in strategy and
          operations, I translate complex needs into clear, inclusive solutions
          — one line of code at a time.
        </p>
      </section>

      {/* Projects Preview */}
      <section className="section">
        <h3 className="h3-heading">Featured Projects</h3>
        <p className="text-body">
          Want to see my work in action? Head to the{" "}
          <span className="text-accent font-medium">Portfolio</span> page for a
          full collection, or scroll through a few of my recent favorites below
          — each built with usability, clarity, and clean architecture in mind.
        </p>
      </section>

      {/* Skills Summary */}
      <section className="section">
        <h3 className="h3-heading">Skills & Technologies</h3>
        <p className="text-body">
          My toolkit includes: HTML, CSS, JavaScript, React, TypeScript,
          Tailwind CSS, Node.js, and PostgreSQL. I'm also fluent in
          collaboration — bringing communication, organization, and project
          management skills from 20+ years in strategy-driven roles.
        </p>
      </section>
    </div>
  );
}
