document.querySelectorAll('.story-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('active')
        btn.nextElementSibling.classList.toggle('active')
    })
})