import type { NextPage } from 'next'
import { Nav } from '../components/Nav'
import { Pill } from '../components/Pill'
import Head from 'next/head'
import { MONTHS } from '../constants'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>findr.</title>
      </Head>
      <header className='top-0 sticky z-10 bg-white'>
        <Nav />
      </header>
      <main>
        <div className='px-5 mt-10 space-y-5'>
          <p className=" text-purple-900 text-3xl font-bold text-left">
            Let Us Help You Find The Perfect <span className='text-[#66ceca]'>Bursary For You</span>
          </p>
          <p className='text-lg text-[#66ceca] font-medium'>
            All new look and feel with new features allowing you to share links, save bursaries and directly apply to bursars without the middleman.
          </p>
          <p className="text-lg text-[#66ceca] font-medium">
            Click on any of the months on the month slider below to filter and search for bursaries
          </p>
        </div>
        <div className='flex flex-row overflow-x-scroll space-x-3 px-5 mt-5'>
          {MONTHS.map((item, idx) => {
            return (
              <div                   
              key={idx}>
                <Pill
                  index={idx}
                  month={item}
                />
              </div>
            )
          })}
        </div>
      </main>
    </>
  )
}

export default Home
