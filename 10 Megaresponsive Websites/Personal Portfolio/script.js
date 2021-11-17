const navbar = document.querySelector(".navbar");

const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll('section')
const navbarLink = document.querySelectorAll('.navbar-link')
const progress = document.querySelector('.progress-bars-wrapper')
const progressBarPercents = [97, 89, 85, 87, 80, 70]

window.addEventListener("scroll", () => {
    mainFN()
    if (window.pageYOffset >= navbarOffsetTop) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky")
    }

    sections.forEach((section, i) => {
        if (window.pageYOffset >= section.offsetTop - 10) {
            navbarLink.forEach(navbarLink => {
                navbarLink.classList.remove("change")
            })
            navbarLink[i].classList.add("change")
        }
    })

    if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
        document.querySelectorAll('.progress-percent').forEach((el, i) => {
            el.style.width = `${progressBarPercents[i]}%`
            el.previousElementSibling.firstElementChild.textContent = progressBarPercents[i]
        })
        
    }
});

const mainFN = () => {
    if (window.pageYOffset >= navbarOffsetTop) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky")
    }

    sections.forEach((section, i) => {
        if (window.pageYOffset >= section.offsetTop - 10) {
            navbarLink.forEach(navbarLink => {
                navbarLink.classList.remove("change")
            })
            navbarLink[i].classList.add("change")
        }
    })

    if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
        document.querySelectorAll('.progress-percent').forEach((el, i) => {
            el.style.width = `${progressBarPercents[i]}%`
            el.previousElementSibling.firstElementChild.textContent = progressBarPercents[i]
        })
        
    }
}

mainFN()

window.addEventListener('resize', () => {
    window.location.reload()
})