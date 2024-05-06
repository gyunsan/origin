export const revalidate = 4200;

interface Post {
    image: string | undefined;
    title: string;
    content: string;
    slug: string;
}

interface Props {
    params: { slug: string };
}

export async function generateStaticParams() {
    const posts: Post[] = await fetch('http://localhost:3000/api/content').then(
        (res) => res.json()
    );

    return posts.map((post) => ({
        slug: post.slug,
    }));
}


export default async function BlogPostPage({ params }: Props) {
    // Fetch the post data
    const posts: Post[] = await fetch('http://localhost:3000/api/content').then(
        (res) => res.json()
    );

    const post = posts.find((post) => post.slug === params.slug)!;


    return (
        <div>
            <h2 className="text-4xl my-6">{post.title}</h2>
            <p>{post.content}</p>
            <img src={post.image} alt={post.title} width='300' className="my-6 rounded-lg shadow-xl" />
        </div>
    )
}