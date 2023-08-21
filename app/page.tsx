import Card from './Card/page'
import Link from 'next/link'
export default function Home() {
  return (
    <nav>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-base-300">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2">Fruts Shop
              <div className="navbar-end">
                <Link href="/Search">
                  <button className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  </button>
                  </Link>
              </div>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                <Link href="/"><li><a>Home</a></li></Link>
                <Link href="/Contact"><li><a>Contact Us</a></li></Link>
              </ul>
            </div>
          </div>
          <Card />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200">
            <Link href="/"><li><a>Home</a></li></Link>
            <Link href="/Contact"><li><a>Contact Us</a></li></Link>

          </ul>

        </div>
      </div>
    </nav>
  );
}

