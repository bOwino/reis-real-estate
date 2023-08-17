import Link from "next/link"

export default function Home() {
  return (
    <main>
      <div className='section-one flex flex-col items-center self-stretch py-20 px-10'>
        <div className='text-center'>
          <h2 className='text-4xl font-semibold text-white'>
            Find Your Dream Home
          </h2>
          <p className='mt-8 text-lg text-white'>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </p>
        </div>
        <div className='flex flex-row gap-3 justify-center items-center mt-8 text-lg'>
          <button className='btn px-6 py-2 text-white rounded'>Rent</button>
          <button className='px-6 py-2 bg-white rounded'>Sale</button>
        </div>
        <div className='bg-white py-6 px-12 rounded-lg mt-6'>
          <form className='flex flex-row items-end gap-10'>
            <div className='flex flex-col'>
              <label htmlFor='dropdown' className='text-lg font-semibold'>
                Locations
              </label>
              <select
                name='dropdown'
                className='border-2 border-blue-800 rounded-lg px-2 py-2 focus:outline-none focus:ring-0 focus:ring-blue-800 focus:border-blue-800'
              >
                <option value='option1'>Select your city</option>
                <option value='option1'>Nairobi</option>
                <option value='option1'>Mombasa</option>
                <option value='option1'>Kisumu</option>
              </select>
            </div>
            <div className='flex flex-col'>
              <label htmlFor='dropdown' className='text-lg font-semibold'>
                Property Type
              </label>
              <select
                name='dropdown'
                className='border-2 border-blue-800 rounded-lg px-2 py-2 focus:outline-none focus:ring-0 focus:ring-blue-800 focus:border-blue-800'
              >
                <option value='option1'>Select property type</option>
                <option value='option1'>Apartments</option>
                <option value='option1'>Bungalow</option>
                <option value='option1'>Storey</option>
              </select>
            </div>
            <div className='flex flex-col'>
              <label htmlFor='dropdown' className='text-lg font-semibold'>
                Rent Range
              </label>
              <select
                name='dropdown'
                className='border-2 border-blue-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-0 focus:ring-blue-800 focus:border-blue-800'
              >
                <option value='option1'>Select rent range</option>
                <option value='option1'>Ksh.0 - Ksh.100,000</option>
                <option value='option1'>Ksh.100,001 - Ksh.500,000</option>
                <option value='option1'>Ksh.500,001 - Ksh.1,000,000</option>
              </select>
            </div>
            <button className='btn px-8 py-2 text-white rounded'>Search</button>
          </form>
        </div>
      </div>
    </main>
  )
}
