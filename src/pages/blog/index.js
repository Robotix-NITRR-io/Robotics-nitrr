

import React from 'react';

const Blog = ({data}) => {
  return (
    <>
     
      {data.slice(0, 9).map((curElem) => {
        return (
          <div key={curElem.id} className="ssr-styles">
            <h3>{curElem.id}</h3>
            <h2>{curElem.title}</h2>
            {/* <Link href={`/blog/${curElem.id}`}>
             
            </Link> */}
          </div>
        );
      })}
    </>
  );
};

export default Blog;


export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
