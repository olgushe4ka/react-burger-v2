import { useEffect, useState } from "react";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

function Api(baseUrl) {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const getIngredientsData = async () => {
      try {
        const res = await fetch(baseUrl).then(checkResponse);
        setIngredients(res.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    getIngredientsData();
  }, []);
  return ingredients;

}

export default Api;
