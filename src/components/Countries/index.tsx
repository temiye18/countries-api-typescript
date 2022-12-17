import React from "react";
import { Link } from "react-router-dom";

import { AppRoute } from "../../constants";
import { useTheme } from "../../store";
import Card from "./styles";
import "aos/dist/aos.css";

interface Country {
  name: { common: string };
  region: string;
  capital: string;
  population: string;
  flags: { png: string };
}

const Countries: React.FC<Country> = ({
  name: { common },
  region,
  capital,
  population,
  flags: { png },
}) => {
  const { mode } = useTheme();
  return (
    <Card mode={mode} data-aos="fade-up" data-aos-duration="1000">
      <div className="country-card">
        <img src={png} alt="flag_img" />

        <div className="country-details">
          <h3>{common}</h3>
          <p>
            Population: <span className="country-span">{population}</span>
          </p>
          <p>
            Region: <span className="country-span">{region}</span>
          </p>
          <p>
            capital: <span className="country-span">{capital}</span>
          </p>
          <Link to={`${AppRoute.details}/${common}`} className="country-links">
            <button>Learn More</button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default Countries;
