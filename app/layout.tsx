import type { Metadata } from "next";
import "@/app/globals.css";
import { ThemeProvider } from "@/providers/theme";
import { Toaster } from 'react-hot-toast'
import { archivo, bricolage_grotesque } from '@/lib/font'
import "animate.css/animate.compat.css"
import Head from "next/head";

export const metadata: Metadata = {
verification:{
 google : "0VOCVxppga6dPoVmInwKFe4y7gDPbopUfrLVO8AtdmE",
other : {
bing : "D21C43C3A003D8C76187328778E2A711",
},
},
  title: 'Padmanabh Malwade',
  description: "Explore Padmanabh Malwade's portfolio showcasing his skills in Software Development & Web Designing. Specializing in Next.js, React, & Node.js."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={archivo.className + ' select-none ' + bricolage_grotesque.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        // disableTransitionOnChange
        >
          <Toaster
            position="top-right"
            reverseOrder={true}
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
