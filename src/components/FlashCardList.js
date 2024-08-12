// src/components/FlashcardList.js
import React from 'react';

const FlashcardList = ({ flashcards, onSelectFlashcard, onEditFlashcard, onDeleteFlashcard }) => {
  return (
    <div className="flashcard-list">
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Flashcard List</h3>
      <ul className="list-disc pl-5">
        {flashcards.map(card => (
          <li key={card.id} className="flex items-center justify-between mb-2 p-2 bg-white dark:bg-gray-900 rounded-md shadow-sm">
            <span className="text-gray-700 dark:text-gray-300">{card.question} - {card.answer}</span>
            <div>
              <button 
                onClick={() => onEditFlashcard(card)}
                className="px-2 py-1 bg-yellow-500 text-white font-semibold rounded-md shadow hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:bg-yellow-400 dark:hover:bg-yellow-500"
              >
                Edit
              </button>
              <button 
                onClick={() => onDeleteFlashcard(card.id)}
                className="ml-2 px-2 py-1 bg-red-600 text-white font-semibold rounded-md shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-red-500 dark:hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlashcardList;
