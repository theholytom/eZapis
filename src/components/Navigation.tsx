import { Link } from "react-router-dom";

function Navigation() {
  return (
    <ul>
      <li><a href="https://www.cvf.cz">ČVS</a></li>
      <li>{<Link to="/matches/">Zapsat zápas</Link>}</li>
      <li>{<Link to="/matches/">Zápasy</Link>}</li>
    </ul>
  );
}

export default Navigation;
