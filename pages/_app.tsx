// add bootstrap css
import 'bootstrap/dist/css/bootstrap.css'

import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {storyblokInit, apiPlugin} from "@storyblok/react";
import Navbar from "../lib/components/navbar";
import Portfolio from "../lib/components/portfolio";
import Header from "../lib/components/header";
import Footer from "../lib/components/footer";
import Contact from "../lib/components/contact";

storyblokInit({
    components: {
        navbar: Navbar,
        header: Header,
        portfolio: Portfolio,
        contact: Contact,
        footer: Footer
    },

    accessToken: process.env.STORYBLOK_TOKEN,
    use: [apiPlugin]
});


function MyApp({Component, pageProps}: AppProps) {
    return <Component {...pageProps} />
}

export default MyApp
