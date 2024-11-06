import React, { useState } from 'react'
import './main-panel-styles.scss'


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
			{error ? <p>Error: {error}</p> : <p>{quote}</p>}
			<button onClick={getQuote}>New Quote</button>
		</div>
	)
}

export default MainPanel
