const front = document.getElementById("front")
const back = document.getElementById("back")


front.addEventListener("click", function(){
      front.style.display = "none"
      back.style.display = "block"

})

back.addEventListener("click", function(){
    back.style.display = "none"
    front.style.display = "block"

})

