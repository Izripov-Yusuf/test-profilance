import './Pagination.scss';

import ReactPaginate from 'react-paginate';

const Pagination = ({ lastPage, onChangePage }) => {
  return (
    <ReactPaginate
      className="pagination"
      breakLabel="..."
      marginPagesDisplayed={3}
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageCount={lastPage}
    />
  );
};

export default Pagination;
