import React from 'react';
// import styled from 'styled-components';
import usePosts from 'Hooks/usePosts';

interface IProps {
  title: string;
  date: string;
  url: string;
  desc: string;
}

const Post = ({ title, date, url, desc }: IProps) => (
  <article>
    <a href={url} target="_blank" rel="noopener noreferrer">
      <h2>{title}</h2>
    </a>
    <p>
      <small>Posted on: {date}</small>
    </p>
    <p>{desc}</p>
    <hr />
  </article>
);

const Posts = () => {
  const posts = usePosts();

  return (
    <div>
      <p>
        <strong>My Recent Posts:</strong>
      </p>
      {posts.map((post: any) => (
        <Post
          key={post.id}
          title={post.title}
          date={post.date}
          url={post.url}
          desc={post.desc}
        />
      ))}
    </div>
  );
};
// const Item = styled.div`
//   position: relative;
//   overflow: hidden;
//   img {
//     transition: transform 0.3s ease !important;
//   }
//   &:hover img {
//     transform: scale(1.1);
//   }
// `;

// const Overlay = styled.div`
//   position: absolute;
//   bottom: 0;
//   text-align: center;
//   width: 100%;
//   transform: translateY(-50%);
//   text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
//   pointer-events: none;
//   h3 {
//     margin: 0;
//     color: #fff;
//   }
// `;

export default Posts;
