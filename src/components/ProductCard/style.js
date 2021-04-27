import styled from 'styled-components'

export const CardItem = styled.div`
  color: #333;
  display: flex;
  align-items: center;
  width: 300px;
  height: 370px;
  flex-wrap: wrap;
  justify-content: center;
  margin: 10px;
  border-radius: 8px;
  padding: 38px 0 10px;
  text-align: center;
  border: 1px solid #cfcfcf;
  &:hover {
    border: 1px solid #ffbf03;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
    transition: ease-in-out 0.2s;
  }
`
export const Price = styled.p`
  font-size: 1.2rem;
  width: 100%;
  border-top: 1px solid #c3c3c3;
  padding: 20px 0 10px 0;
  margin: 0;
  font-weight: bold;
`

export const AddToCart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  padding: 10px;
`
export const Count = styled.span`
  position: relative;
  font-weight: bold;
  color: black;
  outline: none;
`
export const Button = styled.button`
  padding: 10px 15px;
  border: 1px solid white;
  border-radius: 10px;
  outline: none;
  box-shadow: 0 4px 12px -2px rgba(100, 110, 150, 0.2);
  font-size: inherit;
  background: white;
  color: #999;
  cursor: pointer;
  transition: 0.2s all;

  &:hover {
    border: 1px solid #eee;
    box-shadow: 0 3px 8px -1px rgba(100, 110, 150, 0.2);
    color: black;
  }
  &:focus {
    outline: none;
  }
`
