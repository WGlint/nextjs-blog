import fs from 'fs'
import Markdown from "markdown-to-jsx"
import matter from "gray-matter"
import getPostMetadata from '@/components/getPostMetadata'

export const generateStaticParams = async () => {
    const posts = getPostMetadata();
    return posts.map((post) => ({
      slug: post.slug,
    }));
  };

export default function Post(props){
    
    const contentslug = getContentPosts(props.params.slug)

    return (
        <>  
            <div>
                <h1 className="text-4xl font-bold" >This is a post : {contentslug.data.title}</h1>

                <Markdown className="prose">
                    {contentslug.content}
                </Markdown>
            </div>
        </>
    )
}


function getContentPosts(slug) {
    const folder = './posts'
    const file = `${folder}/${slug}.md`
    const content = fs.readFileSync(file, 'utf8')
    const matterResult = matter(content)
    return matterResult
}