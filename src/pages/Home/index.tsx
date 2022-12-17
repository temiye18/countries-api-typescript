import React, { useEffect, useState, useRef } from "react";
import useAsync from "../../hooks/useAsync";
import usePaginate from "../../hooks/usePaginate";
import Container from "../../components/Utilities/Container/Container.styles";
import { FilterSearch, Countries, Loading, Pagination } from "../../components";
import Main from "./styles";

const url = "https://restcountries.com/v3.1";
const Home = () => {
  const [region, setRegion] = useState("all");

  const pageRef = useRef<HTMLDivElement>(null);

  const scrollPageToView = () => {
    pageRef.current!.scrollIntoView({ behavior: "smooth" });
  };

  const { isLoading, isError, countries, fetchCountries } = useAsync();

  const {
    currentPage,
    postPerPage,
    maxPageLimit,
    minPageLimit,
    handlePageChange,
    handlePrev,
    handleNext,
    resetPage,
  } = usePaginate(20, 5, scrollPageToView);

  const handleFilter = (filteredRegion: string) => {
    resetPage();
    fetchCountries(url);
    setRegion(filteredRegion);
  };

  const handleSearch = async (searchValue: string) => {
    resetPage();
    let regionEndpoint = `name/${searchValue}`;
    // setRegion("all");
    if (searchValue === "") {
      return fetchCountries(url);
    }
    fetchCountries(url, regionEndpoint);
  };

  useEffect(() => {
    fetchCountries(url);
  }, [fetchCountries]);

  // const reload = () => {
  //   window.location.reload();
  // };

  // console.log(countries);

  const filtered = countries.filter(
    (country) => country.region === region || region === "all"
  );

  // console.log(filtered);

  const indexOfLastItem = currentPage * postPerPage;
  const indexOfFirstItem = indexOfLastItem - postPerPage;

  const allCountries = (
    <div className="countries" ref={pageRef}>
      {filtered.slice(indexOfFirstItem, indexOfLastItem).map((country) => (
        <Countries key={country.name.common} {...country} />
      ))}
    </div>
  );

  return (
    <Main>
      <Container>
        <FilterSearch onFilter={handleFilter} onSearch={handleSearch} />
        {isLoading && <Loading />}
        {/* {!isLoading && isError && (
          <h2 className="error-message">{errorMessage}</h2>
        )}
        {!isLoading && isError && <button onClick={reload}>Reload</button>} */}
        {!isLoading && !isError && filtered.length === 0 && (
          <h2 className="error-message">
            Ooops!! Country can't be found in this region. Please select "All"
            to search for countries from all regions
          </h2>
        )}
        {!isLoading && !isError && filtered.length > 0 && allCountries}

        {!isLoading && !isError && filtered.length > 0 && (
          <Pagination
            handlePageChange={handlePageChange}
            handlePrev={handlePrev}
            handleNext={handleNext}
            currentPage={currentPage}
            maxPageLimit={maxPageLimit}
            minPageLimit={minPageLimit}
            countriesLength={filtered.length}
            postPerPage={postPerPage}
          />
        )}
      </Container>
    </Main>
  );
};

export default Home;
