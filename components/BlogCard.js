import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Blogcard.module.css'


const BlogCard = ({ title, coverPhoto, slug }) => {
  const url = "/posts/" + slug;
  return (
      <div>
          <Link href={url}>
          <div className={styles.blogcard}>  
          <Image 
              src={coverPhoto.url}
              width="600"
              height="300"
              className={styles.blogcardimage}
              alt="blogcard-image"
          />
          <h1 className={styles.blogcardtext}>{title}</h1>
          </div>
          </Link>
    </div>
  )
}

export default BlogCard