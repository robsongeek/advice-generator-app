
window.onload = () => {
    advice()
}
document.getElementById('advice-update').addEventListener('click', () => {
    advice()
});
const advice = async () => {
    const res = await fetch('https://api.adviceslip.com/advice')
    const data = await res.json()
    console.log(data)
    document.getElementById('advice-id').innerHTML = `Advice #${data.slip.id}`
    document.getElementById('advice-descripton').innerHTML = `<p>"${data.slip.advice}"</p>`
}

