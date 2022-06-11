import React from 'react'
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import Wrapper from '../assets/wrappers/PageBtnContainer';
import { useSelector, useDispatch } from 'react-redux';
import { changePage } from '../features/allJobs/allJobsSlice';

const PageBtnContainer = () => {
    const { numOfPages, page } = useSelector((store) => store.allJobs);
    const dispatch = useDispatch();

    const pages = Array.from({ length: numOfPages }, (_, index) => {
        return index + 1
    })

    const nextPage = () => {
        let newPage = page + 1
        if(newPage > numOfPages) {
            newPage = 1
        }
        dispatch(changePage(newPage))
    }
    const prevPage = () => {
        let newPage = page - 1
        if(newPage < 1) {
            newPage = numOfPages
        }
        dispatch(changePage(newPage))
    }

    return (
        <Wrapper>
            <button type='button' className='prev-btn' onClick={prevPage}>
                <HiChevronDoubleLeft />
                Prev
            </button>
            {pages.map((pageNumber) => {
                return <button className={pageNumber === page ? "pageBtn active" : "pageBtn"} type="button" key={pageNumber} onClick={() => dispatch(changePage(pageNumber))}>{pageNumber}</button>
            })} 
            <button type='button' className='next-btn' onClick={nextPage}>
                <HiChevronDoubleRight />
                Next
            </button>
        </Wrapper>
    )
}

export default PageBtnContainer