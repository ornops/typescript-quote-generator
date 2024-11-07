import React, { useState } from 'react'
import './main-panel-styles.scss'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';


const MainPanel = () => {
	const [quote, setQuote] = useState('Click button to get Quotes')
	const [error, setError] = useState(null)



	const getQuote = () => {
		fetch('https://api.api-ninjas.com/v1/quotes', {
			headers: {
				'X-Api-Key': 'PVUe+B5O8BaZJs8NJf/Adw==IhfcxFJrOKpQAl3K'
			}
		})
			.then(response => response.json())
			.then(resp => {
				if (resp.length > 0) {
					setQuote(resp[0].quote)
				} else {
					setQuote('No Quotes Available')
				}
			})
			.catch(err => setError(err.message))
	}
	return (
		<div className='main-panel-container'>
			<div className='quote-left-container'><FaQuoteLeft size={60} /></div>
			<div className='quote-text-container'>{error ? <p className='quote-text'>Error: {error}</p> : <p className='quote-text'>{quote}</p>}</div>
			<div className='quote-right-container'><FaQuoteRight size={60} /></div>
			<div className="button" onClick={getQuote}>New Quote</div>
			{/* <div className="button-container"><button onClick={getQuote}>New Quote</button></div> */}


		</div>
	)
}

export default MainPanel
