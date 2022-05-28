import { useState, useEffect, Fragment } from 'react';
import useWordle from '../hooks/useWordle';
import Game from './Game';
import Keypad from './Keypad';
import Modal from './Modal';

export default function Wordle({ solution }) {

    const [modalOpen, setModalOpen] = useState(false);
    const { currentGuess, handleKeyUp, allGuesses, isCorrect, turn, usedKeys } = useWordle(solution);

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

    return (
        <div className='mt-4 w-full flex flex-col items-center justify-center'>
            {/* <h1 className='text-3xl'>Solution - {solution}</h1>
            <h1 className='text-3xl my-4'>Current Guess - {currentGuess}</h1> */}
            <Game currentGuess={currentGuess} allGuesses={allGuesses} turn={turn} />
            <Keypad usedKeys={usedKeys} />
            {modalOpen && <Modal isCorrect={isCorrect} turn={turn} solution={solution} setModalOpen={setModalOpen} />}
        </div>
    )
}
