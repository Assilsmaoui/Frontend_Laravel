import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Listarticlescard = () => {
    const[articles,setArticle]=useState([])
  const[isloading,setIsloading] =useState(true)
  const[currentPage,setCurrentpage]=useState(1)//numero de page
  const[currentSize,setPageSize]=useState(18)
  const[totalPages,setTotalPages]=useState(1)
  const fetcharticles=async(pageSize,page)=>{
    try{
const res=await axios.get(`https://tp1-laravel.vercel.app/api/api/articles/art/articlespaginate?pageSize=${pageSize}&page=${page}`)
setArticle(res.data.products)
setTotalPages(res.data.totalPages)
setIsloading(false)
    }catch(error){
console.log(error)
    }
  }
  useEffect(()=>{
    fetcharticles(pageSize,currentPage)
  },[pageSize,currentPage])//les dépendances 
  const handleDelete=async(id)=>{
    if(window.confirm)("ete vous sure de vouloir de supprimer")
      {
        try{
          await axios.delete(`https://tp1-laravel.vercel.app/api/api/articles/${id}`)
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
      liste des articles
    </div>
  )
}

export default Listarticlescard
