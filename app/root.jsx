import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Nav from "./components/Nav";

import "@fontsource/poppins/100.css";
import "@fontsource/poppins/200.css";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";
import "@fontsource/indie-flower/400.css";

import "./styles/tailwind.css";

export const meta = () => {
  return [
    { title: "Psykologiaurora.fi, Psyykkinen valmennus" },
    { name: "description", content: "Tuen psyykkisenä valmentajana urheilijoiden ja liiketoiminnan ammattilaisten hyvinvointia ja menestystä." },
  ];
};

export const links = () => {
  return [
    { rel: "icon", href: "/favicon.ico" },
  ];
};

export default function App() {
  return (
    <html lang="fi">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="font-poppins antialiased">
        <Nav />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  return (
    <html lang="fi">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="font-poppins antialiased">
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Jotain meni pieleen</h1>
            <p className="text-gray-600">Yritä uudelleen myöhemmin.</p>
          </div>
        </div>
        <Scripts />
      </body>
    </html>
  );
}
