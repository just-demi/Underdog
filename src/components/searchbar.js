const SearchBar = () => (
    <form style={{position: 'relative', borderColor:"orangered", left: 1050, top: 50}}>
        <label htmlFor="header-search">
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Enter destination address"
            name="s" 
            style={{ borderRadius: 45}}
        />
        <button style={{background:"white", color:"orangered", borderColor:"orangered", borderRadius: 45}}>Search</button>
    </form>
);

//<span className="visually-hidden">Search blog posts</span>
export default SearchBar;