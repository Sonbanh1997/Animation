const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var box_lists = $$('.hidden');
// console.log(box_lists);



//code slider
function slide(){
    var index = 0;
    setInterval(function(){
        for(var box of box_lists){
            box.classList.remove('active');
        }
        // console.log(box_lists[index]);
        box_lists[index].classList.toggle('active');
        index++;
        if(index >= box_lists.length){
            index = 0;
        }
    }, 2000);
}
    
slide()



