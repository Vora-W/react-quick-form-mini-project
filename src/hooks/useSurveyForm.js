import { useState } from 'react';
import { validateSurveyForm } from '../utils/validation';

export function useSurveyForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedMovie, setSelectedMovie] = useState('');
  const [comment, setComment] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    movie: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const { hasError: validationHasError, errors: newErrors } = validateSurveyForm({ 
      name, 
      email, 
      selectedMovie 
    });
    setErrors(newErrors);
    setHasError(validationHasError);

    if (!validationHasError) {
      setIsSubmitted(true);
    }
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setSelectedMovie('');
    setComment('');
    setErrors({ name: '', email: '', movie: '' });
    setHasError(false);
    setIsSubmitted(false);
  };

  return {
    // State
    name,
    email,
    selectedMovie,
    comment,
    isSubmitted,
    hasError,
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
