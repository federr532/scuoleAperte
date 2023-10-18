export default function Footer() {
  return (
    <footer className="w-full mt-auto mb-0 mx-auto min-h-[150px] flex flex-col justify-center bg-gray-100">
      <div className="flex max-w-[767px] mx-auto flex-wrap justify-center items-center">
        <p>&copy; Team Crewtive {year} | all rights reserved.</p>
      </div>
    </footer>
  )
}

const date = new Date();
const year = date.getFullYear();