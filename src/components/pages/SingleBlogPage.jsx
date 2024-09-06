import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const BlogPage = () => {
  const router = useRouter();

  // router.query.id

  const [article, setArticle] = useState([]);
  console.log(router.query.id);

  const fetchData = () => {
    fetch(`https://dev.to/api/articles/${router.query.id}`)
      .then((response) => response.json())
      .then((data) => setArticle(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      {/* <Header /> */}
      <h1>{article?.title}</h1>
      Blog page
      {/* <Footer /> */}
    </div>
  );
};
