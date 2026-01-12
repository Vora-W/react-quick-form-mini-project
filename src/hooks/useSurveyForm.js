import { useState } from 'react';
import { validateSurveyForm } from '../utils/validation';

export function useSurveyForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedMovie, setSelectedMovie] = useState('');
  const [comment, setComment] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    movie: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const { hasError, errors: newErrors } = validateSurveyForm({ 
      name, 
      email, 
      selectedMovie 
    });
    setErrors(newErrors);

    if (!hasError) {
      setIsSubmitted(true);
    }
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setSelectedMovie('');
    setComment('');
    setErrors({ name: '', email: '', movie: '' });
    setIsSubmitted(false);
  };

  return {
    // State
    name,
    email,
    selectedMovie,
    comment,
    isSubmitted,
    errors,
    // Setters
    setName,
    setEmail,
    setSelectedMovie,
    setComment,
    // Actions
    handleSubmit,
    resetForm,
  };
}
