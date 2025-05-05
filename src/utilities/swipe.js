import '../components/category.js';


export function initSwipe(parent) {
    // Find alle elementerne .category inde i det angivne parent-element.
// Disse elementer repræsenterer hver deres kategori, som vi vil tilføje swipe-funktionalitet til.
const containers = parent.querySelectorAll(".category");
    if (!containers.length) {
      console.warn("No .category elements found for swipe");
      return;
    }

    containers.forEach(containers => {
        let initialX;
        let currentX;
    
        containers.addEventListener("pointerdown", startTouch);
        containers.addEventListener("pointermove", moveTouch);
        containers.addEventListener("pointerup", endTouch);


        function startTouch(event) {
          //event.preventDefault();
          initialX = event.clientX;
          console.log("Swipe started at:", initialX);
          event.target.closest("a").classList.remove("animate");
        }
    
      
        function moveTouch(event) {
            currentX = event.clientX
            movedX = currentX - initialX;
            //tjek om den er favorit
            event.target.closest(".article").style.backgroundColor = "green" //fins ud af hvilken det egentlig skal være...måske en div omkring a-tagget?
            if (movedX < 0) {
            event.target.closest("a").style.left =  movedX + "px";
            }
        }

        function endTouch(event) {
            initialX = undefined;
            if (movedX < -100) {
                //vise element bookmark
                // gemme/slettelogik her
                event.target.closest("a").classList.add("animate");
                event.target.closest("a").style.left = "0px"; //var -100px før
            }

            // hvis man vil lave det så den ikke falder tilbage selv:
            // if(movedX > 100) {
            //     event.target.closest(".article").style.left = "0px";
            // }


            }
 
      });
    }




let movedX


//containers.addEventListener("pointerdown", startTouch);
//containers.addEventListener("pointermove", moveTouch);
//containers.addEventListener("pointerup", endTouch);





