import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import Loading from 'components/Loading';
import { getCocktail } from 'services/cocktailService';

const SingleCockTail = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    (async function fetchCocktail() {
      setLoading(true);
      try {
        const { data } = await getCocktail(id);

        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];

          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];

          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };

          setCocktail(newCocktail);
          setLoading(false);
        } else {
          setCocktail(null);
        }
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
      setLoading(false);
    })();
  }, [id]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {!cocktail ? (
            <h2 className='section-title'>No cocktail to display</h2>
          ) : (
            <section className='section cocktail-section'>
              <Link to='/' className='btn btn-primary'>
                Back Home
              </Link>
              <h2 className='section-title'>{cocktail.name}</h2>
              <div className='drink'>
                <img src={cocktail.image} alt={cocktail.name} />
                <div className='drink-info'>
                  <p>
                    <span className='drink-data'>Name :</span>
                    {cocktail.name}
                  </p>
                  <p>
                    <span className='drink-data'>Category :</span>
                    {cocktail.category}
                  </p>
                  <p>
                    <span className='drink-data'>Info :</span>
                    {cocktail.info}
                  </p>
                  <p>
                    <span className='drink-data'>Glass :</span>
                    {cocktail.glass}
                  </p>
                  <p>
                    <span className='drink-data'>Instructions :</span>
                    {cocktail.instructions}
                  </p>
                  <p>
                    <span className='drink-data'>Ingredients :</span>
                    {cocktail.ingredients.map((ingredient, index) => {
                      return ingredient ? (
                        <span key={index}>{ingredient}</span>
                      ) : null;
                    })}
                  </p>
                </div>
              </div>
            </section>
          )}
        </>
      )}
    </>
  );
};

export default SingleCockTail;
