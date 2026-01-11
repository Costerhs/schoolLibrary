import { Link, useNavigate, useParams } from "react-router-dom";
import './ClassPage.css'
const ClassPage = ({ books, subjectColors }) => {

    const { classNum } = useParams();
    const navigate = useNavigate();
    const subjects = books[classNum];

    if (!subjects) {
      return (
        <div className="container">
          <button className="back" onClick={() => navigate(-1)}>← Назад</button>
          <p>Нет книг для этого класса</p>
        </div>
      );
    }
  
    return (
      <div className="container">
        <button className="back" onClick={() => navigate(-1)}>← Назад</button>
        <h1>{classNum} класс</h1>
        <div className="grid">
          {Object.keys(subjects).map((sub) => {
            const item = subjects[sub][0]; 
            const themeColor = subjectColors[sub] || "#ccc";

            return (
              <Link 
                key={sub} 
                to={`/class/${classNum}/${sub}`} 
                className="classCard"
                style={{ 
                  backgroundColor: themeColor,
                }}
              >
                {item?.title || sub} 
              </Link>
            );
          })}
        </div>
      </div>
    );
};

export default ClassPage;