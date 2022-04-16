
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

function Question({ques, ans}){

	const [showAns, setShowAns] = useState(false)

	return(
		<div className='question'>
			<div className='question__head'>
				<p>{ques}</p>
				<button onClick={() => setShowAns(!showAns)}>
					{showAns ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faChevronDown} /> }
					
					{/* <FontAwesomeIcon icon="fa-solid fa-angle-up" /> */}
					{/* <FontAwesomeIcon icon="fa-solid fa-chevron-down" /> */}
				</button>
			</div>
			{
				showAns &&
				<p className='answer'>{ans}</p>
			}

		</div> 
	)
}

export default Question