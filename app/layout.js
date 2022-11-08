import '../styles/globals.css';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Next.js App Directory Playground</title>
        <meta
          name="description"
          content="Next.js 13 App Directory Playground"
          key="desc"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
