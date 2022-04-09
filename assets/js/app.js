let cl = console.log;

let creamstone = document.getElementById('sweets');
let searchItems = document.getElementById('search');


let CreamStoneArray = [
  {
    img:"./assets/images/strawberries.jpg",
    flavour: "strawberries",
    prize:"180 Rs"
  },
   {
     img:"./assets/images/blackberry.jpg",
     flavour:"blackberry",
     prize:"175 Rs"
   },
   {
     img:"./assets/images/hotchocolatecocoa.jpg",
     flavour:"hot chocolate cocoa",
     prize:"200 Rs"
   },
   {
     img:"./assets/images/chocolateicecreamwithbrownie.jpg",
     flavour:"chocolate ice cream with brownie",
     prize:"200 Rs"
   },
   {
     img:"./assets/images/cherryicecream.jpg",
     flavour:"cherry ice cream.",
     prize:"220 Rs"
   },
   {
     img:"./assets/images/darkchocolatemilkshake.jpg",
     flavour:"dark chocolate milkshake",
     prize:"250 Rs"
   },
   {
     img:"./assets/images/chocolate.jpg",
     flavour:"chocolate",
     prize:"160 Rs"
   },
   {
     img:"./assets/images/fruiticecream.jpg",
     flavour:"fruit ice cream",
    prize:"70 Rs"
   },
   {
     img:"./assets/images/vanilla.jpg",
     flavour:"vanilla",
     prize:"250 Rs"
   },
   {
     img:"./assets/images/brownie.jpg",
     flavour:"brownie",
     prize:"400 Rs"
   },
];


   function forPrintSweets(array){
     cl(array)
      array.forEach(ele=>{
        creamstone.innerHTML+=`
     <div class='col-md-4'>
     <img src="${ele.img}">
    <h3>${ele.flavour}</h3>
    <h5>${ele.prize}</h5>
     </div>`;
    });
   }

   forPrintSweets(CreamStoneArray);


   searchItems.addEventListener('keyup',findCream);

   function findCream(ele){
     creamstone.innerHTML="";
     ele.target.value.toLowerCase();
    let a = CreamStoneArray.filter(e =>{
    let b = ele.target.value;
    return e.flavour.toLowerCase().match(/[a-z0-9]+/g).includes(b);
    })
    forPrintSweets(a)
   }
   


