// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const timer = document.querySelector('.date');
timer.innerText = new Date().getFullYear();
// ********** close links ************
const navToggle =  document.querySelector('.nav-toggle');
const linksContainer =  document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click',function(){
    //linksContainer.classList.toggle('show-links');
    // Element.getBoundingClientRect() method is used.
    const containerHeight = linksContainer.getBoundingClientRect().height;
    //console.log(containerHeight=linksContainer.getBoundingClientRect());//links-container by default is height:0;so, height=0
    const linksHeight = links.getBoundingClientRect().height;
    //console.log(linksHeight);
    if(containerHeight == 0){
        linksContainer.style.height = `${linksHeight}px`;
    }
    else{
        linksContainer.style.height = 0;
    }
});
// ********** fixed navbar ************

const navbar = document.getElementById('nav');
const topLinks = document.querySelector('.top-link');

//only window property that returns the number of pixels the document has been scrolled vertically.
window.addEventListener('scroll', function(){
    //console.log(window.pageYOffset);  
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    if(scrollHeight > navHeight){
        navbar.classList.add('fixed-nav');
        //console.log(navbar.getBoundingClientRect());//when scrolled my nav should be white
    }
    else{
        navbar.classList.remove('fixed-nav');
    }

    if(scrollHeight > 500){
        topLinks.classList.add('show-link');
    }
    else{
        topLinks.classList.remove('show-link');
    }
});



// ********** smooth scroll ************
// select links

const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function (link) {
    link.addEventListener('click',function(e){
        e.preventDefault();//The preventDefault() method of the Event interface tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be.
    // navigate to specific spot
    // slice extracts a section of a string without modifying original string
    const id = e.currentTarget.getAttribute('href').slice(1);
    //console.log(id);
    const element = document.getElementById(id);

    const containerHeight = linksContainer.getBoundingClientRect().height;
    const navHeight = navbar.getBoundingClientRect().height;

    const fixedNav =  navbar.classList.contains('fixed-nav') ;
        //offsetTop - A Number, representing the top position of the element, in pixels
        let position = element.offsetTop - navHeight;
        //console.log(position);
    if(!fixedNav){
        position = position - navHeight;
    }

    if (navHeight > 82){
        position = position + containerHeight;
    }
    window.scrollTo({
        left:0,
        top: position,
    });
    linksContainer.style.height = 0; 
    });

});






