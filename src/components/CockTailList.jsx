import Loading from './Loading';
import CockTail from './CockTail';
import { useGlobalContext } from 'utils/context';
import CockTail from './CockTail';

const CockTailList = () => {
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
            <section className='section'>
              <h2 className='section-title'>Cocktails</h2>
              <div className='cocktails-center'>
                {cocktails.map((cocktail) => (
                  <CockTail key={cocktail.id} {...cocktail} />
                ))}
              </div>
            </section>
          )}
        </>
      )}
    </>
  );
};

export default CockTailList;
