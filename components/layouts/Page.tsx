import React, { ReactNode } from "react";
import Head from "next/head";

type Props = {
  title: string;
  children?: ReactNode;
  noIndex?: boolean;
  rssLink?: boolean;
};

const Page = ({ title, children }: Props) => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <title>{title}</title>
      </Head>
      <div>{children}</div>
    </>
  );
};

export default Page;
