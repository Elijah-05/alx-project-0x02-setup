import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header"

interface APIResponse {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostsPageProps {
  posts: APIResponse[];
}

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
    return (
        <div className="p-6">
            <Header />
            <h1 className="mt-4 text-3xl font-bold">Posts</h1>
            <p className="mt-2 text-gray-700">
                This is where fetched or static posts can be displayed.
            </p>

             <div className="grid md:grid-cols-2 gap-6">
                {posts.map((post) => (
                    <PostCard
                        key={post.id}
                        title={post.title}
                        content={post.body}
                        userId={post.userId}
                    />
                ))}
            </div>
        </div>
    )
}

// Next.js build-time data fetching
// export async function getStaticProps() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
//   const posts: APIResponse[] = await res.json();

//   return {
//     props: { posts }
//   };
// }

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
  const posts: APIResponse[] = await res.json();

  return { props: { posts } };
}


export default Posts