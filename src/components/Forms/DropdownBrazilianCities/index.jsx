import { useEffect, useState } from "react";
import { fetchCitiesForState } from "../../../helpers/ibge";

const DropdownBrazilianCities = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetchCitiesForState("RS").then((cities) => {
      setCities(cities);
    });
  }, []);

  return (
    <select id="city">
      <option value="">Selecione uma cidade</option>
      {cities.map((city) => {
        const { id, nome } = city;
        return (
          <option key={id} value={id}>
            {nome}
          </option>
        );
      })}
    </select>
  );
};

export default DropdownBrazilianCities;
