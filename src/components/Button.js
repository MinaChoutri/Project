import "./Button.css";
import { Link } from "react-router-dom";

export function Button() {
  return (
    <Link to="inscription">
      <button className="btn">S'inscrire</button>
    </Link>
  );
}
