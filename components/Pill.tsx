import React from 'react'
import Link from 'next/link'

type PillComponentProps = {
    month: string
    index: number
}

export const Pill: React.FunctionComponent<PillComponentProps> = ({
    month,
    index
}) => {
    return (
        <>
            <div>
                <Link
                    href={`/bursaries/${month}`} passHref>
                    <button
                        disabled={index < new Date().getMonth()}
                        className="disabled:cursor-not-allowed disabled:opacity-30 px-5 py-2 bg-blue-100 flex rounded-md active:scale-90 transform-gpu transition-all"
                    >
                        <p
                            className='text-blue-900 font-medium text-sm'>
                            {month}
                        </p>
                    </button>
                </Link>
            </div>

        </>
    )
}
