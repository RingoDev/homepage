import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import "../styles/blue_theme.css";

import type { AppProps } from "next/app";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Navbar from "../lib/components/homepage/navbar";
import Portfolio from "../lib/components/homepage/portfolio";
import Header from "../lib/components/homepage/header";
import Footer from "../lib/components/homepage/footer";
import Contact from "../lib/components/homepage/contact";
import Head from "../lib/components/homepage/head";
import About from "../lib/components/homepage/about";
import { useStoryblokBridge } from "@storyblok/js";

storyblokInit({
  components: {
    head: Head,
    navbar: Navbar,
    header: Header,
    portfolio: Portfolio,
    about: About,
    contact: Contact,
    footer: Footer,
  },

  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
});

function MyApp({ Component, pageProps }: AppProps) {
  useStoryblokBridge("q", () => {}, {
    apiOptions: { accessToken: process.env.STORYBLOK_TOKEN },
  });
  return <Component {...pageProps} />;
}

export default MyApp;
