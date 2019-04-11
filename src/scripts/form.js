import apiManger from "./apiManager"
import htmlBuilder from "./HtmlBuilder"
import domManager from "./domManager"


let displayContainer = document.getElementById("display-area")

export default {
    newInterest() {
        let newInterestForm = htmlBuilder.elementBuilder("div", "newInterestForm")
        displayContainer.appendChild(newInterestForm)
        let newInterestButton = htmlBuilder.elementBuilder("button", "newInterestButton", "New Interest", "New")
        newInterestButton.addEventListener("click", function () {
                newInterestForm.appendChild(htmlBuilder.elementBuilder("label", undefined, "Name: "))
                newInterestForm.appendChild(htmlBuilder.elementBuilder("input", "name", "Interest Title"))
                newInterestForm.appendChild(htmlBuilder.elementBuilder("label", undefined, "Description: "))
                newInterestForm.appendChild(htmlBuilder.elementBuilder("input", "description", "Description"))
                newInterestForm.appendChild(htmlBuilder.elementBuilder("label", undefined, "Cost"))
                newInterestForm.appendChild(htmlBuilder.elementBuilder("input", "cost", "Cost"))
                let interestDrop = htmlBuilder.elementBuilder("select", "selLocation")
                console.log(interestDrop)
                newInterestForm.appendChild(interestDrop)
                apiManger.getAllInterests()
                    .then(interests => {
                        interests.forEach(interest => {
                            interestDrop.appendChild(htmlBuilder.elementBuilder("option", undefined, `${interest.place.name}`, `${interest.place.name}`))
                        })
                    })

                }
            )

            displayContainer.appendChild(newInterestButton)
        }
    }
