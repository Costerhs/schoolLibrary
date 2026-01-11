import { useNavigate, useParams } from "react-router-dom";

const SubjectPage = ({ books, subjectColors }) => {
    const { classNum, subject } = useParams();
    const navigate = useNavigate();
    
    const list = books[classNum]?.[subject] || [];
    const themeColor = subjectColors[subject] || "#ccc";

    return (
      <div className="container">
        <button className="back" onClick={() => navigate(-1)}>← Назад</button>
        <h1 style={{ color: themeColor }}>
            {list.length > 0 ? list[0].title : "Книги не найдены"}
        </h1>

        <div className="grid">
          {list.map((b, i) => {
            const fileName = `${subject}${classNum}.pdf`;
            const filePath = b.file || `/books/${fileName}`;
            
            const imgPath = b.img || `/books/${subject}${classNum}.jpg`;

            return (
              <div key={i} className="book" style={{ borderTop: `5px solid ${themeColor}` }}>
                <img 
                  src={imgPath} 
                  alt={b.title} 
                  className="book-cover" 
                  style={{ width: '100%', borderRadius: '8px', minHeight: '150px', backgroundColor: '#f0f0f0' }} 

                  onError={(e) => { e.target.style.display = 'none' }} 
                />
                
                <h3>{b.title}</h3>
                {/* <p><strong>Автор:</strong> {b.author || "Не указан"}</p> */}
                
                <a 
                  href={filePath} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="download"
                  style={{ 
                      backgroundColor: themeColor,
                      color: '#fff',
                      padding: '10px 20px',
                      borderRadius: '5px',
                      textDecoration: 'none',
                      display: 'inline-block',
                      marginTop: '10px'
                  }}
                >
                  Читать PDF
                </a>
              </div>
            );
          })}
        </div>

        {list.length === 0 && (
          <p style={{ textAlign: 'center', marginTop: '20px' }}>
            Книги для {classNum} класса по этому предмету еще не добавлены.
          </p>
        )}
      </div>
    );
};

export default SubjectPage;