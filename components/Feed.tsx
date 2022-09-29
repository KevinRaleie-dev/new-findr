import axios from 'axios'
import React from 'react'

import Card from './Card'

type FeedProps = {
    data: any
}

export const Feed: React.FunctionComponent<FeedProps> = ({
    data
}) => {
    return (
        <div className='mb-5'>
            <>
                <div className='mt-5 px-5'>
                    <div className='space-y-3'>
                        <p className='text-xs text-slate-500'>
                            Showing {data?.results} results ({data?.time})
                        </p>
                        <h2 className='font-semibold text-gray-800 text-xl'>
                            {data?.title}
                        </h2>
                    </div>
                    {/* this is going to be mapped over */}
                    <div className='mt-5 flex flex-col-reverse space-y-2'>
                        {
                            data?.bursaryList.map((bursary: any, idx: number) => {
                                return (
                                    <div key={idx}>
                                        <Card
                                            bursaryName={bursary.name}
                                            closingDate={bursary.closing}
                                            applicationLink={bursary.applicationLink}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='mt-10 text-center text-sm'>
                        <p>
                            Made with ❤️ by <span className='underline text-blue-500'><a href="https://linktr.ee/kevinraleie">Kevin Raleie</a></span>
                        </p>
                    </div>
                </div>
            </>
        </div>
    )
}

