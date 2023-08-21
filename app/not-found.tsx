import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "Page Not Found",
}
const NotFound = () => {
  return (
    <div className='fixed top-0 left-0 h-screen w-screen flex justify-center items-center'>
      <h3 className='text-2xl'> 404 | Page Not Found</h3>
    </div>
  )
}

export default NotFound
