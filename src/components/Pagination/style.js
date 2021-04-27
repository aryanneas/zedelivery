import styled from 'styled-components'

export const PaginationItem = styled.button.attrs(({ active }) => ({
  className: active ? 'active' : '',
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  background-color: #fff;
  border-color: #fff;
  padding: 10px 15px;
  color: #000;
  text-align: center;
  border-top: 1px solid #d3d3d3;
  border-bottom: 1px solid #d3d3d3;
  border-right: 1px solid #d3d3d3;
  cursor: pointer;
  &:first-child {
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
    border-left: 1px solid #d3d3d3;
  }
  &:last-child {
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
  }
  &.active,
  &:hover {
    color: #fff;
    background-color: #ffc500;
    border-color: #ffc500;
  }

  &:disabled {
    color: #939393;
    background-color: #d3d3d3;
    border: none;
    cursor: not-allowed;
  }
`
export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

export const FlexComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px 0;
`
export const ChildrenWrapper = styled.div`
  padding: 10px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 54vh;
  overflow-y: scroll;
`
