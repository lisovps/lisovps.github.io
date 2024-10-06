"use strict"
window.addEventListener("DOMContentLoaded", ()=>{
    const burger = document.querySelector('.burger'),
        menu = document.querySelector('.header-top-flexbox'),
        wrapper = document.querySelector('.wrapper'),
        modal_content = document.querySelector('.modal-content'),
        btn_modal = document.querySelectorAll('.btn--modal'),
        modal_cloused = document.querySelector('.modal-cloused'),
        ower = document.querySelector('.ower');
    let check = true;
    let check_modal = true;

    burger.addEventListener('click', ()=>{
        if(check){
            menu.classList.add('header-top-flexbox--active');
            ower.classList.add('ower--active');
            burger.classList.add('burger--ative');
            // wrapper.classList.add('wrapper--hiden');
            check = !check
            
            
        }else{
            wrapper.classList.remove('wrapper--hiden');
            burger.classList.remove('burger--ative');
            menu.classList.remove('header-top-flexbox--active');
            ower.classList.remove('ower--active');
            check = !check
            
        }
    })
    ower.addEventListener('click', ()=>{
        if(!check){
            wrapper.classList.remove('wrapper--hiden');
            menu.classList.remove('header-top-flexbox--active');
            ower.classList.remove('ower--active');
            check = !check 
        }
    })
    // modal 
    modal_cloused.addEventListener('click', ()=>{
        if (!check_modal){
            modal_content.classList.remove('modal-content--active', 'op');
            check_modal=true

        }

    })
    btn_modal.forEach((i)=>{
        i.addEventListener('click',()=>{
            if(check_modal){
                modal_content.classList.add('modal-content--active', 'op');
                check_modal=false;
                
            }
        })
    })
    // modal 

    // tabs 
    const tabs = document.querySelectorAll('.about-item'),
        tabs_parent = document.querySelector('.about-list'),
        tabs_content = document.querySelectorAll('.about-imgbox');
        
        function hideTabContent(){
            tabs_content.forEach(i => {
                i.classList.remove('about-imgbox--active', 'op');
            });
            tabs.forEach(t => {
                t.classList.remove('about-item--active');
        
            });
        };
    
        function showTabContent(i=0){
            tabs_content[i].classList.add('about-imgbox--active' , 'op');
            tabs[i].classList.add('about-item--active');
            
        }
        hideTabContent();
        showTabContent();
    
        tabs_parent.addEventListener('click', (e) => {
            e.preventDefault();
            const target = e.target;
            
            if(target){
                tabs.forEach((item, i) => {
                    if(target == item){
                        hideTabContent();
                        showTabContent(i);
                    }
                } );
            }
        });


        //scroll
    const smoothLinks = document.querySelectorAll('a[href^="#"]');
    for (let smoothLink of smoothLinks) {
        smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};
})