import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UserNameForm from "../../components/home/UserNameForm/UserNameForm";
import "./Home.css";
import { UserNameContex } from "../../context/UserNameContex";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from ?? "/pokedex";
  const { saveUserName } = useContext(UserNameContex);

  const handleSendName = (userNameValue) => {
    saveUserName(userNameValue);
    navigate(from);
  };
  
  return (
    <section>
      <div className="banner">
        <img
          src="https://s3-alpha-sig.figma.com/img/ca59/d9ce/98042af437fdff212d3259040db2e2db?Expires=1685923200&Signature=nMY1KszWu1~qq7kxGEJRphghbXXvBvk33QotdeoaHfrIMQ8SeDK~5lLdVz-3ujOHlZooSwxX8YPNCciZ3nX8lvIU4WCSLeeZj-h-KAYc~Ne33A3-rjiyRaMfRDzeLJ0XRN6YrkgNiiPHMb-Yu-p0d0h7nr1X7dBwUJKgy943Z~LUuGWS4tV7OkNz4Cf7BrIt2SVqPH00e8rTh44igGTaalgTSgKZU9XFe~DprWjxWc7owZcOYhJO9l88xicwoCjlAz4RytbcQhgBzrAUsBce0VkmAsH3q0XRDTjWCA5t7ed95QJUh0kw9QmQEogeQilFaiUxqVJtfk9VJC4cNYzJ9Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="pokedex"
        />
      </div>

      <h1 className="home_title">!Hola entrenador!</h1>
      <p className="home_descrip">Para poder comenzar, dame tu nombre</p>

      <div className="home_form">
        <UserNameForm onSendName={handleSendName} />
      </div>
      
    </section>
  );
};

export default Home;