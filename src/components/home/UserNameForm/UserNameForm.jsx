import { useRef, useState } from 'react';
import './UserNameForm.css';

const UserNameForm = ({ onSendName }) => {
  const [UserNameValue, setUserNameValue] = useState("");
  const [nameError, setNameError] = useState("");
  const tocado = useRef(false);

  const handleChange = (e) => {
    const nameValue = e.target.value;
    if (!tocado.current) tocado.current = true;

    if (!nameValue) setNameError("No ingresaste un nombre!");
    else if (/[^a-z]/i.test(nameValue))
      setNameError("Solo ingresar letras y espacios");
    else if (!/^[a-z]{2,} ?$/.test(nameValue))
      setNameError("Su nombre debe de tener 2 letras");
    else setNameError("");

    setUserNameValue(nameValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!nameError && tocado.current) onSendName(UserNameValue);
  };

    // 💥💥💥 ME QUEDE EN 1:20:00 💥💥💥
  
  return (
    <form onSubmit={handleSubmit}>
      {Boolean(nameError) && <p>{nameError}</p>}
      <input className='loading'
        type="text"
        placeholder='Tu nombre ...'
        value={UserNameValue}
        onChange={handleChange}
      />
      <button className='init' type='submit'>Comenzar</button>
    </form>
  );
};

export default UserNameForm;