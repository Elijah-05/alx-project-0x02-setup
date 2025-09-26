import Card from "@/components/common/Card"
import PostModal from "@/components/common/PostModal"
import { useState } from "react"


const Home = () => {
    const [showPostModal, setShowPostModal] = useState(false)

    const handleSubmitPost = (value: {title: string; content: string}) => {
        console.log(value)
    }

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold">Welcome to the Home Page</h1>
            <button type="button" className="bg-blue-500 py-2 px-4 rounded-lg text-white" onClick={() => setShowPostModal(true)}>Add Post</button>

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
            <PostModal isOpen={showPostModal} onClose={() => setShowPostModal(false)} onSubmit={handleSubmitPost} />
        </div>
    )
}

export default Home