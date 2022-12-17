import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CountryAttributes } from "../../components";
import { useTheme } from "../../store";
import useAsync from "../../hooks/useAsync";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import Container from "../../components/Utilities/Container/Container.styles";
import { Loading } from "../../components";
import Section from "./styles";

const url = `https://restcountries.com/v3.1`;

const CountryDetails = () => {
  const { name } = useParams();

  const { mode } = useTheme();
  const {
    isLoading,
    isError,
    countries,
    fetchCountries: fetchACountry,
    errorMessage,
  } = useAsync();

  const navigate = useNavigate();

  const goToPreviousPath = () => {
    navigate(-1);
  };

  const endPoint = `name/${name}`;
  useEffect(() => {
    fetchACountry(url, endPoint);
  }, [fetchACountry, endPoint]);

  return (
    <Section mode={mode}>
      <Container>
        <div className="country-details">
          <div className="back-link">
            <button className="back" onClick={goToPreviousPath}>
              <HiOutlineArrowNarrowLeft className="back-arrow" />
              <span>Back</span>
            </button>
          </div>

          {isLoading && <Loading />}

          {!isLoading && !isError && countries && countries.length > 0 && (
            <CountryAttributes countries={countries} />
          )}

          {!isLoading && isError && (
            <h2 className="error-text">{errorMessage}</h2>
          )}
        </div>
      </Container>
    </Section>
  );
};

export default CountryDetails;
