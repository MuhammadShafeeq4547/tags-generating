let arr = []

        let inp = document.querySelector(".input")
        let parent1 = document.querySelector(".parent")
        inp.focus()
        inp.addEventListener("input", function () {
            let inpValue = inp.value
            console.log(arr);

            arr = inpValue.split(",")
            let Filter = arr.filter(ele => ele.trim())
            parent1.innerHTML = ""
            Filter.forEach((elem, indx) => {
                let Div = document.createElement("div")
                Div.style.width = "100px"
                Div.style.height = "50px"
                // Div.style.border = "3px solid green"
                Div.style.backgroundColor = "white"
                Div.style.borderRadius = "20px"
                Div.style.marginLeft = "10px"
                Div.style.marginTop = "10px"
                Div.style.display = "flex"
                Div.style.alignItems = "center"
                Div.style.justifyContent = "center"
                Div.style.fontSize = "22px"
                Div.style.cursor = "pointer"
                Div.innerHTML = elem
                parent1.appendChild(Div)
                Update(Div)

            })
        })


        let arr2 = ["yellow", "white"]

        let TimeOut

        function Update(Divs) {

            window.addEventListener("keydown", function (s) {

                if (s.key == "Enter") {
                    TimeOut = setInterval(function(){
                        let Random = Math.floor(Math.random() * arr2.length)
                        Divs.style.backgroundColor = arr2[Random]
                    },150)
                }
                    setTimeout(function(){
                        clearInterval(TimeOut)
                    },2000)
            })
            
        }