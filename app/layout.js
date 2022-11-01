import Header from '../components/Header';
import '../styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Phone Details</title>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
