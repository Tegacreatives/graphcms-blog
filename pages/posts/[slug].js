import React from 'react';
import Image from 'next/image';
import { GraphQLClient, gql } from 'graphql-request';
import Navbar from '../../components/Navbar'
import styles from '../../styles/slug.module.css';

const graphcms = new GraphQLClient('https://api-eu-west-2.graphcms.com/v2/cl4479v9t0c1z01z89fo72yhp/master');

const QUERY = gql`
  query Post($slug: String){
      post(where: {slug: $slug}){
          id,
          title,
          slug,
          datePublished,
          author{
              name
          }
          content{
              html
          }
          coverPhoto{
              url
          }
      }
  }
`;

const sluglist = gql`
  {
      posts{
          slug
      }
  }
`;

export async function getStaticPaths() {
    const { posts } = await graphcms.request(sluglist);
    return {
        paths: posts.map((post) => ({ params: { slug: post.slug } })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const slug = params.slug
    const data = await graphcms.request(QUERY, { slug });
    const post = data.post;
    return {
        props: {
            post,
        },
        revalidate: 10,
    }
}


const BlogPost = ({ post }) => {
  return (
      <div className={styles.container}>
          <Navbar />
          <h1>{post.title}</h1>
          <Image 
              src={post.coverPhoto.url}
              width="500vw"
              height="500vh"
              alt='post-img'
          />
          <div dangerouslySetInnerHTML={{ __html: post.content.html }}></div>
          <div>
              <h6>By {post.author.name}</h6>
              <h6>Published { post.datePublished}</h6>
          </div>         
    </div>
  )
}

export default BlogPost;