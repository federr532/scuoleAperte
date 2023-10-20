import Link from 'next/link'

export default function Header() {
  return (
    <nav 
      className="flex flex-wrap mx-auto min-h-[3.8rem] my-0 justify-center items-center w-full max-w-md text-xl border-b-2 border-gray-300 pt-8 pb-4 mb-2">
      <ul className="flex gap-6 flex-wrap">
        <li className="mx-2"><Link href="/">Home</Link></li>
        <li className="mx-2"><a href="https://instagram.com/brignolieinaudimarconi" target="blank"><i className="bi bi-instagram"></i></a></li>
      </ul>
    </nav>
  )
}