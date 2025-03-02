import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GlobalStateAPI from "../components/contextAPI";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata = {
	title: "Pokemon",
	description: "Project Pokemon",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-blue-400`}
			>
				<GlobalStateAPI>{children}</GlobalStateAPI>
			</body>
		</html>
	);
}
