import Head from 'next/head';
export default ({ children }) => (
    <div>
    <Head>
       <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
     </div>
);