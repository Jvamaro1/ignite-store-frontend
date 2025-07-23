import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
import { Cart } from "../Cart"
import { AuthButton } from "../AuthButton"
import logoImg from "../../assets/logo.svg"

import { HeaderContainer, HeaderActions } from "./styles"

export function Header() {
  const { pathname } = useRouter()

  const showCartButton = pathname !== "/success"

  return (
    <HeaderContainer>
      <Link href="/">
          <Image src={logoImg} alt="Ignite Shop 2.0" />
      </Link>
      <HeaderActions>
        <AuthButton />
        {showCartButton && <Cart />}
      </HeaderActions>
    </HeaderContainer>
  )
}
