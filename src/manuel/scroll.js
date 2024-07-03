import ScrollReveal from 'scrollreveal'
const sr = ScrollReveal()
sr.reveal('article', {
    duration: 500,
    origin: 'left',
    distance: '300px',
    reset: true
}, 30)

sr.reveal('img', {
    delay: 500
})