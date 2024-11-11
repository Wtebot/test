import type { Metadata } from "next";
import "./globals.css";
import UserProvider from "./context/user";
import AllOverlays from "./components/AllOverlays";

export const metadata: Metadata = {
  title: "WTE Bot",
  description: "WTE Bot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <UserProvider>
        <body>
          <AllOverlays />
          {children}
        </body>
        </UserProvider>
    </html>
  );
}
