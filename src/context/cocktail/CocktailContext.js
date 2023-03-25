import { useState, useEffect, useContext, createContext } from 'react';
import { getCocktails } from 'services/cocktailService';

const CocktailContext = createContext();

const CocktailProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [cocktails, setCocktails] = useState([]);
  const [searchTerm, setSearchTerm] = useState('a');

  useEffect(() => {
    (async function fetchCocktails() {
      const { data } = await getCocktails(searchTerm);
      const { drinks } = data;

      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            item;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        setCocktails(newCocktails);
        setLoading(false);
      } else {
        setCocktails([]);
      }
    })();
  }, [searchTerm]);

  return (
    <CocktailContext.Provider value={{ loading, cocktails, setSearchTerm }}>
      {children}
    </CocktailContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(CocktailContext);
};

export default CocktailProvider;
