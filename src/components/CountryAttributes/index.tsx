import React from "react";
import { useTheme } from "../../store";
import { Link } from "react-router-dom";
import AttributesContainer from "./styles";

interface Props {
  countries: any[];
}

const CountryAttributes: React.FC<Props> = ({ countries }) => {
  const { mode } = useTheme();

  const {
    name: { common },
    flags,
    altSpellings: nativeName,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders,
  } = countries[0];
  const currency: any = Object.values(currencies);
  const countryCurrency = currency[0].name;

  const language = Object.values(languages);
  const countryLanguages = language.map((item: any, index: number) => (
    <span key={index}>{item}, </span>
  ));

  const borderCountry =
    borders &&
    borders.map((border: string, index: number) => (
      <span className="borders" key={index}>
        <Link to={`/details/${border}`}>
          <button>{border}</button>
        </Link>
      </span>
    ));

  // data-aos="fade-up"
  //   data-aos-duration="1000"

  return (
    <AttributesContainer mode={mode}>
      <div className="country-flag">
        <img src={flags.png} alt="flag-img" />
      </div>

      <div className="country-attributes">
        <div className="attribute-container">
          <div className="attribute-1">
            <h3>{common}</h3>
            <p>
              Native Name: <span className="details-span">{nativeName[1]}</span>
            </p>
            <p>
              Population: <span className="details-span">{population}</span>
            </p>
            <p>
              Region: <span className="details-span">{region}</span>
            </p>
            <p>
              Sub Region: <span className="details-span">{subregion}</span>
            </p>
            <p>
              Capital: <span className="details-span">{capital}</span>
            </p>
          </div>
          <div className="attribute-2">
            <p>
              Top Level Domain: <span className="details-span">{tld[0]}</span>
            </p>
            <p>
              Currencies:{" "}
              <span className="details-span">{countryCurrency}</span>
            </p>
            <p>
              Languages:{" "}
              <span className="details-span">{countryLanguages}</span>
            </p>
          </div>
        </div>
        {borderCountry && (
          <div className="border-countries">
            <p>Border Countries: </p>
            {borderCountry}
          </div>
        )}
      </div>
    </AttributesContainer>
  );
};

export default CountryAttributes;
