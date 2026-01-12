import { useState } from 'react';
import movies from '../data/movies';

function SurveyForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [selectedMovie, setSelectedMovie] = useState('');
    const [comment, setComment] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorText, setErrorText] = useState({
      name: '',
      email: '',
      movie: '',
    });

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasError = false;
    let newErrorText = {
      name: '',
      email: '',
      movie: '',
    };

    if (!name) {
      hasError = true;
      newErrorText.name = 'โปรดใส่ชื่อของคุณ';
    }
    if (!email) {
      hasError = true;
      newErrorText.email = 'โปรดใส่อีเมลของคุณ';
    }
    if (!selectedMovie) {
      hasError = true;
      newErrorText.movie = 'กรุณาเลือกหนังที่คุณชอบ';
    }

    setErrorText(newErrorText);

    if (!hasError) {
      setIsSubmitted(true);
    }
  };
        
  return (
    <>  
      <div className="h-full bg-gradient-to-r from-purple-600 to-indigo-600 flex flex-col items-center justify-center">
        <h1 className="text-2xl text-center font-bold text-white p-4"> Movie Survey</h1>
      </div>
      {!isSubmitted ? (
      <form className="flex flex-col items-start justify-start" 
      onSubmit={handleSubmit} >
        <div className="flex flex-col items-start justify-evenly">
          <label htmlFor="name">ชื่อ</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="กรุณากรอกชื่อของคุณ"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errorText && <p className="text-red-500 p-4">{errorText.name}</p>}
        </div>
        <div className="flex flex-col items-start justify-evenly"> 
          <label htmlFor="email">อีเมล</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errorText && <p className="text-red-500 p-4">{errorText.email}</p>}
        </div>
        <div className="flex flex-col items-start justify-evenly">
          <p>เลือกหนังที่คุณชอบ</p>
          <div>
            {movies.map((movie) => (
              <label key={movie.title}>
                  <input
                    type="radio"
                    id={movie.title}
                    name="movie"
                    value={movie.title}
                    checked={selectedMovie === movie.title}
                    onChange={(e) => setSelectedMovie(e.target.value)}
                  />
                  <span>{movie.title} ({movie.year})</span>
                <p>Director: {movie.director}</p>
              </label>
            ))}
          </div>
          {errorText.movie && <p className="text-red-500 p-4">{errorText.movie}</p>}
        </div>
        <div className="flex flex-col items-start justify-evenly">
          <label htmlFor="comment">ความคิดเห็นเกี่ยวกับหนัง</label>
          <textarea
            id="comment"
            name="comment"
            placeholder="พิมพ์ความคิดเห็นของคุณที่นี่..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />

        </div>
        <div className="flex flex-row items-center justify-between">
          <button
            type="reset"
            className="bg-white text-black px-4 py-2 rounded-md"
          >
            รีเซ็ต
          </button>
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-md 
            hover:brightness-75"
          >
            ส่งแบบสำรวจ
          </button>
        </div>
      </form>
      ) : (
        <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-between">
          <h2 className="text-2xl text-center font-bold text-green-500 p-4">ส่งแบบสำรวจสำเร็จ</h2>
          <div className="flex flex-col items-center justify-between">
          <p className="text-center text-gray-500 p-4">ชื่อ: {name}</p>
          <p className="text-center text-gray-500 p-4">อีเมล: {email}</p>
          <p className="text-center text-gray-500 p-4">เลือกหนัง: {selectedMovie}</p>
          </div>
          <div className="flex flex-col items-center justify-between">
          <p className="text-center text-gray-500 p-4">ความคิดเห็น: </p>
          <p className="text-center text-gray-500 p-4">{comment}</p>
          </div>
        </div>
        <button
          onClick={() => setIsSubmitted(false)}
          className="bg-black text-white px-4 py-2 rounded-md 
          hover:brightness-75"
        >
          ส่งแบบสำรวจใหม่
        </button>
        </div>
      )}
    </>
  );
}

export default SurveyForm;
