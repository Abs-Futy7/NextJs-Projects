import React from 'react'
import Link from 'next/link'
const blogs = [
    {
        id : 1,
        title : "Blog1",
        description : "Blog1 desc",
    },
    {
        id : 2,
        title : "Blog2",
        description : "Blog2 desc",
    }
] 
const page = () => {
  return (
    <div className='mt-5'>
        <ul>
            {blogs.map((blog) =>{
                return(
                <li className='mb-5' key={blog.title}>
                    <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
                </li>
                );
            })}
        </ul>
    </div>
  )
}

export default page