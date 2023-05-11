import { log } from 'console'
import './globals.css'

export const metadata = {
  title: 'EazyHomes',
  description: 'Online Booking app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  
  return (
    <html lang="en">
    
      <body>{children}</body>
    </html>
  )
}
