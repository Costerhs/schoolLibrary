import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
    return (
      <div className="container">
        <button className="back" onClick={() => navigate(-1)}>← Назад</button>
        <h1>О нас</h1>
        <p>Онлайн библиотека школьных учебников с 1 по 11 класс.
            Сделал Арзыбеков Нуралим ИСТПз-1-24
        </p>
      </div>
    );
  };

export default About