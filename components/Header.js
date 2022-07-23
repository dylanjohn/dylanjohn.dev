import { useRouter } from 'next/router'

export default function Header() {
  return (
    <nav className="p-6 flex justify-center">
      <ul className="nav flex flex-row">
        <li className="p-2">
          <Link href="/">Home</Link>
        </li>
        <li className="p-2">
          <Link href="/about">Info</Link>
        </li>
      </ul>
    </nav>
  )
}

const Link = ({ children, href }) => {
  const router = useRouter()
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault()
        // typically you want to use `next/link` for this usecase
        // but this example shows how you can also access the router
        // and use it manually
        router.push(href)
      }}
    >
      {children}
    </a>
  )
}