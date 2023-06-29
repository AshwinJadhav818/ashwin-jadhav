import Link from "next/link";
import Image from "next/image";
import blogs from "@/lib/getBlogsMetadata"

export default function BlogPage() {
   return (
      <div>
         <h1 className="text-3xl font-bold">Blog</h1>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
            {blogs().map((blog) => (
               <Link href={`/blog/${blog.slug}`} className="mx-auto max-w-md overflow-hidden rounded-lg bg-gray-50 text-black border-gray-100 hover:border-gray-200 hover:bg-gray-200 dark:bg-zinc-900 dark:border-zinc-600 border-bold dark:hover:bg-zinc-800 dark:active:bg-zinc-800 focus:outline-none focus:ring dark:focus:ring-zinc-600 shadow" key={blog.slug}>
                  <Image
                     src="https://api.time.com/wp-content/uploads/2023/02/Bing.jpg" alt="bing" width="500" height="400"
                     className="aspect-video w-full object-cover"
                  />
                  <div className="p-4">
                     <p className="mb-1 text-sm text-gray-500"><time>{blog.publishedDate}</time></p>
                     <h3 className="text-xl text-gray-950 dark:text-gray-100 font-medium">{blog.title}</h3>
                     <p className="mt-1 text-gray-700 dark:text-gray-300">{blog.description}</p>
                  </div>
               </Link>
            ))}
         </div>
      </div>
   )
}
