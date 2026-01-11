import { Link } from "react-router-dom";


const Home = () => {
    return (
      <div className="container">
        <h1>Выберите класс</h1>
        <div className="grid">
          {[...Array(11)].map((_, i) => (
            <Link key={i} to={`/class/${i + 1}`} className="card">
              {i + 1} класс
            </Link>
          ))}
        </div>
      </div>
    );
};

export default Home