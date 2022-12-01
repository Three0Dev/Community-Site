import { useLoaderData } from "react-router-dom";

export async function projectLoader({ params }) {
  return params.projectId;
}

function ProjectPage() {
  const projectId = useLoaderData();

  return (
    <div>
      Project ID: {projectId}
    </div>
  )
}

export default ProjectPage;