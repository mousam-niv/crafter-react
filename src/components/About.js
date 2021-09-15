import { useState, useEffect } from 'react';

function Home() {
  const aboutApi = '/api/about.json';
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // getData
  useEffect(() => {
    fetch(aboutApi)
      .then((response) => response.json())
      .then((json) => {
        console.log(json.abouts);
        setData(json.abouts);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  if (loading) return 'Loading...';
  if (error) return 'Error!';

  return (
    <div className="container">
      <h1>{data[0].content}</h1>
    </div>
  );
}

export default Home;
