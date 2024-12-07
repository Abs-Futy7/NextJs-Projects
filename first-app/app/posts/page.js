import getAllPosts from '@/lib/getAllPosts'
import React from 'react'
import Link from 'next/link'

const page = async () => {
    const posts = await getAllPosts();
  return (
    <div>
        <h1>All Posts</h1>
        <ul className='mt-3'>
            {posts.map(posts =>
                <Link href={`/posts/${posts.id}`}>
                    <li key={posts.id}>{posts.title}</li>
                </Link>
            )}
        </ul>
    </div>
  )
}

export default page