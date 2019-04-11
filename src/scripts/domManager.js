import htmlBuilder from "./HtmlBuilder"
import apiManager from "./apiManager"

let displayContainer = document.getElementById("display-area")

export default {

    listAllInterest(){
        
        apiManager.getAllInterests()
        .then(interests => interests.forEach(interest => {
            let interestDiv = htmlBuilder.elementBuilder("div",  `interest--${interest.id}`)
        
        interestDiv.appendChild(htmlBuilder.elementBuilder("h2", `name--${interest.id}`, `Title: ${interest.name}`))
        interestDiv.appendChild(htmlBuilder.elementBuilder("article", `description--${interest.id}`, `Description: ${interest.description}`))
        interestDiv.appendChild(htmlBuilder.elementBuilder("article", `review--${interest.id}`, `Review: ${interest.review}`))
        interestDiv.appendChild(htmlBuilder.elementBuilder("article", `cost--${interest.id}`, `Cost: ${interest.cost}`))
        interestDiv.appendChild(htmlBuilder.elementBuilder("article", `place--${interest.id}`, `Location: ${interest.place.name}`))

        displayContainer.appendChild(interestDiv)
        }) )

    }
}