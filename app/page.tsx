import { BlogPosts } from 'app/components/posts'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Home"
};


export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hello and welcome to my website!
      </h1>
      <p className="mb-4">
        I'm Jeff McCullen, data scientist and software engineer with experience in the aerospace industry and 
        Military Health System. I completed my master's degree in computer science, focusing on 
        data science and machine learning applications in healthcare. Outside of work, I enjoy 
        hobbies such as caving, rock climbing, biking, and playing guitar and piano.
      </p>
      <div className="my-8">
        {/*<BlogPosts />*/}
      </div>
    </section>
  )
}
