# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

Desktop:-
![adgen_desk](https://github.com/user-attachments/assets/ab5eaf65-714c-4e1d-8819-1d48fadc0903)

Mobile:-
![adgen_mob](https://github.com/user-attachments/assets/61bd6941-89c2-4dfd-b32f-9636743213f2)


### Links

- Solution URL: [Solution](https://github.com/kudos2Shef/AdviceGenerator)
- Live Site URL: [Live](https://kudos2shef.github.io/AdviceGenerator/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Vite](https://nextjs.org/) - JS Build Tool

### What I learned


I learned what API is and how API implemented in react to fetch data. Next time I'll use other library available for api to fetch data in react. I also learned about react components that are applied for code reusability purpose. 

```
fetch(`https://api.adviceslip.com/advice`)
			.then((response) => {
				return response.json()
			})

			.then((data) => {
               
                setAdvice(data.slip.advice)
                setId(data.slip.id)
			})
    
```




### Useful resources

- [Example resource 1](https://www.freecodecamp.org/news/how-to-fetch-api-data-in-react/) - This helped me to learn API functions. I will use it going forward.
- [Example resource 2](https://www.guvi.in/blog/how-to-fetch-and-display-data-from-api-in-react/) - This is an amazing article which helped me understand API  again.
- [Example resource 3](https://react.dev/learn/importing-and-exporting-components) - How importing and exporting components work in react. 


## Author

- Frontend Mentor - [@kudos2shef](https://www.frontendmentor.io/profile/kudos2Shef)
