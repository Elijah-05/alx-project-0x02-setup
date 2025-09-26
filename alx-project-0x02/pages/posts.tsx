import Header from "@/components/layout/Header"

const Posts = () => {
    return (
        <div>
            <Header />
            <h1 className="text-3xl font-bold">Posts</h1>
            <p className="mt-2 text-gray-700">
                This is where fetched or static posts can be displayed.
            </p>
        </div>
    )
}

export default Posts