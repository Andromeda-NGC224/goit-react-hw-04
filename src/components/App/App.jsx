import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";
import Loader from "../Loader/Loader.jsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn.jsx";
import { fetchImg } from "../api.js";
import css from './App.module.css'
import { useEffect } from "react";



export default function App() {

  const [imgData, setImgData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const handleSearch = async (newSearchText) => {
    try {
        if (newSearchText === ``) {
        return
      }
      setIsLoading(true)
      const data = await fetchImg(newSearchText)
      setImgData(data)
      console.log(data);
    // пришел массив с 10 обьектами
      } catch (error) {
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
  }


  return (
    <>
      <SearchBar onSearch={handleSearch}></SearchBar>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {}
    </>
  )
}

