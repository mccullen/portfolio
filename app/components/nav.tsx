"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const navItems = {
  '/': {
    id: 'home',
    name: 'home'
  },
  '/projects': {
    id: 'projects',
    name: 'projects',
  },
  /*
  '/blog': {
    name: 'blog',
  },
  */
  '/contact': {
    id: 'contact',
    name: 'contact',
  },
}

export function Navbar() {
  const pathname = usePathname();

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { id, name }]) => {
              const isActive = pathname === path;
              return (
                <Link
                  key={path}
                  id={`${id}-link`}
                  href={path}
                  className={`transition-colors ${
                    isActive
                      ? 'text-neutral-800 dark:text-neutral-200 font-semibold'
                      : 'text-gray-600 dark:text-gray-300 hover:text-neutral-800 dark:hover:text-neutral-200'
                  } flex items-center py-2 px-4 mx-1 rounded-lg`}
                >
                  {/*className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"*/}
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
