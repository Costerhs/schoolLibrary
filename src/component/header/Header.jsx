import { Link } from "react-router-dom";


const Header = () => {
    return (
      <header className="header">
        <Link to="/" className="logo">📚 School Library</Link>
        <nav>
          <Link to="/about">О нас</Link>
        </nav>
      </header>
    );
  };
export default  Header