import Image from 'next/image'
import Link from 'next/link'
import Logo from './a-logo.png'

export default function Navbar() {
  return (
    <nav>
      <Image src={Logo} alt="Logo Image" width={70} quality={100} placeholder='blur' />
      <h1>
          Helpdesk
      </h1>
      <Link href="/">
          Dashboard
      </Link>

      <Link href="/tickets">
          Tickets
      </Link>
    </nav>
  )
}
