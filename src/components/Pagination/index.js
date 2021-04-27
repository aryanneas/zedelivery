import React, { useState } from 'react'

import {
  FiChevronsLeft,
  FiChevronRight,
  FiChevronsRight,
  FiChevronLeft,
} from 'react-icons/fi'

import { PaginationItem, Grid, FlexComponent, ChildrenWrapper } from './style'

const showPaginationItems = (
  totalPages,
  currentPageNumber,
  setCurrentPageNumber
) => {
  return (
    <>
      <PaginationItem
        disabled={currentPageNumber <= 1}
        onClick={() => setCurrentPageNumber(1)}
      >
        <FiChevronsLeft />
      </PaginationItem>
      <PaginationItem
        disabled={currentPageNumber <= 1}
        onClick={() => setCurrentPageNumber(currentPageNumber - 1)}
      >
        <FiChevronLeft />
      </PaginationItem>
      {currentPageNumber !== 1 ? (
        <PaginationItem
          onClick={() => setCurrentPageNumber(currentPageNumber - 1)}
        >
          {currentPageNumber - 1}
        </PaginationItem>
      ) : null}
      <PaginationItem active>{currentPageNumber}</PaginationItem>
      {currentPageNumber < totalPages ? (
        <PaginationItem
          onClick={() => setCurrentPageNumber(currentPageNumber + 1)}
        >
          {currentPageNumber + 1}
        </PaginationItem>
      ) : null}
      <PaginationItem
        disabled={currentPageNumber >= totalPages}
        onClick={() => setCurrentPageNumber(currentPageNumber + 1)}
      >
        <FiChevronRight />
      </PaginationItem>
      <PaginationItem
        disabled={currentPageNumber >= totalPages}
        onClick={() => setCurrentPageNumber(totalPages)}
      >
        <FiChevronsRight />
      </PaginationItem>
    </>
  )
}

const Pagination = ({ children, itemsPerPage, arrayItems }) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1)
  const [totalPages] = useState(
    Math.ceil((arrayItems || children.length) / itemsPerPage)
  )

  const paginate = (items, currentPage) => {
    if (!items) return null
    const start = (currentPage - 1) * itemsPerPage
    const end = start + itemsPerPage
    return items.slice(start, end)
  }

  return (
    <Grid>
      <FlexComponent>
        {showPaginationItems(
          totalPages,
          currentPageNumber,
          setCurrentPageNumber
        )}
      </FlexComponent>
      <ChildrenWrapper>{paginate(children, currentPageNumber)}</ChildrenWrapper>
      <FlexComponent>
        {showPaginationItems(
          totalPages,
          currentPageNumber,
          setCurrentPageNumber
        )}
      </FlexComponent>
    </Grid>
  )
}

export default Pagination
