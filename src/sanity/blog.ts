
import { defineType, defineField, defineArrayMember,} from "sanity";
import { author } from "./schemaTypes/author";

export const blog = defineType( {
    name: 'blog',
    title: 'Blog',
    type: 'document',
    fields: [
      defineField(
      {
        name: 'title',
        title: 'Title of blog',
        type: 'string',
      }),
      defineField(
      {
        name: 'slug',
        title: 'Slug of blog',
        type: 'slug',
        options:{
            source:'title',
        }
      }),
      defineField(
    {
        name: 'featuredImage',
        title: 'Featured Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
      defineField(
      {
        name:'samllDescription',
        type:'text',
        title:'Small Description',
        validation: Rule => Rule.required().error("required")
      }),
      defineField({
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [defineArrayMember(
          { type: 'block' })],
      }),
      defineField(
        {
          name: 'author',
          title: 'Author',
          type: 'reference',
          to:
           [{ type: 'author' }],
        }),
      
    ]
   
  }
)
  