import Image from "next/image";
import Link from "next/link";

interface CardProps {
    image: string;
    title: string;
    description: string;
    slug: string;
    alt?: string;
}

//TODO add hover animation to lift the card slightly

export default function Card({
    image,
    title,
    description,
    slug,
    alt,
}: CardProps) {
    return (
        <article className="group bg-accent2 shadow-card hover:shadow-card-hover mx-auto max-w-sm overflow-hidden rounded-2xl transition-all duration-300">
            {/* Image Container */}
            <div className="relative h-48 overflow-hidden rounded-t-2xl">
                <Image
                    src={image}
                    alt={alt || title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            {/* Content Container */}
            <div className="flex h-40 flex-col p-6">
                {/* Title */}
                <h3 className="text-text mb-3 line-clamp-2 font-serif text-xl leading-tight font-bold">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-primary/80 mb-4 line-clamp-3 flex-grow text-sm leading-relaxed">
                    {description}
                </p>

                {/* Read More Link */}
                <Link
                    href={`/blog/${slug}`}
                    className="text-accent hover:text-primary self-start text-sm font-medium transition-colors duration-200"
                >
                    Read more →
                </Link>
            </div>
        </article>
    );
}
