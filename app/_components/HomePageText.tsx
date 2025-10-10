import BlogButton from "./BlogButton";

export default function HomePageText() {
    return (
        <div className="relative flex h-full flex-1 flex-col items-center justify-center">
            <p className="text-text dancer-font text-8xl">
                knitted with soul,
                <br />
            </p>
            <p className="text-text dancer-font pb-8 text-8xl">
                wrapped in softness
            </p>
            <BlogButton placeholder="Read the Blog" />
        </div>
    );
}
