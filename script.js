const floorHeightInPxiels  = getComputedStyle(document.querySelector("html")).getPropertyValue("--floor-height");
// const flooeHeight = parseInt(floorHeightInPxiels.slice(0, flooeHeight.length - 2))
let liftCount, floorCount;

const liftAvailability  = new Map()
const liftAt = new Map()
const pendingCalls = []

document.getElementById("submit").addEventListener("click", (event) => {
    event.preventDefault()

    const floorInput  = document.querySelector("#floors-input")
    const liftInput = document.querySelector("#lifts-input");
    floorCount = floorInput.value;
    liftCount = liftInput.value;
    // console.log(floorCount, liftCount)

    if(floorCount > 100 || floorCount < 1 || liftCount < 1 || liftCount > 100) {
        alert("Input out of range add in range (1-100)");
        return
    }

    const inputBox = document.querySelector("#input-box");
    inputBox.style.display = "none"

    renderFloors(floorCount)
    renderLifts(liftCount)
   
})

function handleLiftCall(event) {
    const calledFloor = event?.path[2];
    const floorId = calledFloor.id

}