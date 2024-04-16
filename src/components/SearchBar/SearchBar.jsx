export default function SearchBar({ onSearch }) {
    
    const handleSubmit = (event) => {
        const inputValue = event.target.elements.searchInput.value
        event.preventDefault()
        onSearch(
            inputValue.trim()
        )
        event.target.reset()
    }
 
    return (
    <header>
        <form onSubmit={handleSubmit}>
            <input type="text" name="searchInput" />
            <button type="submit">Search</button>
        </form>
    </header>
    
  )
}