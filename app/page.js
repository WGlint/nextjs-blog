import Link from 'next/link'
import getPostMetadata from '@/components/getPostMetadata'
import BlockBlog from '@/components/BlockBlog'
import OnSubmit from '@/components/SubmitButton'

export default function Home() {

  const posts = getPostMetadata().map((post) => {
    return (
      <>
        <BlockBlog key={post.slug} {...post} />
      </>
    )
  })

  return (
    <>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2' > {posts} </div>

    </>
    
  )
}
