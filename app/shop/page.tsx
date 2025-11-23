import HomeButton from "../_components/buttons/HomeButton";

export default function Page() {
    return (
        <div className="z-10 flex flex-col items-center justify-center p-8 text-center">
            <h1 className="text-text dancer-font mb-4 font-serif text-4xl font-bold">
                Shop Coming Soon
            </h1>
            <p className="text-primary/80 dancer-font mb-8 max-w-md">
                We are busy knitting up some beautiful products for you. Check
                back later or follow us for updates!
            </p>
            <HomeButton placeholder="Go to Home" />
        </div>
    );
}
