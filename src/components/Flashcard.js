// src/components/Flashcard.js
import React, { useState } from 'react';

const Flashcard = ({ flashcard, onNext, onPrevious, isFirst, isLast }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg max-w-sm mx-auto">
      <div
        className={`relative w-full h-64 cursor-pointer transition-transform transform ${flipped ? 'rotate-y-180' : ''}`}
        onClick={handleFlip}
      >
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 p-4 rounded-lg">
          <div className={`absolute w-full h-full bg-white rounded-lg p-4 transition-transform transform ${flipped ? 'rotate-y-180' : ''}`}>
            <div className={`front ${flipped ? 'hidden' : 'block'}`}>
              <div className="text-center text-xl font-semibold">{flashcard.question}</div>
            </div>
            <div className={`back ${flipped ? 'block' : 'hidden'}`}>
              <p className="text-center mt-4">{flashcard.answer}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex space-x-4 mt-4">
        <button
          onClick={onPrevious}
          disabled={isFirst}
          className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
        >
          Previous
        </button>
        <button
          onClick={onNext}
          disabled={isLast}
          className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Flashcard;
