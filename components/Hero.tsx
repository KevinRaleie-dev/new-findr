import React from 'react'

export const Hero: React.FunctionComponent = () => {
    return (
        <div className='px-5 mt-5 space-y-10'>
            <p className=" text-purple-900 text-2xl font-bold text-left">
                Let us help you find the perfect bursary
            </p>
            <div>
                {/* search input */}
                <form className='flex flex-col gap-3 justify-between'>
                    <input
                    placeholder='Try searching "September bursaries..."'
                    className=' p-2 border rounded-md outline-none placeholder:text-sm placeholder:font-light'
                    type="text" />
                    <button
                    className='px-3 py-2 rounded-md bg-indigo-500 text-white font-black'
                    >
                        Search
                    </button>
                </form>
                {/* add months slider */}
            </div>
        </div>
    )
}
