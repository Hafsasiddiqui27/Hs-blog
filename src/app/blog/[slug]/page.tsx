import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import CommentBox from "@/components/Comments";



interface IArticle{
    title: string,
    slug:string,
     samllDescription:string,
     image:string,
       content: any,
    }
    interface Params{
        params:{
            slug:string
        }
    }


    const BlogArticle = async (params: Params) => {
        const { slug } = await params.params;
    const query= `*[_type == "blog" && slug.current == $slug]
{
  title, 
 
    samllDescription,
    "image":featuredImage.asset->url,
    content
      
}[0]`;
try {
const res:IArticle= await client.fetch(query,{slug});
// console.log(res)

if(!res){
    return <div>Post not found</div>
}

  return (

     <article className="max-w-screen-md mx-auto">
      <Image src={urlFor(res.image).url()} alt="res.title" height={300} width={600} className="rounded-xl object-cover mx-auto h-[350px] items-center mt-12" />
      <h2 className="mt-16 text-5xl text-primary  font-bold">{res.title}</h2>
              <p className="text-lg  mt-6 text-gray-700 dark:text-gray-300 ">{res.samllDescription}</p>
              
              <section className="text-lg max-w-screen-md border-b-2 mx-auto text-gray-700 dark:text-gray-300 mt-2 prose-primary prose prose-xl dark:prose-invert prose-li:marker:text-primary prose-a:text-primary"><PortableText value={res.content} />
              </section>
                <CommentBox />
      </article>
  )
} catch (error){
    console.error('Error fetching post', error);
    return<div> error in loading post</div>

}
}

export default BlogArticle
