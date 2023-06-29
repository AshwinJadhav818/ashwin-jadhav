import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getBlogsMetadata from "@/lib/getBlogsMetadata";

const getBlogContent = (slug: string) => {
   const folder = "blogs/";
   const file = `${folder}${slug}.md`;
   const content = fs.readFileSync(file, "utf8");
   const matterResult = matter(content);
   return matterResult;
};

export const generateStaticParams = async () => {
   const blogs = getBlogsMetadata();
   return blogs.map((blog) => ({
      slug: blog.slug,
   }));
};

export default function BlogPage(props: any) {
   const slug = props.params.slug;
   const blog = getBlogContent(slug);
   return (
      <div>
         <div className="text-center">
            <h1 className="font-bold text-2xl tracking-tighter">{blog.data.title}</h1>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">{blog.data.publishedDate}</p>
         </div>

         <article className="prose mx-auto prose-zinc dark:prose-invert">
            <Markdown>{blog.content}</Markdown>
         </article>
      </div>
   );
};
