import { useState, useEffect } from "react";

function Home() {
  const homeApi = "http://13.71.97.36:8080/api/about/belief.json";
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // getData
  useEffect(() => {
    fetch(homeApi)
      .then((response) => response.json())
      .then((json) => {
        console.log(json.faqs);
        setData(json.faqs);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  if (loading) return "Loading...";
  if (error) return "Error!";

  const faqList = data.map((faq) => {
    return (
      <div className="card" key={faq.id}>
        <h1>{faq.title}</h1>
        {faq.content ? faq.content : null}
        {faq.point ? (
          <ul>
            {faq.point.split(`\n`).map((point) => {
              console.log(point);
              return <li key={point}>{point}</li>;
            })}
          </ul>
        ) : null}
      </div>
    );
  });

  return <div className="container">hello</div>;
}

export default Home;
