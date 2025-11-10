import type { Metadata } from 'next'
import { Inter, Courier_Prime } from 'next/font/google'
import { ThemeProvider } from "next-themes"
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider"
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const courierPrime = Courier_Prime({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'BuildwellAI - AI-Powered Solutions for UK Construction',
  description: 'Advanced AI tools for construction compliance, building safety, and digital transformation. BuildwellTHREAD, Buildwell Eye, Buildwell Inspect, and BuildwellAI Chat.',
  keywords: 'UK construction, AI, building safety, compliance, construction technology, digital transformation, building regulations, infrastructure',
  authors: [{ name: 'BuildwellAI' }],
  creator: 'BuildwellAI',
  publisher: 'BuildwellAI',
  applicationName: 'BuildwellAI',
  category: 'construction technology',
  classification: 'Construction Industry Solutions',
  openGraph: {
    title: 'BuildwellAI - AI-Powered Construction Solutions',
    description: 'Transform your construction projects with AI-powered compliance, safety, and digital tools for the modern building industry.',
    url: 'https://buildwellai.com',
    siteName: 'BuildwellAI',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BuildwellAI - AI-Powered Construction Solutions',
    description: 'Advanced AI tools for construction compliance and building safety.',
    creator: '@buildwellai',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-GB" suppressHydrationWarning className="dark">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                document.documentElement.classList.add('dark');
              } catch (e) {}
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@100..900&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="theme-color" content="#ff8a00" />
        <meta name="msapplication-TileColor" content="#ff8a00" />
      </head>
      <body className={`${inter.variable} ${courierPrime.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
          forcedTheme="dark"
        >
          <SmoothScrollProvider>
            {children}
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
