import './globals.css'
import { Inter, Source_Sans_3 } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const sourcesans3 = Source_Sans_3({ subsets: ['latin'], weight: ["400", "500", "600", "700", "800", "900"], })

export const metadata = {
    title: 'Home | HIMATIF - Universitas Sumatera Utara',
    description: 'A',
}

export default function RootLayout({ children })
{
    return (
        <html lang="en">
            <body className={sourcesans3.className}>{children}</body>
        </html>
    )
}
