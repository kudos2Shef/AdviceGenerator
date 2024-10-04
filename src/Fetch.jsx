import { useState, useEffect } from 'react'


function Api() {
    const [advice, setAdvice] = useState("It is easy to sit up and take notice, what's difficult is getting up and taking action.")

	const [id, setId] = useState(117)
    const fetchAdvice = () =>{

		fetch(`https://api.adviceslip.com/advice`)
			.then((response) => {
				return response.json()
			})

			.then((data) => {
               // console.log(data.slip.advice)
                //console.log(data.slip.id)
               
                setAdvice(data.slip.advice)
                setId(data.slip.id)
			})
    
    
}

    return(
        <section className='container'>
        <div id='inner-container'>
            <div id='ad-container'>       
            <p id='ad_id'>ADVICE #{id}</p>
            <span id='ad_content'>
            <i className='fa fa-quote-left'></i>
            <blockquote >{advice}</blockquote>
            <i className='fa fa-quote-right'></i>
            </span>
            </div>

        <br/>
        <img id='line-desk' src='src\assets\images\pattern-divider-desktop.svg'></img>
        <img id='line-mob' src='src\assets\images\pattern-divider-mobile.svg'></img>

        <br/>
        <button onClick={fetchAdvice} id='dice'>
            <img src='src/assets/images/icon-dice.svg' alt='dice' id='icon' ></img>	
        </button>
        </div>
 
        </section>
    );
}



export default function Fetch() {
	return (
		<>
			<Api />
		</>
	);
}

