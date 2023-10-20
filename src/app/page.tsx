import Image from "next/image";
import logo from "../../public/LogoIsisBem.webp";
import img1 from "../../public/logo-eu.svg";
import img2 from "../../public/logo-repubblica.svg";

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col justify-between mt-12 font-Agrandir">
      <div className="container mx-auto">
        <div className="container mx-auto w-full">
          <Image
            src={logo}
            width={225}
            height={225}
            alt="logo Isis bem"
            className="mx-auto max-w-[300px] max-h-[300px]"
            fetchPriority="high"
            loading="eager"
          />
        </div>
        <h1 className="text-center text-4xl sm:text-5xl expanded mt-4">
          Scuole Aperte
        </h1>
        <div className="container mt-16 min-h-[410px] sm:min-h-[100px] mb-8 mx-auto">
          <div className="flex flex-col sm:flex-row max-w-fit sm:max-w-[767px] mx-auto flex-wrap justify-center items-start w-full">
            <div className="w-full sm:w-1/2 flex items-center flex-col">
              <h1 className="expanded mb-4 w-[190px] text-lg sm:text-xl text-left text-green-500">
                Brignoli
              </h1>
              <ul className="list-disc pl-7">
                <li>
                  <span className="font-medium">28 ottobre 15:00/17:00</span>
                </li>
                <li>
                  <span className="font-medium">18 novembre 15:00/17:00</span>
                </li>
                <li>
                  <span className="font-medium">16 dicembre 15:00/17:00</span>
                </li>
                <li>
                  <span className="font-medium">13 gennaio 15:00/17:00</span>
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 mt-8 sm:m-0 border-t-2 border-gray-300 sm:border-none pt-10 sm:p-0 flex items-center flex-col">
              <div className="flex flex-row max-w-[250px] w-fit justify-start items-center">
                <h1 className="expanded mb-4 text-lg text-blue-700 sm:text-xl text-left">
                  Einaudi
                </h1>
                <span className="expanded mb-4 text-md sm:text-xl px-2 text-gray-800">
                  &
                </span>
                <h1 className="expanded mb-4 text-lg sm:text-xl text-red-500">
                  Marconi
                </h1>
              </div>
              <ul className="list-disc pl-7 max-w-fit">
                <li>
                  <span className="font-medium">16 novembre 17:00/19:00</span>
                </li>
                <li>
                  <span className="font-medium">14 dicembre 17:00/19:00</span>
                </li>
                <li>
                  <span className="font-medium">10 gennaio 17:00/19:00</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container flex justify-center items-center mx-auto mt-20 mb-8">
          <a 
            href="https://bem.goiss.edu.it/pagine/scuola-aperta"
            target="blank"
            className="border linkOne flex justify-center items-center gap-2 border-gray-300 py-2 px-4 rounded-lg hover:bg-neutral-50 hover:underline hover:underline-offset-2"
          >
            Link scuole aperte 
            <i className="bi bi-box-arrow-up-right"></i>
          </a>
        </div>
        <div className="w-full inline-flex justify-center items-center p-0 overflow-x-hidden mt-16 mx-0 flex-nowrap">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            <li>
              <Image
                src={img1}
                alt="Image"
                width={300}
                height={300}
              />
            </li>
            <li>
              <Image
                src={img2}
                alt="Image"
                width={100}
                height={100}
              />
            </li>
          </ul>
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
            <li>
              <Image
                src={img1}
                alt="Image"
                width={300}
                height={300}
              />
            </li>
            <li>
              <Image
                src={img2}
                alt="Image"
                width={100}
                height={100}
              />
            </li>
          </ul>
      </div>
        <h1 className="text-center text-4xl sm:text-5xl expanded mt-32">
          Informazioni
        </h1>
        <div className="container max-w-fit mx-auto mt-12 mb-24">
          <div
            className="w-fit"
            itemScope
            itemType="http://schema.org/LocalBusiness"
          >
            Tel:{" "}
            <span itemProp="telephone">
              <a
                href="tel:+0481-99863"
                className="text-blue-500 hover:underline hover:underline-offset-2"
              >
                0481-99863
              </a>
            </span>
          </div>
          <div className="w-fit">
            Email:{" "}
            <a
              href="mailto:gois006009@istruzione.it"
              target="blank"
              className="text-blue-500 hover:underline hover:underline-offset-2"
            >
              gois006009@istruzione.it
            </a>
          </div>
          <div className="w-fit">
            PEC:{" "}
            <a
              href="mailto:gois006009@pec.istruzione.it"
              target="blank"
              className="text-blue-500 hover:underline hover:underline-offset-2"
            >
              gois006009@pec.istruzione.it
            </a>
          </div>
          <div className="w-fit">
            Via:{" "}
            <a
              href="https://www.google.it/maps/place/Istituto+Tecnico+Agrario+Giovanni+Brignoli/@45.892942,13.4956383,19.63z/data=!4m15!1m8!3m7!1s0x477ba8edddbf8e91:0x4b3faf051417792f!2sVia+Roma,+9,+34072+Gradisca+d'Isonzo+GO!3b1!8m2!3d45.8928243!4d13.4960569!16s%2Fg%2F11css84xs3!3m5!1s0x477ba8ee0c0b6cf3:0x583e5f355ec7c9d5!8m2!3d45.8927779!4d13.496059!16s%2Fg%2F1tdl4zp2?entry=ttu"
              target="blank"
              className="text-blue-500 hover:underline hover:underline-offset-2"
            >
              via Roma, 9, Gradisca d&#39;Isonzo (GO)
            </a>
          </div>
          <div className="w-fit">CF: 91035220317</div>
        </div>
      </div>
    </div>
  );
}
