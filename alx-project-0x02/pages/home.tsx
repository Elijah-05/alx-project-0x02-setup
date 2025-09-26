import Card from "@/components/common/Card"
import PostModal from "@/components/common/PostModal"
import Header from "@/components/layout/Header"
import { CardProps } from "@/interfaces"
import { useState } from "react"


const Home = () => {
    const [showPostModal, setShowPostModal] = useState(false)
    const [posts, setPosts] = useState<CardProps[]>([{title: "Sample One", content: "Sample one content here"}, {title: "Second Content", content: "Description detail here"}]);

    const handleSubmitPost = (value: {title: string; content: string}) => {
        setPosts((cur) => cur.concat(value))
    }

    return (
        <div className="p-6">
            <Header />
            <h1 className="text-3xl font-bold">Welcome to the Home Page</h1>
             {/* Button to open modal */}
            <button
                onClick={() => setShowPostModal(true)}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
                Add New Post
            </button>

            {/* Render dynamic posts */}
            <div className="grid md:grid-cols-2 gap-6 mt-4">
                {posts.map((post, index) => (
                <Card key={index} title={post.title} content={post.content} />
                ))}
            </div>
            <PostModal isOpen={showPostModal} onClose={() => setShowPostModal(false)} onSubmit={handleSubmitPost} />
        </div>
    )
}

export default Home