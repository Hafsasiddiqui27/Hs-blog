import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";




interface Iblog{
  title:string,
    slug:string,
    image:string,
    samllDescription:string,
  
}

export default async function Home()
 {
  const query = `*[_type == "blog"] | order(_createdAt asc)
{  title,
    "slug":slug.current,
    "image":featuredImage.asset->url,
    samllDescription,
    }`
  const data:Iblog[] =await client.fetch(query)
  // console.log(data)


  return(
    <main className="flex flex-col">
      <h1 className="text-3xl font-bold my-12 text-center">MOST RECENT BLOGS</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mt-5">
    {
      data.map((data,i)=>{
        return(
         <Card key={i}>
            <Image src={urlFor(data.image).url()} alt="Poster" width={200} height={150}
            className="object-cover flex justify-between items-center h-[250px] w-full rounded-t-lg" />
            <CardContent className="mt-5">
              <h3 className="text-lg font-bold text-primary line-clamp-2 leading-tight">{data.title}</h3>
              <p className="text-sm  line-clamp-3 mt-2 text-gray-600 dark:text-gray-300">{data.samllDescription}</p>
          
           <Button asChild className="w-full mt-7">
            <Link href={`/blog/${data.slug}`}>Read More</Link>
           </Button>
            </CardContent>
            </Card>
        )
      })
    }
    
    </div>
    
    </main>
   
  );
}
