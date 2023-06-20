import '@/styles/globals.css'
// import { Analytics } from "@/components/analytics"
// import { SiteFooter } from "@/components/site-footer"
// import { SiteHeader } from "@/components/site-header"
import { StyleSwitcher } from '@/components/style-switcher'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/toaster'
import { siteConfig } from '@/config/site'
import { fontSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { Metadata } from 'next'

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      {/* <html lang="en">
        <head />
        <body
          className={cn(
            'min-h-screen bg-background font-sans antialiased',
            fontSans.variable
          )}> */}
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem>
        <div className="relative flex min-h-screen flex-col">
          {/* <SiteHeader /> */}
          <div className="flex-1">{children}</div>
          {/* <SiteFooter /> */}
        </div>
        <TailwindIndicator />
      </ThemeProvider>
      {/* <Analytics /> */}
      <Toaster />
      {/* </body>
      </html> */}
    </>
  )
}
