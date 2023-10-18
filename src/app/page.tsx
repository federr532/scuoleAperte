// import Image from 'next/image'
import Nav from './components/Header';

export default function Home() {
  return (
    <main className="min-h-screen w-full font-Inter">
      <Nav />
      <h1 
        className='text-center text-5xl font-semibold mt-16'>
        Scuole Aperte
      </h1>

      {/* images gallery */}
      {/* <div className="locandina aspect-video">
        <img src="/" alt="Image" role='img' width={500} height={750} />
      </div> */}
      
      {/* or */}
      {/* <div className="container mx-auto my-10">
        <div className="grid grid-flow-row">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="grid grid-flow-row">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div> */}
    </main>
  )
}