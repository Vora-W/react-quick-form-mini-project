import movies from '../data/movies';
import MovieList from './MovieList';
import SurveySuccess from './SurveySuccess';
import { useSurveyForm } from '../hooks/useSurveyForm';

function SurveyForm() {
  const {
    name,
    email,
    selectedMovie,
    comment,
    isSubmitted,
    errors,
    setName,
    setEmail,
    setSelectedMovie,
    setComment,
    handleSubmit,
    resetForm,
  } = useSurveyForm();

  return (
    <>
      <div className="h-full bg-gradient-to-r from-purple-600 to-indigo-600 flex flex-col items-center justify-center">
        <h1 className="text-2xl text-center font-bold text-white p-4">Movie Survey</h1>
      </div>

      {!isSubmitted ? (
        <form className="flex flex-col items-start justify-start" onSubmit={handleSubmit}>
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
            {errors.name && <p className="text-red-500 p-4">{errors.name}</p>}
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
            {errors.email && <p className="text-red-500 p-4">{errors.email}</p>}
          </div>

          <MovieList
            movies={movies}
            selectedMovie={selectedMovie}
            onChange={(e) => setSelectedMovie(e.target.value)}
            error={errors.movie}
          />

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
              type="button"
              onClick={resetForm}
              className="bg-white text-black px-4 py-2 rounded-md"
            >
              รีเซ็ต
            </button>
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-md hover:brightness-75"
            >
              ส่งแบบสำรวจ
            </button>
          </div>
        </form>
      ) : (
        <SurveySuccess
          name={name}
          email={email}
          selectedMovie={selectedMovie}
          comment={comment}
          onReset={resetForm}
        />
      )}
    </>
  );
}

export default SurveyForm;
