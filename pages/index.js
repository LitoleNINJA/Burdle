import Wordle from '../components/Wordle'

export default function Home({ solution }) {

  return (
    <div className="flex flex-col items-center bg-black p-4 ">
      <h1 className='text-5xl font-bold'>Burdle - Better Wordle</h1>
      {solution && <Wordle solution={solution} />}
    </div>
  )
}

Home.getInitialProps = async () => {
  const res = await fetch('http://localhost:3001/solutions', {
    method: 'GET',
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': 0
    }
  });
  const json = await res.json();
  const randomSolution = json[Math.floor(Math.random() * json.length)];
  return {
    solution: randomSolution.word
  }
}