import { useState, useEffect } from 'react';
import useWordle from '../hooks/useWordle';
import Game from './Game';
import Hint from './Hint';
import Keypad from './Keypad';
import Modal from './Modal';

export default function Wordle({ solution }) {

    const [modalOpen, setModalOpen] = useState(false);
    const { currentGuess, handleKeyUp, allGuesses, isCorrect, turn, usedKeys, error, setError } = useWordle(solution);

    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp);

        if (isCorrect) {
            setTimeout(() => setModalOpen(true), 2000);
            window.removeEventListener('keyup', handleKeyUp);
        }

        if (turn > 5) {
            setTimeout(() => setModalOpen(true), 2000);
            window.removeEventListener('keyup', handleKeyUp);
        }

        return () => window.removeEventListener('keyup', handleKeyUp);

    }, [handleKeyUp, isCorrect, turn]);

    useEffect(() => {
        if (error) {
            setTimeout(() => setError(null), 3000);
        }
    }, [error]);

    return (
        <div className='mt-4 w-full flex flex-col items-center justify-center'>
            {error && (
                <div id="alert-2" className="flex p-4 mb-4 rounded-lg" role="alert">
                    <div className="text-white ml-3 text-sm font-medium">
                        {error}
                    </div>
                    <button type="button" className="ml-auto -mx-2 -my-1.5 text-white rounded-lg focus:ring-2 p-1.5 inline-flex h-8 w-8" aria-label="Close" onClick={() => setError(null)} >
                        <span className="sr-only">Close</span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
            )}
            <Game currentGuess={currentGuess} allGuesses={allGuesses} turn={turn} />
            <Keypad usedKeys={usedKeys} />
            <Hint solution={solution} />
            {modalOpen && <Modal isCorrect={isCorrect} turn={turn} solution={solution} setModalOpen={setModalOpen} />}
        </div>
    )
}
