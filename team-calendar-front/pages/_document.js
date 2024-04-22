import {basePath} from "@/next.config";
import {Head, Html, Main, NextScript} from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/svg+xml" href={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/brand-logos/favicon.ico`} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
