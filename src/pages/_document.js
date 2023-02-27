import { Html, Head, Main, NextScript } from 'next/document'

const MyDocument = () => {
    return (
        <Html>
            <Head />
            <body
                style={{ 
                    margin: 0, 
                    padding: 0, 
                    boxSizing: 'border-box', 
                    fontFamily: 'sans-serif', 
                    backgroundColor: '#171923',
                    color: '#fff',
                }}
            >
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default MyDocument;