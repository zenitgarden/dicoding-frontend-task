// Change color nav when scrolling 
const nav = document.querySelector('.mainNav');
window.onscroll = () => {
    if (window.scrollY > 20) {
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }
};
// footer
document.getElementById('footer').innerHTML = `Copyright &copy; ${new Date().getFullYear()} All right reserved`

// Jangan klik Event
const click = document.querySelector(".mybutton");
var elem = document.documentElement;
const openFullscreen = () =>{
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}
const one = document.getElementById("core");
const two = document.getElementById("core2");
const state = true;

click.addEventListener('click', async function(event) {
    openFullscreen()
    one.hidden = true
    two.hidden = false
});

document.getElementById("exit").addEventListener("click", () => {
    one.hidden = false
    two.hidden = true
    click.setAttribute("hidden", true);
    const el = document.createElement('p');
    el.innerText = "Mohon maaf kalo ngagetin. Hehehe..."
    document.getElementsByClassName('home')[0].appendChild(el)
})

// Nav mobile

const mb = document.querySelector('.mb')
mb.addEventListener('click', () => {
    const nav = document.getElementsByTagName('nav')[0]
    nav.classList.toggle("flex")
    nav.classList.toggle("nav")
    nav.classList.toggle("nav-mb")
})

window.addEventListener("resize", () => {
    if(window.innerWidth > 768){
        const nav = document.getElementsByTagName('nav')[0]
        if(nav.getAttribute('class') === 'nav-mb'){
            nav.classList.remove('nav-mb')
            nav.classList.add('flex', 'nav')
        }
    }
})