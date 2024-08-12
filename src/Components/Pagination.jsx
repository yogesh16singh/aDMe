import React from 'react'

const Pagination = ({setPage}) => {
    const handleLoadMore = () =>{
        setPage(prevPage => prevPage + 1);
    }
  return (

    <div className="text-center py-4">
      <button
        onClick={handleLoadMore}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Load More
      </button>
    </div>
  )
}

export default Pagination