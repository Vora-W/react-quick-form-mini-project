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

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!email) {
    hasError = true;
    errors.email = 'โปรดใส่อีเมลของคุณ';
  } else if (!emailRegex.test(email)) {
    hasError = true;
    errors.email = 'รูปแบบอีเมลไม่ถูกต้อง';
  }

  if (!selectedMovie) {
    hasError = true;
    errors.movie = 'กรุณาเลือกหนังที่คุณชอบ';
  }

  return { hasError, errors };
}
