// src/components/FlashcardApp.js
import React, { useState, useEffect } from 'react';
import Flashcard from './Flashcard';
import axios from 'axios';

const FlashcardApp = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchFlashcards = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/flashcards');
        setFlashcards(response.data);
      } catch (error) {
        console.error('Error fetching flashcards:', error);
      }
    };

    fetchFlashcards();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, flashcards.length - 1));
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div>
      {flashcards.length > 0 ? (
        <Flashcard
          flashcard={flashcards[currentIndex]}
          onNext={handleNext}
          onPrevious={handlePrevious}
          isFirst={currentIndex === 0}
          isLast={currentIndex === flashcards.length - 1}
        />
      ) : (
        <div>No flashcards available</div>
      )}
    </div>
  );
};

export default FlashcardApp;
