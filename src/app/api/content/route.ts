import { NextResponse } from 'next/server';

// Dummy data
const posts = [
    {
        "title": "Rose",
        "slug": "rose",
        "content": "A woody perennial flowering plant that comes in various colors and symbolizes love and beauty.",
        "image": "https://images.unsplash.com/photo-1496062031456-07b8f162a322?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjIwNzB8MHwxfGFsbHwxf"
    },
    {
        "title": "Lotus",
        "slug": "lotus",
        "content": "A sacred aquatic plant found throughout Asia, representing spiritual enlightenment, eternity, and divinity.",
        "image": "https://images.unsplash.com/photo-1616435577207-ca90abc6b732?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjIwNzB8MHwxfGFsbHwxf"

    },
    {
        "title": "Orchid",
        "slug": "orchid",
        "content": "An exotic and varied group of flowering plants, admired for their delicate form and vivid hues, signifying refinement and luxury.",
        "image": "https://images.unsplash.com/photo-1605996370592-b6f7a81e382e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjIwNzB8MHwxfGFsbHwxf"

    },
    {
        "title": "Dandelion",
        "slug": "dandelion",
        "content": "A common weed with golden-yellow composite flowers, recognized for its medicinal properties and association with childhood memories.",
        "image": "https://images.unsplash.com/photo-1496516766850-37a0f876be38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjIwNzB8MHwxfGFsbHwxf"

    },
    {
        "title": "Carnation",
        "slug": "carnation",
        "content": "A classic, ruffled flower available in numerous shades, denoting fascination, distinction, and affection.",
        "image": "https://images.unsplash.com/photo-1617265178137-f22fec5badae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjIwNzB8MHwxfGFsbHwxf"

    }
]

export async function GET() {
    return NextResponse.json(posts);
}