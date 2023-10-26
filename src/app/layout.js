import './globals.css';

export const metadata = {
  title: 'IJCode',
  description: 'Desenvolvimento de Sites',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;700&family=Nunito:wght@200;400&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="./img/logo.png" type="image/x-icon"></link>
        <link rel="icon" href="./app/favicon.ico" type="image/x-icon"></link>
        <title>IJCode - Tecnologia</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
