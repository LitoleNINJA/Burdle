import Row from './Row';

export default function Game({ currentGuess, allGuesses, turn }) {
  return (
    <div className='space-y-2 w-80 mt-8'>
        {allGuesses.map((guess, index) => {
            if (turn === index) {
              return <Row key={index} guess={guess} currentGuess={currentGuess} />
            } else {
              return <Row key={index} guess={guess} />
            }
        })}
    </div>
  )
}
