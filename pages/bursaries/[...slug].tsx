import axios from "axios";
import { GetServerSideProps } from "next";
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FiArrowLeft, FiShare2 } from 'react-icons/fi';
import useSwr from 'swr';
import { Feed } from "../../components/Feed";
import { Nav } from "../../components/Nav";

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

    return {
        props: {
            slug
        }
    }
}

type BursaryProps = {
    slug: string
}

const Bursary = ({ slug }: BursaryProps) => {
    const router = useRouter()
    const { data, error } = useSwr(slug, handler)

    const shareHandler = async () => {
        await navigator.share({
            url: `https://bursary-findr.vercel.app${router.asPath}`,
            title: data?.title,
            text: `Find bursaries closing in the month of ${slug}`
        })
    }

    if (!error && !data) {
        return (
            <div className="mt-10 text-center">
                <p>
                    Fetching bursaries over the interwebs...
                </p>
            </div>
        )
    }

    if (error) {
        return <>{error}</>
    }

    return (
        <>
            <div>
                <Head>
                    <title>
                        findr. - {data?.title}
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
                    <div>
                        {
                            data?.message ? (
                                <p className="text-center mt-10 font-medium">
                                    😬 Looks like bursaries for this month are not available yet
                                </p>
                            ) : (
                                <Feed
                                    data={data}
                                />
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bursary