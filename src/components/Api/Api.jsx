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
        const res = await fetch(baseUrl);
        const data = await checkResponse(res);
        setIngredients(data.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    getIngredientsData();
  }, []);
  return ingredients;

  // return (
  //     <ul>
  //       {ingredients.map(ingredient => (
  //         <li key={ingredient._id}>
  //           {ingredient.name} {ingredient.price}
  //         </li>
  //       ))}
  //     </ul>
  //   );
}

export default Api;
