const multiply = (x, y) => { return x * y }

const app = new Vue({

    el: '#app',
    data: {
        countOfResource: 0,
        attributesPerResource: 0
    },
    computed: {
        multiplication: function () {
        const i = parseInt(this.countOfResource)
        const j = parseInt(this.attributesPerResource)
        return `Total Attributes: ${multiply(i, j)}`
        }
    }
})



