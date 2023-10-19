export default function Footer() {
  return (
    <footer className="w-full mt-auto mb-0 mx-auto min-h-[150px] flex flex-col justify-center bg-gray-100">
      <ul className="flex gap-6 w-full max-w-[767px] mx-auto justify-center items-center my-0 flex-wrap">
        <li className="mx-2">
          <a 
            href="https://instagram.com/brignolieinaudimarconi" 
            target="blank" className="hover:opacity-90">
              <i className="bi bi-instagram text-xl"></i>
          </a>
        </li>
        <li className="flex gap-6 flex-wrap">
          <a href="" target="blank" className="hover:opacity-90">
            <i className="bi bi-tiktok text-xl"></i>
          </a>
        </li>
        <li className="flex gap-6 flex-wrap">
          <a href="" target="blank" className="hover:opacity-90">
            <i className="bi bi-facebook text-xl"></i>
          </a>
        </li>
        <li className="flex gap-6 flex-wrap">
          <a href="" target="blank" className="hover:opacity-90">
            <i className="bi bi-youtube text-xl"></i>
          </a>
        </li>
      </ul>
      <div className="flex max-w-[767px] mt-6 mx-auto flex-wrap justify-center items-center">
        <p>&copy; Team Crewtive {year} | all rights reserved.</p>
      </div>
    </footer>
  )
}

const date = new Date();
const year = date.getFullYear();