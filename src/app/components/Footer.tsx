export default function Footer() {
  return (
    <>
      <div className="w-full mt-auto mb-0 mx-auto min-h-[150px] flex flex-col justify-center bg-gray-100">
        <footer className="w-full my-0 mx-auto min-h-[150px] flex flex-col justify-center bg-gray-100">
          <ul className="flex gap-6 w-full max-w-[767px] mx-auto justify-center items-center my-0 flex-wrap">
            <li className="flex gap-6 flex-wrap">
              <a 
                href="https://instagram.com/brignolieinaudimarconi" 
                target="blank" className="hover:opacity-90">
                  <i className="bi bi-instagram text-xl"></i>
              </a>
            </li>
            <li className="flex gap-6 flex-wrap">
              <a href="https://www.tiktok.com/@brignolieinaudimarconi?_t=8gneya5QVNI&_r=1" target="blank" className="hover:opacity-90">
                <i className="bi bi-tiktok text-xl"></i>
              </a>
            </li>
            <li className="flex gap-6 flex-wrap">
              <a href="https://www.facebook.com/profile.php?id=61552368374097" target="blank" className="hover:opacity-90">
                <i className="bi bi-facebook text-xl"></i>
              </a>
            </li>
            <li className="flex gap-6 flex-wrap">
              <a href="https://www.youtube.com/@i.s.i.s.bemgradiscastaranz9787" target="blank" className="hover:opacity-90">
                <i className="bi bi-youtube text-xl"></i>
              </a>
            </li>
          </ul>
          <div className="flex max-w-[767px] mt-6 mx-auto flex-wrap justify-center items-center">
            <p>&copy; Team Crewtive {year} | all rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  )
}

const date = new Date();
const year = date.getFullYear();