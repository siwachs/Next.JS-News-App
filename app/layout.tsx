import "../styles/globals.css";

import Header from "./Components/Header";
import Providers from "./Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <main className="max-w-6xl mx-auto">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
