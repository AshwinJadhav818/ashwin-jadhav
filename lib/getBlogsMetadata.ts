import fs from "fs";
import matter from "gray-matter";

export default function getBlogsMetadata() {
    const folder = "blogs/";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith('.md'));

    const blogs = markdownPosts.map((fileName) => {
       const fileContents = fs.readFileSync(`blogs/${fileName}`, 'utf8');
       const matterResult = matter(fileContents);
       return {
          title: matterResult.data.title,
          description: matterResult.data.description,
          publishedDate: matterResult.data.publishedDate,
          isPublished: matterResult.data.isPublished,
          tags: matterResult.data.tags,
          slug: fileName.replace('.md', ''),
       };
    });

    return blogs;
}
