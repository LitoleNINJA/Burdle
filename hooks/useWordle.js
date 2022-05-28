import { useState } from 'react';

export default function useWordle(solution) {
    const [turn, setTurn] = useState(0);
    const [currentGuess, setCurrentGuess] = useState('');
    const [allGuesses, setAllGuesses] = useState([...Array(6)]);
    const [history, setHistory] = useState([]);
    const [isCorrect, setIsCorrect] = useState(false);
    const [usedKeys, setUsedKeys] = useState({});

    const formatGuess = () => {
        let array = [...solution];
        let formattedGuess = [...currentGuess].map(letter => {
            return {key: letter, color: 'gray'}
        });

        formattedGuess.forEach((letter, i) => {
           if (solution[i] === letter.key) {
                formattedGuess[i].color = 'green';
                array[i] = null;
           }
        });

        formattedGuess.forEach((letter, i) => {
            if(array.includes(letter.key) && letter.color !== 'green') {
                formattedGuess[i].color = 'yellow';
                array[array.indexOf(letter.key)] = null;
            }
        });

        return formattedGuess;
    }

    const addGuess = (formatted) => {
        if (currentGuess === solution)
            setIsCorrect(true);
        setAllGuesses((cur) => {
            let newGuesses = [...cur];
            newGuesses[turn] = formatted;
            return newGuesses;
        });
        setHistory(cur => [...cur, formatted]);
        setTurn(turn + 1);
        setUsedKeys((cur) => {
            formatted.forEach(letter => {
                const color = cur[letter.key];
                if (letter.color === 'green') {
                    cur[letter.key] = 'green';
                    return;
                }
                if (letter.color === 'yellow' && color !== 'green') {
                    cur[letter.key] = 'yellow';
                    return;
                }
                if (letter.color === 'gray' && color !== ('green' || 'yellow')) {
                    cur[letter.key] = 'gray';
                    return;
                }
            });
            return cur;
        })
        setCurrentGuess('');
    }

    const handleKeyUp = ({ key }) => {
        if (key === 'Enter') {
            if (turn > 5) {
                console.log('No more turns !');
                return;
            }
            if (history.includes(currentGuess)) {
               console.log('Already guessed !');
               return;
            }
            if (currentGuess.length !== 5) {
                console.log('Word must be 5 letters long !');
                return;
            }
            const formatted = formatGuess();
            addGuess(formatted);
        }
        if (key === 'Backspace') {
            setCurrentGuess(currentGuess.slice(0, -1));
            return;
        }
        if (/^[a-zA-Z]$/.test(key)) {
            if(currentGuess.length < 5) {
                setCurrentGuess(cur => cur + key);
            }
        }
    }

    return {
        turn,
        currentGuess,
        allGuesses,
        isCorrect,
        handleKeyUp,
        usedKeys
    }
}

