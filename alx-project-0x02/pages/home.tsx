import Card from "@/components/common/Card"


const Home = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold">Welcome to the Home Page</h1>

            <Card
                title="Getting Started"
                content="Learn how to build fast web apps with Next.js, TypeScript, and Tailwind CSS."
            />

            <Card
                title="Reusable Components"
                content="Create modular, reusable UI pieces to keep your codebase clean and maintainable."
            />

            <Card
                title="API Integration"
                content="Fetch data from external APIs and display it dynamically in your app."
            />
        </div>
    )
}

export default Home