let b = document.getElementsByTagName("button");
let display = document.querySelector(".display");
let equal = document.querySelector(".equal");
Array.from(b).map((button) => {
  // console.log(button)
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        display.innerText = "";
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = "Error";
          setTimeout(() => {
            setTimeout(() => {
              display.innerText = "";
            }, 2000);
            display.innerText = "dont do it again HA!!";
          }, 2000);
        }
        break;
      case "B":
        display.innerText = display.innerText.slice(0, -1);
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});

//####################################################
//Redux Test Man!!!!!!!!!!!!!!!
//####################################################
// const action = {
//   type: "withdraw_money",
// };
// let action2 = {
//   type: "deposit_money",
// };

// const reducer = (state = 1000, action) => {
//   switch (action.type) {
//     case "withdraw_money":
//       return (display.innerText = state - 100);
//     case "deposit_money":
//       return (display.innerText = state + 100);
//     default:
//       return state;
//   }
// };
// const store = Redux.createStore(reducer);

// store.dispatch(action);
// store.dispatch(action);
// store.dispatch(action2);
// console.log(store.getState());
//###########################################################
let ret=document.querySelector(".ret")
let images=Array.from(document.getElementsByTagName('img'))
images.map(im=>{
  im.addEventListener('click',(e)=>{
    // e.target.style.border = "2px solid balck"
    e.target.style.width = "0px"
    // e.target.style.height = "200px"
    // e.target.style.borderRadius = "50%"
    // e.target.style.margin = "10px"
    // e.target.style.boxShadow = "0 0 5px 5px black"
    e.target.style.transition = "all 2s"
    // e.target.style.cursor = "pointer"
    // e.target.style.transform = "scale(1.5)"
    })
  im.addEventListener('contextmenu',(e)=>{
    e.target.style.display='none'
  })

  ret.addEventListener('click',(e)=>{
    im.style.border = "2px solid balck"
    im.style.width = "330px"
    im.style.height = "200px"
    im.style.borderRadius = "50%"
    im.style.margin = "10px"
    im.style.boxShadow = "0 0 5px 5px black"
    im.style.transition = "all 1s"
    im.style.cursor = "pointer"
    im.style.transform = "scale(1.5)"
    e.target.innerText="Click On The Page => "
    e.target.style.backgroundColor='inherit'
    })
  im.addEventListener('contextmenu',()=>{
    im.style.display='none'
  })
})

 

// let img1=document.getElementsByClassName('.img1')
// let img2=document.getElementsByClassName('.img3')
// let img3=document.getElementsByClassName('.img3')
  
// let theimagePromise=new Promise((resolved,rejected)=>{
//     if(true){
//       resolved(img3.style.display='none')
//     }
//     rejected(console.log(Error('there is error man here !!!!!!!!!')))
// }).then(res=>res)
