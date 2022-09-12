import { FiDownload } from 'react-icons/fi'
import { MONTHS } from '../constants';

export type CardComponentProps = {
    bursaryName: string;
    closingDate: string;
    link?: string;
    applicationLink: string;
}

const Card: React.FunctionComponent<CardComponentProps> = ({
    bursaryName,
    closingDate,
    applicationLink
}) => {
    const isClosed = () => {
        const dateFromServer = parseInt(closingDate.split(" ")[0])
        const monthFromServer = closingDate.split(" ")[1];

        const dayOfTheMonth = new Date().getDate()
        const getMonth = new Date().getMonth()
        const currentMonth = MONTHS[getMonth]

        if (dayOfTheMonth > dateFromServer && currentMonth === monthFromServer) return true

        return false
    }
    return (
        <div
            className={`border-2 border-black shadow-md rounded-lg p-5`}
        >
            <div className='space-y-5'>
                <div className="flex justify-between items-center">
                    <p className='text-xs font-light text-slate-400'>
                        {closingDate}
                    </p>
                    <div>
                        {
                            isClosed() ? null : (
                                <div className='p-2 border rounded-md'>
                                    <FiDownload />
                                </div>
                            )
                        }
                    </div>
                </div>
                {
                    closingDate.includes("extension") && (
                        <div className="bg-red-100 justify-center flex w-20 p-1 rounded-sm">
                            <p className={`text-xs font-black text-red-900`}>
                                Extension
                            </p>
                        </div>
                    )
                }
                <h3 className='text-2xl font-black text-gray-800'>
                    {bursaryName}
                </h3>
                <div>
                    {
                        isClosed() ? (
                            <p className="text-red-500 font-medium">
                                Closed ❌
                            </p>
                        ) : (
                            <a
                                className={`px-3 py-2 text-blue-900 font-medium text-sm rounded-md bg-blue-100`}
                                href={applicationLink}>
                                Apply now
                            </a>
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default Card