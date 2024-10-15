import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-milk shadow-md">

 <header className=" container mx-auto">
  <nav className="flex items-center justify-between py-6" >
    <a href="" className="text-green-400 text-3xl">Recyworld</a>
    <ul className="flex gap-24 ">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/comments">Comments</NavLink></li>
      <li><NavLink to="/blog">Blog</NavLink></li>
    </ul>
  </nav>
 </header>
    </div>
  )
}
