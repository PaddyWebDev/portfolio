import type { Metadata } from "next";
import "@/app/globals.css";
import { ThemeProvider } from "@/providers/theme";
import { Toaster } from 'react-hot-toast'
import { archivo, bricolage_grotesque } from '@/lib/font'
import "animate.css/animate.compat.css"
import Head from "next/head";

export const metadata: Metadata = {
  title: 'Padmanabh Malwade | Software Web Developer Portfolio',
  description: "Explore Padmanabh Malwade's portfolio showcasing his skills in Software Development & Web Designing. Specializing in Next.js, React, & Node.js."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="description" content={metadata.description!} />
        <meta property="og:title" content={metadata.title as string} />
        <meta property="og:description" content={metadata.description!} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/path/to/your/portfolio-image.jpg" />
      </Head>
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
