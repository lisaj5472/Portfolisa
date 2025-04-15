export default function About() {
  return (
    <div className="container-default py-12 space-y-10">
      {/* Headline */}
      <h2 className="text-heading text-center lg:text-left">
        From Event Planning to Front-End Development
      </h2>

      {/* Main Bio Layout */}
      <div className="flex flex-col lg:flex-row items-start gap-8">
        {/* Headshot */}
        <div className="w-full lg:w-48 shrink-0 mx-auto lg:mx-0">
          <img
            src="../public/headShot.jpg"
            alt="Lisa Jorgensen"
            className="rounded-lg shadow-md w-48 h-auto"
          />
        </div>

        {/* Bio Text */}
        <div className="flex-1 space-y-6">
          <p className="text-body">
            I’m Lisa — a former operations leader turned developer, with a
            passion for solving problems and creating intuitive, inclusive
            digital experiences. After 20+ years leading events, programs, and
            strategy in tech, I shifted to web development to merge creativity,
            systems-thinking, and clean code.
          </p>
          <p className="text-body">
            My tech stack includes React, TypeScript, Tailwind CSS, Node.js, and
            PostgreSQL. I’m especially drawn to projects that simplify
            workflows, increase access, and support underrepresented
            communities.
          </p>
          <p className="text-body">
            My background helps me bring strategic structure to every project,
            blending strong communication with clean design and thoughtful UX.
          </p>
          <p className="text-body">
            <a
              href="../public/Lisa_Jorgensen_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline hover:opacity-80"
            >
              Download my full resume
            </a>
          </p>
        </div>
      </div>

      {/* Optional: More About Me Section */}
      <div className="pt-12 border-t border-gray-200 space-y-4">
        <h3 className="text-2xl font-semibold text-primary">More About Me</h3>
        <p className="text-body">
          When I’m not coding, I’m likely strength training, exploring new
          trails, or cheering on the Denver Nuggets. I love creating structure
          out of chaos and bringing thoughtful energy to every team I join.
        </p>
        <p className="text-body">
          I’m also passionate about inclusion in tech and thrive in communities
          that value accessibility, authenticity, and continuous learning.
        </p>
      </div>
    </div>
  );
}
