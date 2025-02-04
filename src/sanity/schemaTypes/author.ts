
import { defineType, defineField,} from "sanity";

export const author = defineType( {
    name: 'author',
    title: 'Author',
    type: 'document',
    fields: [
      defineField(
      {
        name: 'name',
        title: 'AuthorName',
        type: 'string',
      }),
      defineField(
        {
          name: 'bio',
          title: 'Bio',
          type: 'text',
        }),
    //   defineField(
    //     {
    //         name: 'image',
    //         title: 'Image',
    //         type: 'image',
    //         options: {
    //           hotspot: true,
    //         }
    //       }),
          
          

    ]
})