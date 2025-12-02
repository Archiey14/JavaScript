const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");

function changeText(element, text, color, time, onSuccessCallback, onFailureCallback) {

    setTimeout(() => {

        if (element) {


            element.textContent = text;
            element.style.color = color;
            if (onSuccessCallback) {
                onSuccessCallback();
            }
        } else {
            if (onFailureCallback) {
                onFailureCallback();
            }
        }

    }, time)

}


//pyramid of doom
changeText(heading1, "one", "yellow", 1000, () => {
    changeText(heading2, "two", "red", 2000, () => {
        changeText(heading3, "three", "blue", 1000, () => {
            changeText(heading4, "four", "green", 1000, () => {
                changeText(heading5, "five", "orange", 2000, () => {
                    changeText(heading6, "six", "cyan", 1000, () => {
                        
                    }, () => {console.log("Heading6 does not exist") })
                }, () => {console.log("Heading5 does not exist")  })
            }, () => {console.log("Heading4 does not exist")  })
        }, () => {console.log("Heading3 does not exist")  })
    }, () => {console.log("Heading2 does not exist")  })
}, () => {console.log("Heading1 does not exist")  })
