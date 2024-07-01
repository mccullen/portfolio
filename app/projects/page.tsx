import Link from 'next/link';

export const metadata = {
  title: 'Projects',
  description: 'View my projects',
}

const projects = [
  {
    id: "tactix",
    name: "tactix",
    description: "Play tic tac toe against computer",
    url: "https://tactix.netlify.app"
  },
  {
    id: "poddelnye",
    name: "poddelnye",
    description: "Fake news visualization",
    url: "https://poddelnye.vercel.app"
  },
  {
    id: "eirene",
    name: "eirene",
    description: "A playground for standardized observational health analytics using the OMOP Common Data Model",
    url: "https://eirene.netlify.app"
  },
  {
    id: "spark-ctakes",
    name: "spark-ctakes",
    description: "Solution to scale out Apache cTAKES clinical NLP framework using Apache Spark",
    url: "https://github.com/mccullen/spark-ctakes"
  },
  {
    id: "custom-components",
    name: "custom-ctakes-components",
    description: "Custom components to use with the Apache cTAKES clinical NLP framework",
    url: "https://github.com/mccullen/custom-components"
  },
  {
    id: "ctakes-example",
    name: "ctakes-example",
    description: "Tutorial on how to use the Apache cTAKES clinical NLP framework",
    url: "https://github.com/mccullen/ctakes-example"
  },
];

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Projects</h1>
      <div>
        <ul>
          {projects.map(({id, name, description, url}) => (
              <li key={id} className="border-b border-gray-200 last:border-b-0">
                <a
                  id={`${id}-link`} 
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2 px-4 rounded hover:bg-gray-100"
                >
                    <div className="mb-1 font-semibold">{name}</div>
                    <div className="text-sm text-gray-600">{description}</div>
                </a>
              </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
