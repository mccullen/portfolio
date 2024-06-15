import type { Metadata } from 'next';
import Link from "next/link";


export const metadata: Metadata = {
  title: "Contact"
};

const contactInfo = [
  {
    id: "linked-in",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mccullen/",
    img: "linkedin-icon.png"
  },
  {
    id: "git-hub",
    name: "GitHub",
    url: "https://github.com/mccullen/",
    img: "github-icon.png"
  },
  {
    id: "git-lab",
    name: "GitLab",
    url: "https://gitlab.com/mccullen/",
    img: "gitlab-icon.webp"
  },
];

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Contact</h1>

      {contactInfo.map(({id, name, url, img}) => (
        <div key={id} className="flex items-center space-x-2 contact-item mb-4">
          <img src={img} alt={name} className="contact-icon w-6 h-6" />
          <a id={`${id}-link`} href={url} target="_blank" rel="noopener noreferrer">
            {name}
          </a>
        </div>
      ))}
    </section>
  );
}