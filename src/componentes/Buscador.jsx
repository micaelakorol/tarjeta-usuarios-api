import React from 'react'
import { useSearchParams } from 'react-router-dom'
import '../estilos/buscador.css'
import { useFetch } from '../Hook/useFetch'
import Tarjeta from './Tarjeta'
const Buscador = () => {

let [searchParams, setSearchParams] = useSearchParams()

const {data,error} = useFetch('https://jsonplaceholder.typicode.com/users')

if(error !== ''){
  return <h2>{error}</h2>
}
const handleChange = e =>{
let filter = e.target.value
if(filter){
  setSearchParams({filter})
}else{
  setSearchParams({})
}
}

  return (
    <>

<header className='buscador-contenedor-principal'>
  <form className="form-inline">
    <input className="form-control col-lg-10 " type="search" placeholder="Search username..."
     aria-label="Search"
     name='nombre'
     autoComplete='off'
     value={searchParams.get('filter') || ''}
     onChange={handleChange}
    />
    <button className="button btn btn-dark my-2 md-sm-0" type="submit">Search</button>
  </form>
<div className='buscador-contenedor-dos'>
{
data.filter(item => {
 let filter = searchParams.get('filter')

 if(!filter) return true

 let name = item.name.toLowerCase()
 return name.startsWith(filter.toLowerCase())
})
.map(item => (
  <h4 key={item.name}>

      <Tarjeta key={item.id} tarjeta={item} />
</h4>
    ))}
   </div>
  
</header>

</>
  )}
export default Buscador