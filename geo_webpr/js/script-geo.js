window.addEventListener('DOMContentLoaded', () =>{
    const burger = document.querySelector('.burger'),
        burger_menu = document.querySelector('.burger-menu');
    let check= true;
    
    burger.addEventListener('click', () =>{
        if(check){
            burger_menu.classList.add('burger-menu-active');
            burger.classList.add('burger-active');
            check = !check
        }else{
            burger_menu.classList.remove('burger-menu-active');
            burger.classList.remove('burger-active');
            check = !check
            

        }
    })
})