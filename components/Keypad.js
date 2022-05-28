
export default function Keypad({ usedKeys }) {

    const letters = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];

    return (
        <div className="keypad flex flex-row justify-center flex-wrap mt-8" >
            {letters && letters.map((letter, i) => {
                const color = usedKeys[letter];
                return (
                    <div 
                    key={i} 
                    className={`m-1 w-10 h-12 flex items-center justify-center rounded bg-lightGray ${color}`}>
                        <h3 className="uppercase font-bold">{letter}</h3>
                    </div>
                )
            })}
        </div>
    )
}
