import { LayoutRouter } from "next/dist/server/app-render/entry-base"

export default function RootLayout({ children }) {
  return (
    <div>
		{children}
		&copy; Next JS is great!
	</div>
  );
}
