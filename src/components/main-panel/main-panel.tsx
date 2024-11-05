import React from 'react'
import './main-panel-styles.scss'
import Button from '../button/button'

const MainPanel = () => {
	return (
		<div className='main-panel-container'>
			Quote
			<Button text="New Quote" />
		</div>
	)
}

export default MainPanel
