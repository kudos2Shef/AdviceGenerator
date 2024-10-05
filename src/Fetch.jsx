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
        {/*<img id='line-desk' src='src/assets/pattern-divider-desktop.svg'></img>
        <img id='line-mob' src='src/assets/pattern-divider-mobile.svg'></img>*/
        }
        <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg" id='line-desk'><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
        <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg"  id='line-mob'><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>

        <br/>
        <button onClick={fetchAdvice} id='dice'>
          { /* <img src='src/assets/icon-dice.svg' alt='dice' id='icon' ></img>*/
            }
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" alt='dice' id='icon'><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg>	
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

