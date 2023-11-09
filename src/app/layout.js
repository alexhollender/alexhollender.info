import '../styles/globals.scss'
import '../styles/variables.scss'
import '../styles/dark.scss'
import Header from '@/components/header/Header'
import Nav from '@/components/nav/Nav'
import Content from '@/components/content/Content'
import DarkModeToggle from '@/components/darkModeToggle/DarkModeToggle'
import { vcrOsdMono } from '@/utils/fonts'

export const metadata = {
  title: "You win some, you loose some",
  description: "Web design & development stuff",
  openGraph: {
    title: "You win some, you loose some",
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
    <html lang="en" className={vcrOsdMono.variable}>
      <body>
        <Header />
        <div className='wrapper'>
          <Nav />
          <Content>{children}</Content>
        </div>
        <DarkModeToggle />
      </body>
    </html>
  )
}
