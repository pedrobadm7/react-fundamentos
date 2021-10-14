import React, { useState } from "react";
import Post from "../Post/index.js";
import Header from "../Header";
import { ThemeProvider } from "../context/ThemeContext";

import { Title } from "./styles";

import styles from './styles.scss';

const App = () => {
  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: "Title#01",
      subtitle: "Sub#01",
      likes: 20,
      read: false,
      removed: false,
    },
    {
      id: Math.random(),
      title: "Title#02",
      subtitle: "Sub#02",
      likes: 40,
      read: true,
      removed: false,
    },
    {
      id: Math.random(),
      title: "Title#03",
      subtitle: "Sub#03",
      likes: 60,
      read: false,
      removed: false,
    },
  ]);

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Title#0${prevState.length + 1}`,
        subtitle: `Subtitle#0${prevState.length + 1}`,
        likes: 50,
      },
    ]);
  }

  function handleRemovePost(postId) {
    setPosts((prevState) =>
      prevState.map((post) =>
        post.id === postId ? { ...post, removed: true } : post
      )
    );
  }

  return (
    <ThemeProvider>
      <Header title="JStack's Blog">
        <Title as="h2">
          Posts da semana 
          <button onClick={handleRefresh}>Atualizar</button>
        </Title>
      </Header>

      <hr />

      {posts.map((post) => (
        <Post key={post.id} onRemove={handleRemovePost} post={post} />
      ))}
    </ThemeProvider>
  );
};

export default App;
