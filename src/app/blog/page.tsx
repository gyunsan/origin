import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import Link from "next/link";


interface Post {
    image: string | undefined;
    title: string;
    content: string;
    slug: string;
}

export default async function AllPost({ params }: { params: { slug: string } }) {
    const posts: Post[] = await fetch('http://localhost:3000/api/content').then(
        (res) => res.json()
    );




    return (
        <div>
            <h1 className="text-4xl py-8">All posts</h1>
            <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-4">
                {posts.map((post) => (
                    <Link href={`/blog/${post.slug}`} key={post.slug}>
                        <Card
                            isFooterBlurred
                            radius="lg"
                            className="border-none"
                        >
                            <img
                                title={post.title}
                                alt={post.title}
                                className="object-cover w-full h-72"
                                src={post.image}
                            />
                            <CardFooter>
                                <p className="text-xl">  {post.title}</p>

                            </CardFooter>
                        </Card>
                    </Link>
                ))}
            </dl>
        </div>
    )
}
