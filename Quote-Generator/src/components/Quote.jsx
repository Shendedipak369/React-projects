import React, { useEffect, useState } from 'react'

const Quote = () => {
    const [quoteTest, setQuoteTest] = useState("");
    const [author, setAuthor] = useState("");


    const getQuote = async () => {

        try {
            const response = await fetch("https://api.quotable.io/random");
            const data = await response.json()

            const { content, author } = data;
            const twitterShareURL = `https://twitter.com/intent/tweet?text="${content}" - ${author}`;

            setQuoteTest(`"${content}"-${author}`);
            setAuthor(twitterShareURL);
        } catch (error) {

            console.log("Error fetching Data", error);

        }
    };

    useEffect(() => {
        getQuote()
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-400 to-cyan-400">
            <div className='w-2/4 p-5 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-md'>
                <h1 className='text-2xl font-bold my-5 '>Quote of the Day</h1>
                <p>{quoteTest}</p>

                <div className='mt-5 flex gap-5'>
                    <button
                        className='bg-blue-200 p-4 rounded shadow-md font-medium'
                        onClick={getQuote}>New Quote</button>
                    <a
                        className='text-blue-600 hover:text-blue-800 p-4 rounded shadow-md'
                        href={author} target='_blank'>Share on Twitter</a>
                </div>
            </div>
        </div>
    )
}

export default Quote



