import { Montserrat, Nunito_Sans } from "next/font/google";

import "../styles/globals.css";

const body = Montserrat({ subsets: ["latin"] });
const heading = Nunito_Sans({
  subsets: ["latin"],
  weight: "900",
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${body.style.fontFamily};
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        font-nunito-sans {
          font-family: ${heading.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
