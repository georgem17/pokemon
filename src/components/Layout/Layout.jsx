import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserNameContex } from "../../context/UserNameContex";
import './Layout.css';

const Layout = () => {
  const { removeUserName } = useContext(UserNameContex);
  const navigate = useNavigate();

  const logout = () => {
    removeUserName();
    navigate("/");
  };


  return (
    <>
      <header>
        <img
          onClick={logout}
          src="https://s3-alpha-sig.figma.com/img/ca59/d9ce/98042af437fdff212d3259040db2e2db?Expires=1685923200&Signature=nMY1KszWu1~qq7kxGEJRphghbXXvBvk33QotdeoaHfrIMQ8SeDK~5lLdVz-3ujOHlZooSwxX8YPNCciZ3nX8lvIU4WCSLeeZj-h-KAYc~Ne33A3-rjiyRaMfRDzeLJ0XRN6YrkgNiiPHMb-Yu-p0d0h7nr1X7dBwUJKgy943Z~LUuGWS4tV7OkNz4Cf7BrIt2SVqPH00e8rTh44igGTaalgTSgKZU9XFe~DprWjxWc7owZcOYhJO9l88xicwoCjlAz4RytbcQhgBzrAUsBce0VkmAsH3q0XRDTjWCA5t7ed95QJUh0kw9QmQEogeQilFaiUxqVJtfk9VJC4cNYzJ9Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="pokedex"
        />
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;