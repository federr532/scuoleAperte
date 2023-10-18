export default function Header() {
  return (
    // base nav (add <767px responsive)
    <nav 
      className="flex flex-wrap mx-auto min-h-[3.8rem] my-0 justify-center items-center w-full max-w-md text-xl border-b-2 border-gray-300 pt-8 pb-4 mb-2">
      <ul className="flex gap-6 flex-wrap">
        <li className="mx-2"><a href="/">Home</a></li>
        <li className="mx-2"><a href="/">Orari Apertura</a></li>
        <li className="mx-2"><a href="/">Contatti</a></li>
        <li className="mx-2"><a href="/">Eventi</a></li>
      </ul>
    </nav>
  )
}