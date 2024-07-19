import { LayoutRouter } from "next/dist/server/app-render/entry-base"
import AboutUs from "./about-us/page"
import Navigation from "../components/navigation";
import { Metadata } from "next";

export const metadata = {
  title :{
    template: "%s | Next Movies",
    default: "Loading...",
  },
  description: 'The best movies on the best framework',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
