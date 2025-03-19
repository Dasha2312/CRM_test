import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../../store/Slices/UsersSlice';

function Pagination() {
  const dispatch = useDispatch();

  const { currentPage, totalPages } = useSelector(state => state.users);
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      dispatch(setPage(currentPage + 1));
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      dispatch(setPage(currentPage - 1));
    }
  };

  const handlePageChange = (page) => {
    dispatch(setPage(page));
  };

  return (
    <div className="pagination">
      <button 
        onClick={handlePrevPage} 
        disabled={currentPage === 1}
      >
        Назад
      </button>
      
      <span>Страница {currentPage} из {totalPages}</span>

      <button 
        onClick={handleNextPage} 
        disabled={currentPage === totalPages}
      >
        Вперед
      </button>

      <div className="page-numbers">
        {[...Array(totalPages).keys()].map((pageNumber) => (
          <button
            key={pageNumber + 1}
            onClick={() => handlePageChange(pageNumber + 1)}
            className={pageNumber + 1 === currentPage ? "active" : ""}
          >
            {pageNumber + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Pagination;