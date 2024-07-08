import React, { useEffect, useState } from "react";

function RaceCondition(props) {
  const { id } = props;
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    let isFlag = true;

    const fetchData = async () => {
      try {
        let response = await fetch(
          `https://jsonplaceholder.typicode.com/todos/${id}`
        );
        response = await response.json();

        if (isFlag) {
          setData(response);
        }
      } catch (error) {
        setError(error);
      }
      return () => {
        isFlag = false;
      };
    };

    fetchData();
  }, [id]);

  console.log(data);

  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>{data.name}</h1>
    </div>
  );
}

export default RaceCondition;
