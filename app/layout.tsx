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
    <html lang="en" className="scroll-smooth" >
      <body className={ubuntu.className}>
      <Providers>
        <div id="home" className="flex flex-col min-h-screen justify-between">
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
        </div>
        </Providers>
        </body>
    </html>
  );
}
