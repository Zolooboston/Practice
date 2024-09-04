const PromisePage = () => {
  // Promise
  //

  const data = fetch(`https://dev.to/api/articles?per_page=4&top=10`)
    .then((response) => response.json())
    .then((articles) => console.log(articles))
    .catch((error) => console.log(error));
  console.log(data);

  return <div>PromisePage</div>;
};
export default PromisePage;
