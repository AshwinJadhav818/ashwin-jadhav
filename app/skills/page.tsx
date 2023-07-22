import Image from "next/image";
import Link from "next/link";

export default function Skills() {
   return (
      <div>
         <h1 className="text-3xl font-bold">Skills</h1>
         <div className="inline-grid gap-3 grid-cols-3 py-5">
            <Link href="https://nextjs.org" className="flex flex-col items-center justify-start h-48 w-48 p-5 border-zinc-50 border-solid border-2 rounded-lg hover:bg-zinc-900">
               <Image src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored-dark.svg" height="40" width="40" alt="nextjs icon" />
               <h2 className="text-3xl pt-1">Next.js</h2>
            </Link>
            <Link href="https://nextjs.org" className="flex flex-col items-center justify-start h-30 w-fit p-5 border-zinc-50 border-solid border-2 rounded-lg hover:bg-zinc-900">
               <Image src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored-dark.svg" height="40" width="40" alt="nextjs icon" />
               <h2 className="text-xl pt-1">Next.js</h2>
            </Link>
           </div>
      </div>
   )
}
