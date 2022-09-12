import React from 'react'
import Link from 'next/link'
import { FiGithub } from 'react-icons/fi'


export const Nav: React.FunctionComponent = () => {
    return (
        <nav className="px-5 py-3">
            <div className="flex justify-between items-center">
                <div>
                    <Link
                        href="/" passHref
                    >
                        <a>
                            <h1 className="text-3xl font-black text-gray-800">
                                findr.
                            </h1>
                        </a>
                    </Link>
                </div>
                <div className='p-2 border rounded-md'>
                    <Link href="#">
                        <FiGithub />
                    </Link>
                </div>
            </div>
        </nav>
    )
}
