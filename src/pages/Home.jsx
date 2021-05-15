import Loading from "../components/Loading";
import SearchForm from "../components/SearchForm";
import CockTailList from "./../components/CockTailList";

import { useGlobalContext } from "./../utils/context";

const Home = () => {
  const { cocktails, loading } = useGlobalContext();

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {cocktails.length < 1 ? (
            <h2 className="section-title">
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
