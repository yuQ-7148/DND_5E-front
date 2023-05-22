window.addEventListener('resize', () => {
    calculate()
})
function calculate(isFirst) {
    const width = document.documentElement.clientWidth
    const value = width > 760 ? 760 : width
    document.documentElement.style.fontSize = value / 7.6 + 'px'
}
calculate()
