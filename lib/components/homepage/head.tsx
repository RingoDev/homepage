import { default as NextHead } from "next/head";

import React from "react";
import { HeadComponent } from "../../types/homepage/storyblok-components";

const Head = ({ title, description, author }: HeadComponent) => {
  return (
    <>
      <NextHead>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content={description} />
        <meta name="author" content={author} />

        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#2c3e50" />
        <meta
          name="msapplication-TileImage"
          content="img/logo/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#2c3e50" />

        <title>{title}</title>
      </NextHead>
    </>
  );
};

export default Head;
