import Loading from 'components/Loading';
import CockTailList from 'components/CockTailList';
import SearchForm from 'components/SearchForm';
import { useGlobalContext } from 'context/cocktail/CocktailContext';

const Home = () => {
  const { cocktails, loading } = useGlobalContext();

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {cocktails.length < 1 ? (
            <h2 className='section-title'>
              No cocktails matched your search criteria
            </h2>
          ) : (
            <main>
              <SearchForm />
              <CockTailList />
            </main>
          )}
        </>
      )}
    </>
  );
};

export default Home;
