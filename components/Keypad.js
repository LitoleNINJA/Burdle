import Image from 'next/image';
import arrow from '../data/left.png';
export default function Keypad({ usedKeys }) {

    const letters = [
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
        ['z', 'x', 'c', 'v', 'b', 'n', 'm']]

    const handleClick = (key) => {
        const event = new KeyboardEvent('keyup', {
            key: key,
        });
        window.dispatchEvent(event);
    }

    return (
        <>
            <div className="keypad flex flex-row justify-center flex-wrap mt-8" >
                {letters[0].map((letter, i) => {
                    const color = usedKeys[letter];
                    return (
                        <div
                            key={i}
                            onClick={() => handleClick(letter)}
                            className={`sm:w-10 sm:h-12 m-1 w-6 h-10 flex items-center justify-center rounded bg-lightGray ${color} hover:cursor-pointer`}>
                            <h3 className="uppercase font-bold">{letter}</h3>
                        </div>
                    )
                })}
            </div>
            <div className="keypad flex flex-row justify-center flex-wrap" >
                {letters[1].map((letter, i) => {
                    const color = usedKeys[letter];
                    return (
                        <div
                            key={i}
                            onClick={() => handleClick(letter)}
                            className={`sm:w-10 sm:h-12 m-1 w-6 h-10 flex items-center justify-center rounded bg-lightGray ${color} hover:cursor-pointer`}>
                            <h3 className="uppercase font-bold">{letter}</h3>
                        </div>
                    )
                })}
            </div>
            <div className="keypad flex flex-row justify-center flex-wrap" >
                <div
                    onClick={() => handleClick('Enter')}
                    className={`sm:h-12 sm:w-20 m-1 w-18 h-10 flex items-center justify-center rounded bg-lightGray hover:cursor-pointer`}>
                    <h3 className="uppercase font-bold">ENTER</h3>
                </div>
                {letters[2].map((letter, i) => {
                    const color = usedKeys[letter];
                    return (
                        <div
                            key={i}
                            onClick={() => handleClick(letter)}
                            className={`sm:w-10 sm:h-12 m-1 w-6 h-10 flex items-center justify-center rounded bg-lightGray ${color} hover:cursor-pointer`}>
                            <h3 className="uppercase font-bold">{letter}</h3>
                        </div>
                    )
                })}
                <div
                    onClick={() => handleClick('Backspace')}
                    className={`sm:h-12 sm:w-12 m-1 w-10 h-10 flex items-center justify-center rounded bg-lightGray hover:cursor-pointer`}>
                    <Image src={arrow} alt="Back" />
                </div>
            </div>
        </>
    )
}
