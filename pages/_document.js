import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html>
            <Head>
            <meta 
               charSet='utf-8' />
              <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
              />
              <meta 
                name="X-UA-Compatible" 
                content="IE=Edge" />
                <meta 
               name="keywords" 
               content="tollgates,car parking,QR code payments,digital, payments" />
            <meta 
              name="author" 
              content="James Abiagam" />
            <meta name="revisit-after" 
                  content="1day" /> 
            <link
                    href="https://fonts.googleapis.com/css?family=Maven+Pro:400,500,700,900&display=swap"
                    rel="stylesheet"/>
             <link 
                    href="https://fonts.googleapis.com/css?family=Comfortaa:300,400,500,600,700&display=swap" 
                    rel="stylesheet"/>
            <link 
                    rel="stylesheet" 
                    href="/static/css/bootstrap.min.css" />
            <link 
                    rel="stylesheet" 
                    href="/static/css/style.css" />
                  </Head>
            <body>
            <Main />
             <NextScript />
            </body>
            <style global jsx>{`
              body {
                font-family: "Maven Pro", sans-serif !important;
              }
              h1,h2,h3,h4,h5,h6{
                font-family: "Comfortaa", cursive, sans-serif !important;
              }
            `}</style>
            </Html>
        );
    }
}
export default MyDocument;