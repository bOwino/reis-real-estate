import Link from "next/link"
import Image from "next/image"
import { BsHouseDoor, BsHouseLock, BsHouseCheck } from "react-icons/bs"
import { MdOutlineDirectionsCar } from "react-icons/md"
import { PiBathtub } from "react-icons/pi"
import { BiExpand } from "react-icons/bi"
import { FiShare2, FiHeart, FiPlus } from "react-icons/fi"
import {
  FaFacebookF,
  FaDribbble,
  FaLinkedinIn,
  FaInstagram,
  FaBehance,
} from "react-icons/fa"
import { TfiLocationPin } from "react-icons/tfi"
import house10 from "../public/images/house10.jpg"
import house11 from "../public/images/house11.jpg"
import house12 from "../public/images/house12.jpg"
import profile from "../public/images/profile.jpg"
import logo from "../public/images/logo.png"

export default function Home() {
  return (
    <main>
      <div className='section-one flex flex-col items-center self-stretch py-20 px-4'>
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
          <button className='px-6 py-2 bg-white rounded hover:bg-gray-200'>
            Sale
          </button>
        </div>
        <div className='bg-white py-6 px-12 rounded-lg mt-6'>
          <form className='flex flex-row items-end gap-10'>
            <div className='flex flex-col'>
              <label htmlFor='dropdown' className='text-lg font-semibold'>
                Locations
              </label>
              <select
                name='dropdown'
                className='border-2 border-gray-400 rounded-lg px-2 py-2 focus:outline-none focus:ring-0 focus:ring-blue-800 focus:border-blue-800'
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
                className='border-2 border-gray-400 rounded-lg px-2 py-2 focus:outline-none focus:ring-0 focus:ring-blue-800 focus:border-blue-800'
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
                className='border-2 border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-0 focus:ring-blue-800 focus:border-blue-800'
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

      <div className='section-two py-10 px-5'>
        <div className='text-center'>
          <h3 className='text-3xl font-bold text-gray-700'>
            Properties By Area
          </h3>
          <p className='text-lg text-gray-700 py-4'>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </p>
        </div>
        <div className='flex flex-col items-center'>
          <div className='grid grid-cols-3 gap-4 w-11/12'>
            <div className='card card1 h-48 p-4 rounded'>
              <div className='card-details'>
                <h3 className='font-bold text-xl text-white'>Centerville</h3>
                <p className='text-white font-normal'>25 listings</p>
              </div>
            </div>
            <div className='card card2 h-48 p-4 rounded'>
              <div className='card-details'>
                <h3 className='font-bold text-xl text-white'>Nairobi</h3>
                <p className='text-white font-normal'>46 listings</p>
              </div>
            </div>
            <div className='card card3 h-48 p-4 rounded'>
              <div className='card-details'>
                <h3 className='font-bold text-xl text-white'>Sydney</h3>
                <p className='text-white font-normal'>31 listings</p>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-4 mt-4 w-11/12'>
            <div className='card card4 h-48 p-4 rounded'>
              <div className='card-details'>
                <h3 className='font-bold text-xl text-white'>Hong Kong</h3>
                <p className='text-white font-normal'>57 listings</p>
              </div>
            </div>
            <div className='card card5 h-48 p-4 rounded'>
              <div className='card-details'>
                <h3 className='font-bold text-xl text-white'>New York</h3>
                <p className='text-white font-normal'>74 listings</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='section-three py-10 px-5'>
        <div className='text-center pb-10'>
          <h3 className='text-3xl font-bold text-gray-700'>
            Properties By Area
          </h3>
          <p className='text-lg text-gray-700 py-4'>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </p>
        </div>
        <div className='flex justify-center items-center content-center gap-4 self-stretch flex-wrap'>
          <div className='flex flex-col p-4 min min-w-[300px] max-w-[340px] bg-white rounded'>
            <BsHouseDoor className='h-14 w-14 my-3 text-gray-700' />
            <h3 className='font-semibold text-xl text-gray-700'>
              Sell your home
            </h3>
            <p className='text-gray-600'>
              We do a free evaluation to be sure you want to start selling.
            </p>
            <Link href='/' className='pt-5 text-blue-500 hover:underline'>
              Read more
            </Link>
          </div>
          <div className='flex flex-col p-4 min min-w-[300px] max-w-[340px] bg-white rounded'>
            <BsHouseLock className='h-14 w-14 my-3 text-gray-700' />
            <h3 className='font-semibold text-xl text-gray-700'>
              Rent your home
            </h3>
            <p className='text-gray-600'>
              We do a free evaluation to be sure you want to start selling.
            </p>
            <Link href='/' className='pt-5 text-blue-500 hover:underline'>
              Read more
            </Link>
          </div>
          <div className='flex flex-col p-4 min min-w-[300px] max-w-[340px] bg-white rounded'>
            <BsHouseCheck className='h-14 w-14 my-3 text-gray-700' />
            <h3 className='font-semibold text-xl text-gray-700'>Buy a home</h3>
            <p className='text-gray-600'>
              We do a free evaluation to be sure you want to start selling.
            </p>
            <Link href='/' className='pt-5 text-blue-500 hover:underline'>
              Read more
            </Link>
          </div>
        </div>
      </div>

      <div className='section-four py-10 px-5'>
        <div className='text-center'>
          <h3 className='text-3xl font-bold text-gray-700'>
            Latest Properties for Rent
          </h3>
          <p className='text-lg text-gray-700 py-4 self-stretch'>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </p>
        </div>
        <div className='flex justify-center items-center content-center gap-4 self-stretch flex-wrap p-0 md:p-4'>
          <div className='flex flex-col border-2 rounded-xl items-start gap-2 flex-1 min-w-[250px] max-w-[350px] h-[390px] p-15 md:p-2 hover:border-blue-600 hover:cursor-pointer'>
            <Image
              src={house10}
              alt='house'
              width={350}
              height={100}
              className='h-48 flex-shrink-0 self-stretch rounded-md'
            />
            <h3 className='text-lg font-medium'>
              92 ALLIUM PLACE, ORLANDO FL 32827
            </h3>
            <p className='text-lg font-medium text-blue-600'>$ 590,693</p>
            <div className='flex flex-row items-center gap-6 text-gray-600'>
              <div className='flex flex-row items-center gap-2'>
                <MdOutlineDirectionsCar className='w-7 h-7' />
                <span>4</span>
              </div>
              <div className='flex flex-row items-center gap-2'>
                <PiBathtub className='w-7 h-7' />
                <span>4</span>
              </div>
              <div className='flex flex-row items-center gap-2'>
                <BiExpand className='w-5 h-5' />
                <span>2,096.00 ft</span>
              </div>
            </div>
            <div className='flex flex-row items-center w-full justify-between'>
              <div className='flex flex-row items-center gap-3'>
                <Image
                  src={profile}
                  width={50}
                  height={50}
                  alt='profile'
                  className='rounded-full w-11 h-10'
                />
                <h3 className='font-medium'>Jenny Wilson</h3>
              </div>
              <div className='flex flex-row gap-2 items-center'>
                <div className='bg-blue-100 p-1 rounded-md'>
                  <FiShare2 className='w-5 h-5' />
                </div>
                <div className='bg-blue-100 p-1 rounded-md'>
                  <FiHeart className='w-5 h-5' />
                </div>
                <div className='bg-blue-100 p-1 rounded-md'>
                  <FiPlus className='w-5 h-5' />
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col border-2 rounded-xl items-start gap-2 flex-1 min-w-[250px] max-w-[350px] h-[390px] p-15 md:p-2 hover:border-blue-600 hover:cursor-pointer'>
            <Image
              src={house11}
              alt='house'
              width={350}
              height={100}
              className='h-48 flex-shrink-0 self-stretch rounded-md'
            />
            <h3 className='text-lg font-medium'>
              92 ALLIUM PLACE, ORLANDO FL 32827
            </h3>
            <p className='text-lg font-medium text-blue-600'>$ 590,693</p>
            <div className='flex flex-row items-center gap-6 text-gray-600'>
              <div className='flex flex-row items-center gap-2'>
                <MdOutlineDirectionsCar className='w-7 h-7' />
                <span>4</span>
              </div>
              <div className='flex flex-row items-center gap-2'>
                <PiBathtub className='w-7 h-7' />
                <span>4</span>
              </div>
              <div className='flex flex-row items-center gap-2'>
                <BiExpand className='w-5 h-5' />
                <span>2,096.00 ft</span>
              </div>
            </div>
            <div className='flex flex-row items-center w-full justify-between'>
              <div className='flex flex-row items-center gap-3'>
                <Image
                  src={profile}
                  width={50}
                  height={50}
                  alt='profile'
                  className='rounded-full w-11 h-10'
                />
                <h3 className='font-medium'>Jenny Wilson</h3>
              </div>
              <div className='flex flex-row gap-2 items-center'>
                <div className='bg-blue-100 p-1 rounded-md'>
                  <FiShare2 className='w-5 h-5' />
                </div>
                <div className='bg-blue-100 p-1 rounded-md'>
                  <FiHeart className='w-5 h-5' />
                </div>
                <div className='bg-blue-100 p-1 rounded-md'>
                  <FiPlus className='w-5 h-5' />
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col border-2 rounded-xl items-start gap-2 flex-1 min-w-[250px] max-w-[350px] h-[390px] p-15 md:p-2 hover:border-blue-600 hover:cursor-pointer'>
            <Image
              src={house12}
              alt='house'
              width={350}
              height={100}
              className='h-48 flex-shrink-0 self-stretch rounded-md'
            />
            <h3 className='text-lg font-medium'>
              92 ALLIUM PLACE, ORLANDO FL 32827
            </h3>
            <p className='text-lg font-medium text-blue-600'>$ 590,693</p>
            <div className='flex flex-row items-center gap-6 text-gray-600'>
              <div className='flex flex-row items-center gap-2'>
                <MdOutlineDirectionsCar className='w-7 h-7' />
                <span>4</span>
              </div>
              <div className='flex flex-row items-center gap-2'>
                <PiBathtub className='w-7 h-7' />
                <span>4</span>
              </div>
              <div className='flex flex-row items-center gap-2'>
                <BiExpand className='w-5 h-5' />
                <span>2,096.00 ft</span>
              </div>
            </div>
            <div className='flex flex-row items-center w-full justify-between'>
              <div className='flex flex-row items-center gap-3'>
                <Image
                  src={profile}
                  width={50}
                  height={50}
                  alt='profile'
                  className='rounded-full w-11 h-10'
                />
                <h3 className='font-medium'>Jenny Wilson</h3>
              </div>
              <div className='flex flex-row gap-2 items-center'>
                <div className='bg-blue-100 p-1 rounded-md'>
                  <FiShare2 className='w-5 h-5' />
                </div>
                <div className='bg-blue-100 p-1 rounded-md'>
                  <FiHeart className='w-5 h-5' />
                </div>
                <div className='bg-blue-100 p-1 rounded-md'>
                  <FiPlus className='w-5 h-5' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center mt-3'>
          <button className='btn px-8 py-2 text-white rounded'>
            Load more
          </button>
        </div>
      </div>

      <div className='section-five py-10 px-5'>
        <div className='text-center'>
          <h3 className='text-3xl font-bold text-gray-700'>
            Latest Properties for Rent
          </h3>
          <p className='text-lg text-gray-700 py-4 self-stretch'>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </p>
        </div>
        <div className='flex justify-center items-start content-start gap-4 self-stretch flex-wrap'>
          <div className='card-two card7 flex flex-col items-center rounded-md justify-end gap-4 flex-1 min-w-[355px] max-w-[370px] h-[426px] p-4'>
            <div className='card-two-details flex justify-center items-end gap-6 h-24 flex-shrink-0 self-stretch py-2'>
              <div className='flex flex-row items-center gap-3 text-white'>
                <TfiLocationPin className='w-5 h-5 text-white' />
                <span>Kisumu</span>
              </div>
              <div className='flex flex-row items-center gap-3 text-white'>
                <BiExpand className='w-5 h-5' />
                <span>12000</span>
              </div>
            </div>
          </div>
          <div className='card-two card8 flex flex-col items-center rounded-md justify-end gap-4 flex-1 min-w-[355px] max-w-[370px] h-[426px] p-4'>
            <div className='card-two-details flex justify-center items-end gap-6 h-24 flex-shrink-0 self-stretch py-2'>
              <div className='flex flex-row items-center gap-3 text-white'>
                <TfiLocationPin className='w-5 h-5 text-white' />
                <span>Nairobi</span>
              </div>
              <div className='flex flex-row items-center gap-3 text-white'>
                <BiExpand className='w-5 h-5' />
                <span>12000</span>
              </div>
            </div>
          </div>
          <div className='card-two card9 flex flex-col items-center rounded-md justify-end gap-4 flex-1 min-w-[355px] max-w-[370px] h-[426px] p-4'>
            <div className='card-two-details flex justify-center items-end gap-6 h-24 flex-shrink-0 self-stretch py-2'>
              <div className='flex flex-row items-center gap-3 text-white'>
                <TfiLocationPin className='w-5 h-5 text-white' />
                <span>Washington</span>
              </div>
              <div className='flex flex-row items-center gap-3 text-white'>
                <BiExpand className='w-5 h-5' />
                <span>12000</span>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center mt-3'>
          <button className='btn px-8 py-2 text-white rounded'>
            Load more
          </button>
        </div>
      </div>

      <div className='section-six py-6 px-5 flex justify-center items-start content-start gap-39 self-stretch flex-wrap'>
        <div className='flex flex-col items-center gap-2 flex-1 max-w-[900px] p-0 md:p-10'>
          <div className='text-center'>
            <h3 className='text-3xl font-bold text-gray-700'>Contact us</h3>
            <p className='text-lg text-gray-700 py-4 self-stretch'>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </p>
          </div>
          <div className='flex flex-col gap-3 self-stretch p-28 md:p-5 rounded-md bg-white shadow-md'>
            <h3 className='font-semibold text-lg text-gray-900'>
              Enquiry Form
            </h3>
            <p className='text-base text-gray-700'>
              Are you looking for details about a certain property? Ask us a
              question using the form below.
            </p>
            <form className='flex flex-col gap-4'>
              <div className='flex flex-row gap-2 justify-between'>
                <input
                  type='text'
                  placeholder='First name'
                  className='p-2 w-full border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-0 focus:ring-blue-600 focus:border-blue-600'
                />
                <input
                  type='text'
                  placeholder='Last name'
                  className='p-2 w-full border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-0 focus:ring-blue-600 focus:border-blue-600'
                />
              </div>
              <input
                type='email'
                placeholder='email'
                className='p-2 border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-0 focus:ring-blue-600 focus:border-blue-600'
              />
              <textarea
                placeholder='comments or questions'
                className='p-2 h border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-0 focus:ring-blue-600 focus:border-blue-600'
              />
              <div className='flex justify-center mt-3'>
                <button className='btn px-10 py-2 text-white rounded'>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className='section-seven flex items-start self-stretch p-10'>
        <div className='flex justify-between items-start flex-1'>
          <div className='flex flex-col items-start gap-2 w-312 h-300'>
            <Image src={logo} width={100} height={100} alt='Company Logo' />
            <h3 className='font-semibold text-lg text-gray-800'>Contact Us</h3>
            <p className='text-gray-700'>Call : +123 400 123</p>
            <p className='text-gray-700'>
              Praesent nulla massa, hendrerit vestibulum gravida in, feugiat
              auctor felis.
            </p>
            <p className='text-gray-700'>Email: example@mail.com</p>
            <div className='flex flex-row gap-2 items-center'>
              <Link
                href='/'
                className='bg-blue-100 text-blue-700 p-3 rounded-md hover:bg-blue-200'
              >
                <FaFacebookF className='w-5 h-5' />
              </Link>
              <Link
                href='/'
                className='bg-blue-100 text-blue-700 p-3 rounded-md hover:bg-blue-200'
              >
                <FaDribbble className='w-5 h-5' />
              </Link>
              <Link
                href='/'
                className='bg-blue-100 text-blue-700 p-3 rounded-md hover:bg-blue-200'
              >
                <FaLinkedinIn className='w-5 h-5' />
              </Link>
              <Link
                href='/'
                className='bg-blue-100 text-blue-700 p-3 rounded-md hover:bg-blue-200'
              >
                <FaInstagram className='w-5 h-5' />
              </Link>
              <Link
                href='/'
                className='bg-blue-100 text-blue-700 p-3 rounded-md hover:bg-blue-200'
              >
                <FaBehance className='w-5 h-5' />
              </Link>
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <h3 className='font-semibold text-gray-800 text-lg'>Features</h3>
            <div className='text-gray-700 flex flex-col gap-3'>
              <Link href='/' className='hover:underline'>
                Home
              </Link>
              <Link href='/' className='hover:underline'>
                Become a Host
              </Link>
              <Link href='/' className='hover:underline'>
                Pricing
              </Link>
              <Link href='/' className='hover:underline'>
                Blog
              </Link>
              <Link href='/' className='hover:underline'>
                Contact
              </Link>
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <h3 className='font-semibold text-gray-800 text-lg'>Company</h3>
            <div className='text-gray-700 flex flex-col gap-3'>
              <Link href='/' className='hover:underline'>
                About us
              </Link>
              <Link href='/' className='hover:underline'>
                Press
              </Link>
              <Link href='/' className='hover:underline'>
                Contacts
              </Link>
              <Link href='/' className='hover:underline'>
                Careers
              </Link>
              <Link href='/' className='hover:underline'>
                Blog
              </Link>
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <h3 className='font-semibold text-gray-800 text-lg'>
              Team & Policies
            </h3>
            <div className='text-gray-700 flex flex-col gap-3'>
              <Link href='/' className='hover:underline'>
                Terms of service
              </Link>
              <Link href='/' className='hover:underline'>
                Privacy & Policy
              </Link>
              <Link href='/' className='hover:underline'>
                Security
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
