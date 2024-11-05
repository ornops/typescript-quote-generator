import React from 'react'
import './button-styles.scss'

interface Props {
	text: string;
}


const Button: React.FC<Props> = ({ text }) => {
	return (
		<div>
			<button>{text}</button>
		</div>
	)
}

export default Button;
