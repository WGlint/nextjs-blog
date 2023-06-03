import fs from 'fs'
import matter from 'gray-matter'


const getPostMetadata = () => {
    const folder = './posts'
    const files = fs.readdirSync(folder)
    const markdownPosts = files.filter((file) => file.endsWith('.md'))

    const slugs = markdownPosts.map((post) => {
      const fileContents = fs.readFileSync(`${folder}/${post}`, 'utf8')
      const matterResult = matter(fileContents)
      return {
        title : matterResult.data.title,
        data : matterResult.data.date,
        subtitle : matterResult.data.subtitle,
        slug : post.replace('.md', ''),
      }
    })

    return slugs
  }

export default getPostMetadata