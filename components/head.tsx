import * as React from 'react';
import Head from 'next/head';

interface Props {
  title: string;
  url: string;
}

export default ({ title, url }: Props): JSX.Element => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={'ムスカリサーバーのウェブサイト'} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={'https://eighty88.github.io/MuscariWeb/images/thumbnails/thumbnail.png'} />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@taisa_ism" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={'ムスカリサーバーのウェブサイト'} />
      <meta name="twitter:image" content={'https://eighty88.github.io/MuscariWeb/images/thumbnails/thumbnail.png'} />
      <link rel="canonical" href={url} />
      <link rel="shortcut icon" href={'https://eighty88.github.io/MuscariWeb/images/icon/favicon/favicon.ico'} />
      <link rel="apple-touch-icon" href={'https://eighty88.github.io/MuscariWeb/images/icon/apple/apple-icon.png'} />
    </Head>
  );
};