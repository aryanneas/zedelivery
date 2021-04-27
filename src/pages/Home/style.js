import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  background-image: url('https://courier-images-web.imgix.net/static/img/img-welcome-bg.png?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2&fm=png');
  background-repeat: no-repeat;
  height: 90vh;
  background-position: top;
  background-size: auto;
`

export const Title = styled.h1`
  margin-top: 0;
`

export const SearchWrapper = styled.div`
  max-width: 500px;
  text-align: center;
  margin: auto;
  padding-top: 10%;
`

/*formulario*/

export const InputField = styled.input`
  width: 100%;
  height: 48px;
  border-width: 1px;
  border-radius: 8px;
  font-weight: lighter;
  box-sizing: border-box;
  color: #333;
  background-color: #ffffff;
  font-size: 16px;
  line-height: 20px;
  font-family: Roboto;
  border: 2px solid #c3c3c3;
  padding: 0 20px;
  margin: auto;
  z-index: 1;
  font-size: 16px;
  max-width: 100%;
`

export const SubmitButton = styled.button`
  border: none;
  outline: none;
  border-radius: 8px;
  font-size: 14px;
  padding: 12px;
  font-family: Roboto;
  line-height: 20px;
  text-transform: uppercase;
  margin: 5% auto auto 0;
  color: #000000;
  background-color: #ffc500;
  border: 1px solid #ffc500;
  width: 200px;
  &:hover {
    cursor: pointer;
  }
`
