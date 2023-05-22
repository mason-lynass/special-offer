const submit = document.getElementById('submit')
const BG = document.querySelector('#BG')
const body = document.getElementsByTagName('body')[0]

submit.addEventListener('click', e => {
    e.preventDefault()
    BG.remove()
    console.log(body.style.backgroundColor)
    body.style.backgroundColor = '#254A16'
    console.log('clicked!')
})