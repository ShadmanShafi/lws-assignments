import React from "react";
import CardItem from "./CardItem";
import { useSelector } from "react-redux";

export default function CardGrid() {
  const posts = useSelector((state) => state.posts);
  const filteredAuthor = useSelector((state) => state.filters.author);
  const filteredTag = useSelector((state) => state.filters.tag);
  const filteredTitle = useSelector((state) => state.filters.title);

  const filterByAuthor = (post) => {
    if (!filteredAuthor) return true;
    if (post.author === filteredAuthor) return true;
    else return false;
  };

  const filterByCategory = (post) => {
    if (!filteredTag) return true;
    if (post.category === filteredTag) return true;
    else return false;
  };

  const filterByTitle = (post) => {
    if (!filteredTitle) return true;
    return (post.title.toLowerCase().search(filteredTitle) > -1);
  };

  return (
    <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
      {posts
        .filter(filterByAuthor)
        .filter(filterByCategory)
        .filter(filterByTitle)
        .map((post, key) => (
          <CardItem post={post} key={key} />
        ))}
    </div>
  );
}
