import { GetServerSideProps } from "next"
import axios from "axios"
import { Nav } from "../../components/Nav";
import { Feed } from "../../components/Feed";
import Head from 'next/head'
import { useRouter } from 'next/router'

import { FiArrowLeft, FiShare2 } from 'react-icons/fi'

async function handler(month: string) {
    try {
        const url = process.env.NEXT_PUBLIC_SERVER_URL
        const response = await axios.get(`${url}/${month}`);

        return response.data
    } catch (error) {
        return error
    }
}

export const getServerSideProps: GetServerSideProps = async (context) => {

    const slug = context.params?.slug

    const data = await handler(String(slug))

    if (data?.response?.data?.success === false) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            data,
            slug
        }
    }
}

type BursaryProps = {
    data: any,
    slug: string
}

const Bursary = ({ data, slug }: BursaryProps) => {
    const router = useRouter()

    console.log(router.asPath)

    const shareHandler = async () => {
        await navigator.share({
            url: `https://bursary-findr.vercel.com${router.asPath}`,
            title: data.title,
            text: `Find bursaries closing in the month of ${slug}`
        })
    }

    return (
        <div>
            <Head>
                <title>
                    findr. - {data.title}
                </title>
            </Head>
            <header
                className="top-0 sticky z-10 bg-white"
            >
                <Nav />
            </header>
            <div>
                <div className="flex space-x-3 px-5 items-center">
                    <div
                        onClick={() => router.back()}
                        className="p-2 border rounded-md">
                        <FiArrowLeft />
                    </div>
                    <div 
                    onClick={shareHandler}
                    className="p-2 border rounded-md">
                        <FiShare2 />
                    </div>
                </div>
                <Feed
                    data={data}
                />
            </div>
        </div>
    )
}

export default Bursary