import { useState, useEffect } from "react"

export const useFetch = (url) => {

const [data , setData] = useState([])
const [error, setError] = useState('')

useEffect(() => {

fetch(url)
.then((res) => res.json())
.then((data) => setData(data))
.catch((e) => setError('error'))

},[url]);

return({data, error})

}