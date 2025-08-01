import { api } from "@convex/_generated/api";
import { fetchQuery } from "convex/nextjs";
import { ProjectsCard } from "@/components/projects-card";
import { LinksCard } from "@/components/links-card";

export default async function HomePage() {
  const link = await fetchQuery(api.links.random);
  const project = await fetchQuery(api.projects.random);
  if (!link || !project) {
    return;
  }
  return (
    <main>
      <div className="prose-no-y-padding">
        <h1>Altie122</h1>
        <h2>Links:</h2>
        <p>
          Links have moved to the <a href="/links">Links</a> page.
        </p>
        <br />
        <h3>Here is one to check out:</h3>
      </div>
      <div className="prose-container-no-y-padding">
        <LinksCard link={link} />
      </div>
      <div className="prose-no-y-padding">
        <h2>Projects:</h2>
        <p>
          Projects have moved to the <a href="/projects">Projects</a> page.
        </p>
        <br />
        <h3>Here is one to check out:</h3>
      </div>
      <div className="prose-container-no-y-padding">
        <ProjectsCard project={project} />
      </div>
      <div className="prose pb-16">
        <h2>Newest Blog Post:</h2>
        <br />
        {/* {
				newestPost && <BlogCard url={"/blog/posts/" + newestPost.slug} title={newestPost.data.title} image={newestPost.data.image} date={newestPost.data.pubDate} author={newestPost.data.author} description={newestPost.data.description} client:only="react" />
			} */}
      </div>
    </main>
  );
}
