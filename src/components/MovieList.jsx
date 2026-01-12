function MovieList({ movies, selectedMovie, onChange, error }) {
  return (
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
              onChange={onChange}
            />
            <span>{movie.title} ({movie.year})</span>
            <p>Director: {movie.director}</p>
          </label>
        ))}
      </div>
      {error && <p className="text-red-500 p-4">{error}</p>}
    </div>
  );
}

export default MovieList;
