//loads to client-side (next wants to use server)
"use client";

import styles from "./ArticleCard.module.css";
import Link from 'next/link';


const ArticleCard = ({title, date, description, link, imgSrc, imgAlt, id,imgLink}) => {
    return(
        <div href="href={`article/${id}`}" className={styles.articleCard}>
            <a></a>
            <div className={styles.articleCardContent}>
                <div className={styles.articleCardImage}>
                    <a href={imgLink} target="_blank" rel="noopener noreferrer">
                        <img src={imgSrc} alt={imgAlt}></img>
                    </a>
                </div>
                <div>
                    <h2>{title}</h2>
                    <p>{date}</p>
                    <p>{description}</p>
                    <p><Link className={styles.articleLink} href={`article/${id}`}>Read More..</Link></p>
                </div>
                
            </div>
        </div>
    )
}

export default ArticleCard;