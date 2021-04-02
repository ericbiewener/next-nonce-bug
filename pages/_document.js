import Document, {
  Head,
  Html,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import React from "react";
import { ServerResponse } from "http";

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    return Document.getInitialProps(ctx);
  }

  render() {
    const nonce = '12345';
    const csp = `style-src 'nonce-${nonce}'; script-src 'nonce-${nonce}' 'unsafe-eval'`

    return (
      <Html>
        <Head nonce={nonce}>
           <meta httpEquiv="Content-Security-Policy" content={csp}/>
        </Head>
        <body>
          <Main />
          <NextScript nonce={nonce} />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
