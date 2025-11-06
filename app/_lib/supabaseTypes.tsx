// Types for database
export type BlogPost = {
    id: string;
    title: string;
    slug: string;
    description: string | null;
    content: string | null;
    image_url: string | null;
    image_alt: string | null;
    published: boolean;
    featured: boolean;
    created_at: string;
    updated_at: string;
    published_at: string | null;
};

export type Product = {
    id: string;
    name: string;
    slug: string;
    description: string | null;
    price: number;
    image_url: string | null;
    image_alt: string | null;
    category: string | null;
    in_stock: boolean;
    stock_quantity: number;
    featured: boolean;
    created_at: string;
    updated_at: string;
};

export type ContactMessage = {
    id: string;
    name: string;
    email: string;
    message: string;
    read: boolean;
    created_at: string;
};
