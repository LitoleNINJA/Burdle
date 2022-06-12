

export default function Modal({ isCorrect, turn, solution, setModalOpen }) {
    return (
        <div className="modal fixed w-full h-full top-0 left-0">
            {isCorrect ? (
                <div className="bg-white p-4 pb-10 sm:w-[480px] w-11/12 rounded-lg shadow-xl mx-auto my-48 flex flex-col items-center justify-center space-y-8">
                    <div className='self-end hover:cursor-pointer' onClick={() => {
                        setModalOpen(false);
                        window.location.reload();
                    }}>
                        <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px" height="30px">
                            <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" />
                        </svg>
                    </div>
                    <h1 className="sm:text-6xl text-5xl text-black font-bold">You Win !</h1>
                    <h3 className="flex flex-row sm:text-4xl text-3xl font-bold uppercase text-black">Solution :
                        <pre className="text-green"> {solution}</pre>
                    </h3>
                    <h3 className="sm:text-3xl text-2xl text-black font-bold">Number of guesses : {turn}</h3>
                </div>
            ) : (
                <div className="bg-white p-4 pb-10 w-[480px] rounded-lg shadow-xl mx-auto my-60 flex flex-col items-center justify-center space-y-8">
                    <div className='self-end hover:cursor-pointer' onClick={() => {
                        setModalOpen(false)
                        window.location.reload()
                    }}>
                        <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px" height="30px">
                            <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" />
                        </svg>
                    </div>
                    <h3 className="flex flex-row sm:text-4xl text-3xl font-bold uppercase text-black">Solution :
                        <pre className="text-green"> {solution}</pre>
                    </h3>
                    <h3 className="sm:text-3xl text-2xl text-black font-bold">Better luck next time !</h3>
                </div>
            )}
        </div>
    )
}
