import { prisma } from "@/lib/prisma"

export default async function Posts() {

    const posts = await prisma.post.findMany()
    return (
        <div>
            {posts.map((post) => (
                <div key={post.id}>
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    )
}