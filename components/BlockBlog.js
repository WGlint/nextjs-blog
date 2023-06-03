import Link from 'next/link'

export default function BlockBlog(post) {

    return (
        <>  
            <div className='border-slate-300 border p-4 rounded-md shadow-md bg-white' >
                <Link href={`./posts/${post.slug}`} >
                    <h1 className='font-bold text-violet-600 hover:underline' >{post.title}</h1>
                </Link>
                <p className='text-sm text-slate-400' >{post.data}</p>
                <p className='text-slate-700' >{post.subtitle}</p>
            </div>
        </>
    )
}