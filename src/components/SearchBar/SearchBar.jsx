import { IoSearch } from "react-icons/io5";

import css from './SearchBar.module.css'

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
    <header className={css.header}>
        <form className={css.form} onSubmit={handleSubmit}>
            <input className={css.input} type="text" name="searchInput" autoComplete="off" placeholder="Search images..." />
            <button className={css.btn} type="submit"><IoSearch size={26} className={css.iconSearch} /></button>
        </form>
    </header>
    
  )
}