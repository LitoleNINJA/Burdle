import { useState, useEffect } from "react";
import Image from 'next/image';
import hintImg from "../data/hint.png";

export default function Hint({ solution }) {

    const [hints, setHints] = useState([]);
    const [showHint, setShowHint] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const url = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${solution}?key=b943abd9-4a8e-4a7a-bf53-939a0bcbfa3a`;
        fetch(url, {
            method: "GET",
        })
            .then(response => response.json())
            .then(response => {
                setHints(response[0].shortdef);
            })
            .catch(err => console.error(err));
    }, [solution]);

    const handleHint = () => {
        setShowHint(!showHint);
    }

    useEffect(() => {
        if (showHint) {
            setTimeout(() => setShowHint(false), 10000);
        }
    }, [showHint]);

    return (
        <>
            <div className="hidden lg:flex absolute right-8 flex-col space-y-8">
                <button
                    onClick={handleHint}
                    className="btn px-3 py-1 rounded-full hover:bg-lightGray inline-flex items-center">
                    <h2 className="mr-2 flex items-center"><Image className="hintImg" src={hintImg} alt="hint" layout="fixed" /></h2>
                    <h2 className="text-1xl whitespace-nowrap">Stuck ? Get a Hint !</h2>
                </button>
                <button
                    className="hidden px-3 py-1 rounded-full bg-gray hover:bg-lightGray">
                    <h2>Hint 2</h2>
                </button>
                <button className="hidden px-3 py-1 rounded-full bg-gray hover:bg-lightGray">
                    <h2>Hint 3</h2>
                </button>
            </div>

            <div className={showHint ? 'fadeIn absolute left-8 flex flex-col space-y-8 bg-gray w-96 p-4 rounded-lg' : 'hidden'}>
                <h2 className="text-2xl italic">DEFINITION : </h2>
                <p className="text-base antialiased">{hints[0]}</p>
            </div>

            <div className='absolute left-4 sm:top-5 top-4 lg:hidden hover:cursor-pointer'
                onClick={() => setShowMenu(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="35px" height="35px"><linearGradient id="9iHXMuvV7brSX7hFt~tsna" x1="12.066" x2="34.891" y1=".066" y2="22.891" gradientUnits="userSpaceOnUse"><stop offset=".237" stopColor="#3bc9f3" /><stop offset=".85" stopColor="#1591d8" /></linearGradient><path fill="url(#9iHXMuvV7brSX7hFt~tsna)" d="M43,15H5c-1.1,0-2-0.9-2-2v-2c0-1.1,0.9-2,2-2h38c1.1,0,2,0.9,2,2v2C45,14.1,44.1,15,43,15z" /><linearGradient id="9iHXMuvV7brSX7hFt~tsnb" x1="12.066" x2="34.891" y1="12.066" y2="34.891" gradientUnits="userSpaceOnUse"><stop offset=".237" stopColor="#3bc9f3" /><stop offset=".85" stopColor="#1591d8" /></linearGradient><path fill="url(#9iHXMuvV7brSX7hFt~tsnb)" d="M43,27H5c-1.1,0-2-0.9-2-2v-2c0-1.1,0.9-2,2-2h38c1.1,0,2,0.9,2,2v2C45,26.1,44.1,27,43,27z" /><linearGradient id="9iHXMuvV7brSX7hFt~tsnc" x1="12.066" x2="34.891" y1="24.066" y2="46.891" gradientUnits="userSpaceOnUse"><stop offset=".237" stopColor="#3bc9f3" /><stop offset=".85" stopColor="#1591d8" /></linearGradient><path fill="url(#9iHXMuvV7brSX7hFt~tsnc)" d="M43,39H5c-1.1,0-2-0.9-2-2v-2c0-1.1,0.9-2,2-2h38c1.1,0,2,0.9,2,2v2C45,38.1,44.1,39,43,39z" /></svg>
            </div>

            {showMenu && (
                <div className='fadeIn absolute left-0 top-0 flex flex-col space-y-12 bg-gray w-64 p-4 h-full z-10'>
                    <div className='flex flex-row justify-end' onClick={() => setShowMenu(false)}>
                        <svg className='hover:cursor-pointer' fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px" height="30px">
                            <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" />
                        </svg>
                    </div>

                    <div >
                        <h2 className='menuItem text-xl text-center'
                            onClick={() => {
                                setShowMenu(false);
                                setShowModal(true);
                            }}
                        >Stuck ? Get a hint !</h2>
                    </div>
                </div>
            )}

            {showModal && (
                <div className='fadeIn absolute flex flex-col bg-gray w-96 p-4 h-80 z-10'>
                    <div className='flex flex-row justify-end' onClick={() => setShowModal(false)}>
                        <svg className='hover:cursor-pointer' fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px" height="30px">
                            <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl italic text-center">DEFINITION : </h2>
                    <p className="text-base antialiased mt-4">{hints[0]}</p>
                </div>
            )}
        </>
    )
}
