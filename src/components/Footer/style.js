import styled from 'styled-components'

export const Footer = styled.div`
  position: fixed;
  bottom: 0;
  background-color: #333;
  width: 100%;
  color: #fff;
  height: auto;
  display: grid;
`

export const FooterItems = styled.div`
  justify-content: center;
  margin: 0 auto;
  display: grid;
  grid-gap: 1rem;
  padding: 10px 0;

  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 600px) {
    text-align: center;
  }
`

export const FooterLogo = styled.img`
  width: 50%;
  height: auto;
`

export const CopyRight = styled.p`
  text-align: center;
`

export const About = styled.ul`
  align-items: center;
  display: flex;
  width: 40%;
  justify-content: space-around;
  @media (max-width: 600px) {
    justify-content: space-between;
    margin: auto;
  }
`
