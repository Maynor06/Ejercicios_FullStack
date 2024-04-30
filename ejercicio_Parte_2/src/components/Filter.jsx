
const Filter = ({showFilters, newFilter, handleFilterChange}) => {
    
    return(
        <>
            <form onSubmit={showFilters}>
                <input value={newFilter} onChange={handleFilterChange}/>
                <button>filter</button>
            </form>
        </>
    )
}

export default Filter