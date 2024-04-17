import '../styles/globals.scss'
import '../styles/variables.scss'
import '../styles/dark.scss'
import Header from '@/components/header/Header'
import DarkModeToggle from '@/components/darkModeToggle/DarkModeToggle'
import { vcrOsdMono, generalSans, tobias } from '@/utils/fonts'

export const metadata = {
  title: "Alex Hollender — Product Design",
  description: "Alex Hollender's design portfolio",
  metadataBase: new URL('https://alexhollender.info'),
  openGraph: {
    title: "Alex Hollender — Product Design",
    description: "Web design & development stuff",
    author: "Alex Hollender",
    url: "https://alexhollender.info",
    siteName: "Alex Hollender's portfolio",
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${generalSans.variable} ${tobias.variable} ${vcrOsdMono.variable}`}>
      <body>
        <div className='wrapper'>
          <Header />
          {children}
        </div>
        {/* <DarkModeToggle /> */}
      </body>
    </html>
  )
}
