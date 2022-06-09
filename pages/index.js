import Head from 'next/head';
import { useState, useEffect } from 'react';
import Wordle from '../components/Wordle'
import words from '../data/words.json'

export default function Home() {

  const [solution, setSolution] = useState('');

  useEffect(() => {
    const res = words.solutions;
    const randomSolution = res[Math.floor(Math.random() * res.length)];
    setSolution(randomSolution.word);
  }, [])

  return (
    <>
      <Head>
        <title>Burdle</title>
      </Head>
      <div className="flex flex-col items-center bg-black p-4 divide-y-2 divide-gray">
        <h1 className='lg:text-5xl md:text-4xl sm:text-3xl text-xl font-bold'>Burdle - Better Wordle</h1>
        {solution && <Wordle solution={solution} />}
      </div>
    </>
  )
}