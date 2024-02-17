import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import Navbar from "./components/navigation/navbar";
import FooterBar from "./components/navigation/footer";
import Providers from "./_providers/providers";
import ParticlesBackground from "./components/particlesBackground";

const ubuntu= Lato({ subsets: ["latin"], weight: "700" });

export const metadata: Metadata = {
  title: "Magical Tux",
  description: "OP's #1 Cat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <div className="flex flex-col h-screen justify-between">
          <Providers>
              <Navbar/>
              <ParticlesBackground/>
              <Toaster position="bottom-right"
                toastOptions={{
                  style: {
                    padding: '40px',
                    background: '#000000',
                    color: "#FFFFFF"
                  }, 
                  success: {
                    duration: 4000
                  }
                  
                }}/>
                {children}
              <FooterBar/>
        </Providers>
        </div>
        </body>
    </html>
  );
}
