import Link from "next/link";

export default function Navbar() {
   return (
      <main className="flex justify-between text-lg py-5">
         <div>
            <Link href="/">Ashwin Jadhav</Link>
         </div>
         <div className="flex justify-around">
            <Link href="/blog" className="pl-2">Blog</Link>
            <Link href="/skills" className="pl-2">Skills</Link>
            <Link href="/projects" className="pl-2">Projects</Link>
            <Link href="/about" className="pl-2">About</Link>
         </div>            
      </main>
   )
}
