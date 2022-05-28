
export default function Keypad({ usedKeys }) {

    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    return (
        <div className="keypad flex flex-row justify-center flex-wrap mt-8" >
            {letters && letters.map((letter, i) => {
                const color = usedKeys[letter];
                return (
                    <div 
                    key={i} 
                    className={`m-1 w-10 h-12 flex items-center justify-center rounded bg-lightGray ${color}`}>
                        <h3>{letter}</h3>
                    </div>
                )
            })}
        </div>
    )
}
