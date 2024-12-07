import Comments from '@/app/components/Comments';
import getPostComments from '@/lib/getPostComments';
import getPosts from '@/lib/getPosts';
import React, { Suspense } from 'react'


export async function generateMetadata({ params }) {
    const { id } = params;
    const post = await getPosts(id);

    return {
        title: post.title,
        description: post.body,
    };
}

const PostPage = async ({params}) => {
    const {id} = params;
    const postPromise = getPosts(id);
    const commentPromise = getPostComments(id);
    //const [post, comments] = await Promise.all([postPromise, commentPromise]);

    const post = await postPromise;

    return (
        <div className="mt-6">
            <h2 className="text-blue-500">{post.title}</h2>
            <p className="mt-3">{post.body}</p>
            <hr />
            <Suspense fallback="<h1>Loading comments...</h1>">
                <Comments promise={commentPromise} />
            </Suspense>
        </div>
    );
  
}

export default PostPage