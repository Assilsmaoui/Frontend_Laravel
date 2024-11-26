import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ReactLoading from 'react-loading';
import { Link } from 'react-router-dom';
const Listarticles = () => {
  const[articles,setArticle]=useState([])
  const[isloading,setIsloading] =useState(true)
  const fetcharticles=async()=>{
    try{
const res=await axios.get("https://tp1-laravel.vercel.app/api/api/articles")
setArticle(res.data)
setIsloading(false)
    }catch(error){
console.log(error)
    }
  }
  useEffect(()=>{
    fetcharticles()
  })
  const handleDelete=async(id)=>{
    if(window.confirm)("ete vous sure de vouloir de supprimer")
      {
        try{
         // await axios.delete(`https://tp1-laravel.vercel.app/api/api/articles/${id}`)
          setArticle(articles.filter(art=>art.id!=id))
        }catch(error){
          console.log(error)
        }
      }
    
  }
  if(isloading){
    <ReactLoading type="spinningBubbles" color="red" height={667} width={375} />
  }
  return (
    <div>
  
      <Link to="/articles/add"><button className='btn btn-success btn-sm'><i class="fa-solid fa-circle-plus"></i>Ajouter</button></Link>
    <center><h1>Liste des articles</h1></center> 
    <table className='table table-striped'>
      <thead>

        <tr>
          <th>Réference</th>
          <th>Désingnation</th>
          <th>Marque</th>
          <th>Prix</th>
          <th>Stock</th>
          <th>Image</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {
          articles.map((art,index)=>
            <tr key={index}>
                <td>{art.reference}</td>
                <td>{art.designation}</td>
                <td>{art.marque}</td>
                <td>{art.prix}</td>
                <td>{art.qtestock}</td>
                <td><img src={art.imageart}width={80} height={80}/></td>
                <td ><Link to={`/articles/edit/${art.id}`}><button className='btn btn-warning btn-sm'><i class="fa-sharp-duotone fa-solid fa-pen-to-square"></i>Update</button></Link></td>
                <td><button className='btn btn-danger btn-sm' onClick={()=>handleDelete(art.id)}><i class="fa-solid fa-trash"></i>Delete</button></td>
            </tr>
          )
        }
      </tbody>
    </table>
    </div>
  )
}

export default Listarticles
