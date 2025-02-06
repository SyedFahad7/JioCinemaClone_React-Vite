/* eslint-disable react/jsx-key */
import styles from './tags.module.css'
import {useState} from 'react'
const tags = () => {
  let[tags,setTags] = useState([
    "For You",
    "Premium",
    "Movies",
    "TV Shows",
    "Kids",
    "Music",
    "Clips",
    "Trailers",
    "JioCinema Originals",
    "Short Films",
    "Documentaries",
    "Comedy",
    "Action",
    "Drama",
    "Romance",
    "Horror",
    "Thriller",
  ])
  return (
    <>
      <div className={styles.tags}>
        {
        tags.map((tag)=>{
          return <p className={styles.tag}>{tag}</p>
        }
        )
        }  
      </div>
    </>

    )
}

export default tags