"use client";

import { blogPosts } from "@/app/_data/blogPosts";

// TODO: refactor this code and add dynamic fetching from Supabase

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const markdown = `# The Calm Rhythm of Knitting 🧶

Knitting isn’t just a craft — it’s a *mindful ritual*. Each loop of yarn is a small, meditative motion that connects us to generations of makers before us.

---

## Why I Love Knitting

Knitting gives me space to slow down. In a world of endless notifications, it’s rare to find something that demands quiet focus — a place where *mistakes can be undone* and *progress is visible* stitch by stitch.

Here are a few things:
- The soft sound of needles clicking together  
- The texture of natural fibers running through my fingers  
- Watching a flat piece of fabric take shape into something wearable  
- The joy of gifting something handmade  

---

## The Tools of the Trade

Before you dive in, you’ll need a few essentials:

| Tool | Description |
|------|--------------|
| 🪡 Needles | Choose the right size for your yarn — circular or straight, metal or bamboo |
| 🧵 Yarn | Wool for warmth, cotton for breathability, acrylic for durability |
| ✂️ Scissors | Sharp enough to snip cleanly through yarn |
| 📏 Stitch markers | To help track pattern repeats and rows |
| 🧷 Tapestry needle | For weaving in ends and finishing your project |

---

## My First Project: The Classic Scarf

When I first started, I made a **simple garter stitch scarf**. It wasn’t perfect — a few dropped stitches here and there — but it felt magical to wear something *I made with my own hands*.  

If you’re a beginner, here’s a great place to start:

1. Cast on 30 stitches.  
2. Knit every row until your piece measures your desired length.  
3. Bind off, weave in the ends, and admire your work.  

That’s it! Simple, satisfying, and perfect for practice.

---

## Beyond the Basics

Once you’ve mastered the basics, a whole world opens up:

- **Cables** twist your stitches into elegant patterns.  
- **Colorwork** brings stories to life with every row.  
- **Lace** challenges your focus and rewards you with delicate beauty.  

Every new technique adds a layer of possibility — and personality — to your creations.

---

## Final Thoughts

Knitting reminds me that good things take time.  
It’s not about perfection — it’s about presence.  

So find your favorite yarn, settle into your chair, and let your hands do the thinking for a while.  

> “The act of knitting is a whisper from your hands to your heart: *you are creating something beautiful, one stitch at a time.*”

---

*Written by [Urszula’s Knitting Journal](#) — sharing stories, stitches, and cozy inspiration.*
`;

export default function Page({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const post = blogPosts.find((post) => post.slug === slug);

    if (!post) {
        return <>Blog Post Not Found</>;
    }

    return (
        <div className="flex min-h-screen flex-col items-center p-8">
            <h1 className="bold text-text text-4xl">{post.title}</h1>
            <h2 className="font-accent mt-8 text-2xl">{post.description}</h2>
            <article className="prose prose-lg dark:prose-invert mt-6 w-full max-w-3xl">
                <Markdown remarkPlugins={[remarkGfm]}>
                    {markdown.trimStart()}
                </Markdown>
            </article>
        </div>
    );
}
