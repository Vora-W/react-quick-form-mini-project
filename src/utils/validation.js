export function validateSurveyForm({ name, email, selectedMovie }) {
  const errors = {
    name: '',
    email: '',
    movie: '',
  };

  let hasError = false;

  if (!name) {
    hasError = true;
    errors.name = 'โปรดใส่ชื่อของคุณ';
  }

  if (!email) {
    hasError = true;
    errors.email = 'โปรดใส่อีเมลของคุณ';
  }

  if (!selectedMovie) {
    hasError = true;
    errors.movie = 'กรุณาเลือกหนังที่คุณชอบ';
  }

  return { hasError, errors };
}
