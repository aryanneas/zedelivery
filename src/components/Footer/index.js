import React from 'react'
import { FiLinkedin, FiTwitter, FiFacebook, FiInstagram } from 'react-icons/fi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { GoMarkGithub } from 'react-icons/go'

import {
  Footer as FooterWrapper,
  FooterItems,
  CopyRight,
  FooterLogo,
  About,
} from './style'

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterItems>
        <div>
          <FooterLogo
            src="https://courier-images-web.imgix.net/static/img/logo-white-text.png?auto=compress,format&fit=max&w=176&h=56&dpr=2&fm=png"
            className="footer-logo"
          />
        </div>

        <div>
          <p>Sobre o Zé Delivery</p>
          <ul>
            <li>
              <a href="https://ze.delivery/" target="_blank">
                Peça já!
              </a>
            </li>
            <li>
              <a
                href="https://zedelivery.freshdesk.com/support/home"
                target="_blank"
              >
                Ajuda do Zé!
              </a>
            </li>
            <li>
              <a href="https://ze.delivery/cidades-atendidas" target="_blank">
                Cidades Atendidas
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p>Sobre a Desenvolvedora</p>
          <About>
            <li>
              <a
                href="https://github.com/aryanneas"
                target="_blank"
                title="Github"
              >
                <GoMarkGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/aryanne-silva/"
                target="_blank"
                title="LinkedIn"
              >
                <FiLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://aryannesilvadev.netlify.app/"
                target="_blank"
                title="Site pessoal"
              >
                <BsFillPersonLinesFill />
              </a>
            </li>
          </About>
        </div>
      </FooterItems>

      <CopyRight>
        &#169; Desenvolvido por <b>Aryanne Silva</b> com muito amor e dedicação.
      </CopyRight>
    </FooterWrapper>
  )
}

export default Footer
