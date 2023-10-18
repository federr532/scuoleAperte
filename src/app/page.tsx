// import Image from 'next/image'
import Nav from './components/Header';

export default function Home() {
  return (
    <main className="h-full w-full flex flex-col justify-between font-Agrandir">
      <div className="container mx-auto">
        <Nav />
        
        <h1 
          className='text-center text-4xl sm:text-5xl expanded mt-24'>
          Scuole Aperte
        </h1>

        <div className="container mt-16 min-h-[410px] sm:min-h-[100px] mb-8 mx-auto">
          {/* container: 2 under-container 50/50 */}
          <div className="flex flex-col sm:flex-row max-w-fit sm:max-w-[767px] mx-auto flex-wrap justify-center items-start w-full">
            <div className="w-full sm:w-1/2 flex items-center flex-col">
              <h1 className="expanded mb-4 w-[190px] text-lg sm:text-xl text-left">Brignoli</h1>
              <ul className="list-disc pl-7">
                <li><span className="font-medium">28 ottobre 15:00/17:00</span></li>
                <li><span className="font-medium">18 novembre 15:00/17:00</span></li>
                <li><span className="font-medium">16 dicembre 15:00/17:00</span></li>
                <li><span className="font-medium">13 gennaio 15:00/17:00</span></li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 mt-8 sm:m-0 border-t-2 border-gray-300 sm:border-none pt-10 sm:p-0 flex items-center flex-col">
              <h1 className="expanded mb-4 w-[190px] text-lg sm:text-xl text-left">Einaudi-Marconi</h1>
              <ul className="list-disc pl-7">
                <li><span className="font-medium">16 novembre 17:00/19:00</span></li>
                <li><span className="font-medium">14 dicembre 17:00/19:00</span></li>
                <li><span className="font-medium">10 gennaio 17:00/19:00</span></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container max-w-fit sm:max-w-[767px] mx-auto my-8">
          <div>tel: </div>
          <div>email: </div>
          <div>via:</div>
          <div>sito: </div>
        </div>
      </div>
    </main>
  )
}