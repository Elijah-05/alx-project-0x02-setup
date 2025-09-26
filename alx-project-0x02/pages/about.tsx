import Button from "@/components/common/Button"
import Header from "@/components/layout/Header"


const About = () => {
    return (
        <div>
            <Header />
            <h1>This is About Page</h1>
             <p className="text-gray-700">
                This page demonstrates the reusable Button component with different
                sizes and shapes.
            </p>

            <div className="flex flex-wrap gap-4 mt-4">
                <Button label="Small" size="small" shape="rounded-sm" />
                <Button label="Medium" size="medium" shape="rounded-md" />
                <Button label="Large" size="large" shape="rounded-full" />
            </div>
        </div>
    )
}

export default About