import { useEffect, useState } from "react";
import "./FiltersForm.css";
import { Form } from "react-router-dom";
import { getAllTypes } from "../../../services/getAllTypes";

const FiltersForm = ({nameInitial, typeInitial}) => {
  const [types, setTypes] = useState([]);
  const [nameValue, setnameValue] = useState(nameInitial);
  const [typeValue, setTypeValue] = useState(typeInitial);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setnameValue(newValue);
  };

  const handleTypeChange = (e) => {
    const newTypeValue = e.target.value;
    setTypeValue(newTypeValue);
  }


  useEffect(() => {
    const loadTypes = async () => {
      const typeList = await getAllTypes();
      setTypes(typeList);
    };

    loadTypes();
  }, []);  
  
  useEffect(() => {
    setnameValue(nameInitial);
  }, [nameInitial]);

  useEffect(() => {
    setTypeValue(typeInitial);
  }, [typeInitial]);

  return (
    <Form>
      <h2>Filtros para la busqueda</h2>

      <div className="container_search">
        <div className="search">
          <input
            value={nameValue}
            onChange={handleChange}
            type="text"
            placeholder="Escribe a tu pokemon"
            name="pokemonName"
          />
        </div>

        <button>Buscar 🔍</button>

        <select
          name="pokemonType"
          value={typeValue}
          onChange={handleTypeChange}
        >
          <option value="">All</option>
          {types.map((type) => (
            <option className="munu_type" key={type.id} value={type.id}>
              {type.name}
            </option>
          ))}
        </select>
      </div>
    </Form>
  );
};

export default FiltersForm;