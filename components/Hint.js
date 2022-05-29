

export default function Hint() {

    const handleHint = async () => {
        const res = await fetch("https://od-api.oxforddictionaries.com/api/v2/entries/en/fashion", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "api_id": "b7632e3e",
                "api_key": "23e11eb238ccaddee55bdb11f71393d0"
            },
        });
        console.log(res);
    }

    return (
        <div className="absolute right-0 mr-8 flex flex-col space-y-8">
            <button
                onClick={handleHint}
                className="px-3 py-1 rounded-full bg-gray hover:bg-lightGray">
                <h2 className="text-1xl"><pre>Stuck ? Get a Hint !</pre></h2>
            </button>
            <button
                className="hidden px-3 py-1 rounded-full bg-gray hover:bg-lightGray">
                <h2>Hint 2</h2>
            </button>
            <button className="hidden px-3 py-1 rounded-full bg-gray hover:bg-lightGray">
                <h2>Hint 3</h2>
            </button>
        </div>
    )
}
