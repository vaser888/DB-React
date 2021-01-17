
function NavBar({ currentPage, totalPages }) {

    
    return (
        <div className="level">
            <div className="level-item">
                <button className="button">Previous Page</button>
            </div>
            <div className="level-item">
                <input type="text" className="input" defaultValue={currentPage}/> 
                <span>of {totalPages}</span>
            </div>
            <div className="level-item">
                <button className="button">Next Page</button>
            </div>
        </div>
    );
}

export default NavBar;