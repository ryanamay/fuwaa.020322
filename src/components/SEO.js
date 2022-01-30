import Head from 'next/head';

export default function SEO({title, desc, path}) {
    return(
        <Head> 
            <title>{title} - Nafu</title>
        </Head>
    )
}