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
    <div className="pagination mt-[50px]">
      <div className='pagination__inner flex items-center justify-between'>
        <div>
          <span>Showing <><strong>{currentPage}</strong></> of <strong>{totalPages}</strong> pages</span>
        </div>

        <div className='flex items-center'>
          <button 
            onClick={handlePrevPage} 
            disabled={currentPage === 1}
            className={`px-3 py-2 bg-blue-700 text-white font-medium rounded cursor-pointer hover:bg-[#B5B8FF] duration-500 mr-3 ${currentPage === 1 && 'bg-gray-400 hover:bg-gray-400'}`}
          >
            Previous
          </button>
      
          <div className="page-numbers">
            {[...Array(totalPages).keys()].map((pageNumber) => (
              <button
                key={pageNumber + 1}
                onClick={() => handlePageChange(pageNumber + 1)}
                className={`${pageNumber + 1 === currentPage ? "active bg-blue-700 border-blue-700 text-white" : ""} py-1 px-2 text-base mx-1 h-[33px] min-w-[33px] rounded text-black border text-medium cursor-pointer hover:opacity-0.6 duration-500`}
              >
                {pageNumber + 1}
              </button>
            ))}
          </div>

          <button 
            onClick={handleNextPage} 
            disabled={currentPage === totalPages}
            className={`ml-3 px-3 py-2 bg-blue-700 text-white font-medium rounded cursor-pointer hover:bg-[#B5B8FF] duration-500 mr-3 ${currentPage === totalPages && 'bg-gray-400 hover:bg-gray-400'}`}
          >
            Next
          </button>
        </div>
      </div>


      
    </div>
  );
}

export default Pagination;