type Project = {
  title: string;
  description: string;
  stack: string[];
  videoUrl?: string;
  repoUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured?: boolean;
};

export default function PortfolioCard({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  const isGoogleDrive = project.videoUrl?.includes("drive.google.com");

  return (
    <div
      className={`space-y-4 ${
        compact
          ? "p-4 border rounded-lg shadow-sm bg-white"
          : "pb-8 border-b border-gray-200"
      }`}
    >
      {/* Title */}
      <h3 className="text-xl font-semibold text-primary">{project.title}</h3>

      {/* Media Preview */}
      {!compact && (
        <>
          {project.videoUrl ? (
            <div className="w-full aspect-video rounded-md overflow-hidden">
              <iframe
                src={
                  isGoogleDrive
                    ? project.videoUrl.replace("/view", "/preview")
                    : project.videoUrl
                }
                title={project.title}
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          ) : project.imageUrl ? (
            <img
              src={project.imageUrl}
              alt={`${project.title} screenshot`}
              className="w-full rounded-md shadow-sm"
            />
          ) : null}
        </>
      )}

      {/* Description */}
      <p className="text-body">
        {compact
          ? project.description.slice(0, 100).trim() + "..."
          : project.description}
      </p>

      {/* Stack */}
      <ul className="flex flex-wrap gap-2 text-sm text-subtle">
        {project.stack.map((tech, i) => (
          <li key={i} className="bg-gray-100 px-2 py-1 rounded">
            {tech}
          </li>
        ))}
      </ul>

      {/* Links */}
      <div className="flex gap-4 flex-wrap pt-2">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Live Site
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            GitHub
          </a>
        )}
        {!compact && project.videoUrl && !isGoogleDrive && (
          <a
            href={project.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Demo Video
          </a>
        )}
      </div>
    </div>
  );
}
