import React from 'react'
import { HeaderContent, Logo } from './style'

const Header = () => {
  return (
    <HeaderContent>
      <Logo
        src="https://courier-images-web.imgix.net/static/img/white-logo.png?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2&fm=png"
        title="logo Zé Delivery"
        alt="logo Zé Delivery"
      />
    </HeaderContent>
  )
}

export default Header
