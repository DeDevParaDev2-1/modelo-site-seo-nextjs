import Head from 'next/head'
export default function Seo(props) {
    return (
      <>
        <Head>
          <title>{props.titleHead}</title>
          <meta name="description" content={props.descriptionHead} />
          <meta name="author" content={props.authorHead} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
      </>
    )
  }
  