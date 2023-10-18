// import Image from 'next/image'
// import Nav from './components/Header';

export default function Home() {
  return (
    <main className="min-h-screen w-full font-Inter">
      {/* <Nav /> */}
      <h1 
        className='text-center text-5xl expanded mt-16'>
        Scuole Aperte
      </h1>

      <div className="container mt-16 min-h-[500px] mb-8 mx-auto">
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center w-full">
          <div className="w-full sm:w-1/2 flex items-center flex-col">
            <h1 className="expanded mb-4 w-[190px] text-left">Brignoli</h1>
            <ul>
              <li><span>28 ottobre 15:00/17:00</span></li>
              <li><span>18 novembre 15:00/17:00</span></li>
              <li><span>16 dicembre 15:00/17:00</span></li>
              <li><span>13 gennaio 15:00/17:00</span></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 mt-8 flex items-center flex-col">
            <h1 className="expanded mb-4 w-[190px] text-left">Einaudi-Marconi</h1>
            <ul>
              <li><span>16 novembre 17:00/19:00</span></li>
              <li><span>14 dicembre 17:00/19:00</span></li>
              <li><span>10 gennaio 17:00/19:00</span></li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}