const fadeElement =
document.querySelector('.fade-in');

const observer =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add(
                'visible'
            );
        }

    });

},{
    threshold:0.1
});

observer.observe(fadeElement);

const topButton =
document.querySelector('.scroll-top');

window.addEventListener(
'scroll',
()=>{

    if(window.scrollY > 600){

        topButton.classList.add('show');

    }else{

        topButton.classList.remove('show');
    }

});

topButton.addEventListener(
'click',
()=>{

    window.scrollTo({

        top:0,

        behavior:'smooth'
    });

});
