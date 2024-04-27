import parse from 'html-react-parser';
import Head from 'next/head';
import { useAppContext } from './contexts/appContext';

export const Meta = () => {
	const { publication } = useAppContext();
	const { metaTags, favicon } = publication;
	const defaultFavicons = (
		<>
			<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
			<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000000" />
			<meta name="msapplication-TileColor" content="#000000" />
			<meta name="theme-color" content="#000" />
		</>
	);

	return (
		<Head>
			{favicon ? <link rel="icon" type="image/png" href={favicon} /> : defaultFavicons}
			<meta name="msapplication-config" content="/favicon/browserconfig.xml" />
			<link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wdth,wght@0,75..100,400..700;1,75..100,400..700&display=swap"
            rel="stylesheet"/>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"/>
			{metaTags && parse(metaTags)}
		</Head>
	);
};
