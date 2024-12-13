import "./globals.css";
import Nav from "@/components/Nav";
import { Poppins, Indie_Flower } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const poppins = Poppins({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap'
});

const indieFlower = Indie_Flower({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-indie',
  display: 'swap'
})

export const metadata = {
  title: "Psykologiaurora.fi, Psyykkinen valmennus",
  description: "Tuen psyykkisenä valmentajana urheilijoiden ja liiketoiminnan ammattilaisten hyvinvointia ja menestystä.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${poppins.className} ${indieFlower.variable} antialiased`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
