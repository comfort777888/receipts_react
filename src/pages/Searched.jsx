import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { Grid, CuisineCard } from "./../constants/Style";

function Searched() {
  const [searchedRecipes, setsearchedRecipes] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );
    const recipes = await data.json();
    setsearchedRecipes(recipes.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <Grid>
      {searchedRecipes.map((item) => {
        return (
          <CuisineCard key={item.id}>
            <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </Link>
          </CuisineCard>
        );
      })}
    </Grid>
  );
}

export default Searched;
