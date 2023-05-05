const dropdownMenuItems = document.querySelectorAll('.has-dropdown');

/* 
if (dropdownMenuItems) {
  dropdownMenuItems.forEach(item => {
    if ('ontouchstart' in window) {
      item.addEventListener('touchstart', event => {
        item.classList.toggle('active');
      });
    } else {
      item.addEventListener('click', event => {
        if (item.classList.contains('active')) {
          item.classList.add('active');
        } 
      });
  
      item.addEventListener('mouseleave', event => {
        item.classList.remove('active');
      });
    }
  });
}
 */


//smooth scroll
const btnsToScroll = document.querySelectorAll('.cta');
const sectionToScroll = document.querySelectorAll('.what')[0];

/* const topValue = sectionToScroll.getBoundingClientRect().y + sectionToScroll.getBoundingClientRect().height; */

btnsToScroll.forEach(el => {
    el.addEventListener('click', (e) => {
        e.preventDefault()

        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
        });
    })
})

const isExamplesPage = window.location.href.includes("examples.html")
if (isExamplesPage) {
  const index = window.location.href.split("?")[1].replace("section=", "");

  const sections = document.querySelectorAll('.examples__item')
  sections.forEach((el, i) => {
    if(i != index) {
      el.style.display = 'none'
    }
  })
}

function goToSection(index) {
  window.location.href = `/examples.html?section=${index}`;
}

//animation link arrow

const links = document.querySelectorAll('.showMore');
const svgs = document.querySelectorAll('.showMoreSVG path');




function arrowHover(index) {
    svgs[index].style.transform = `translateX(45%)`;

    links[index].addEventListener('mouseleave', () => {
      svgs[index].style.transform = `translateX(0)`;
    })


/*   links.forEach(el => {
    el.addEventListener('mouseover', () => {
      svgs.forEach(el => {
        el.style.transform = `translateX(45%)`
      })
    })

    el.addEventListener('mouseleave', () => {
      svgs.forEach(el => {
        el.style.transform = `translateX(0)`
      })
    })
  }) */
}