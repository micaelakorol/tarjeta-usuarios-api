import React from 'react'
import { Link } from 'react-router-dom'
import '../estilos/tarjeta.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faEnvelope,faCity,faLocationDot,faMagnifyingGlassLocation,faLink,faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import Media from 'react-media'

const Tarjeta = ({tarjeta}) => {

const {email,username ,name,address,website} = tarjeta
            //fecha 
let date = new Date().toDateString();
 
  return (
    <>
    {/* contiene la fecha y el nombre */}
<main className='tarjeta'>
<section className='tarjeta__name'>
      <h4> {name}</h4>  
      <p> <FontAwesomeIcon icon={faCalendarDays } /> {date}</p>
</section>
  
<div className='tarjeta__email'>
        <Link to={`https://twitter.com/${username}`} className='link'>@{username}</Link>
                <p className='email'>
        <FontAwesomeIcon icon={faEnvelope}/> {email}</p>
</div>
{/*Media: de 600px para arriba */}
<Media query="(min-width:600px)" render={() =>
          (
<div className='tarjeta__datos'>
<div className='tarjeta__datos__ubicacion'>
        <p> <FontAwesomeIcon icon={faCity}/> City </p> 
        <p><FontAwesomeIcon icon={faLocationDot}/> Street </p>
          <p> <FontAwesomeIcon icon={faMagnifyingGlassLocation}/> ZipCode </p>
</div>

<div className='tarjeta__dato__ubicacion'>
      <p> {address.city} </p> <p> {address.street} </p> <p> {address.zipcode} </p>
</div>
<div className='tarjeta__website'>
      <Link to={`${website}`} className='link'><FontAwesomeIcon icon={faLink} /> {website}</Link>
</div>
</div>
)}/>
      {/** ------Media: de 0 a 599px---------------------------------- */}    
<Media query="(max-width:599px)" render={() =>
          (
<div className='tarjeta__datos__media'>
        <p> <FontAwesomeIcon icon={faCity}/> City: {address.city} </p> 
        <p><FontAwesomeIcon icon={faLocationDot}/> Street:  {address.street} </p>
          <p> <FontAwesomeIcon icon={faMagnifyingGlassLocation}/> ZipCode: {address.zipcode}</p>
          <div className='tarjeta__website'>
      <Link to={`${website}`} className='link'><FontAwesomeIcon icon={faLink} /> {website}</Link>
</div>
</div>
)} />
</main>
</>
  )
}

export default Tarjeta
