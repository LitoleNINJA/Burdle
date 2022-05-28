

export default function Row({ guess, currentGuess }) {

  if (guess) {
    return (
      <div className="row grid gap-2 grid-cols-5 grid-rows-1 h-14">
        { guess.map((letter, index) => (
          <div key={index} className={`flex items-center justify-center border-2 border-gray ${letter.color}`} >  
            <h3 className="text-3xl uppercase font-bold">{letter.key}</h3>
          </div>
        ))}
      </div>
    )
  }

  if (currentGuess) {
    let letters = currentGuess.split('');
    return (
      <div className="row grid gap-2 grid-cols-5 grid-rows-1 h-14">
        {letters.map((letter, index) => (
          <div key={index} className="filled flex items-center justify-center border-2 border-gray" >
            <h3 className="text-3xl uppercase font-bold">{letter}</h3>
          </div>
        ))}
        {
          [...Array(5 - letters.length)].map((_, index) => (
            <div key={index} className="flex items-center justify-center border-2 border-gray" >
              <h3></h3>
            </div>
          ))
        }
      </div>
    )
  }

  return (
    <div className="grid gap-2 grid-cols-5 grid-rows-1 h-14">
        <div className="flex items-center justify-center border-2 border-gray">
            <h3></h3>
        </div>
        <div className="flex items-center justify-center border-2 border-gray">
            <h3></h3>
        </div>
        <div className="flex items-center justify-center border-2 border-gray">
            <h3></h3>
        </div>
        <div className="flex items-center justify-center border-2 border-gray">
            <h3></h3>
        </div>
        <div className="flex items-center justify-center border-2 border-gray">
            <h3></h3>
        </div>
    </div>
  )
}
