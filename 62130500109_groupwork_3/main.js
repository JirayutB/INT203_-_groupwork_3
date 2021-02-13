const app = {
    data() {
        return {
            title: 'Photo Gallery ()',
            tasks: [{image: 'images/1.jpg',article: 'Blaziken, Fire/Fighting Pokemon',done: false},
            {image: 'images/2.jpg',article: 'Pidgeot, Normal/Flying Pokemon' ,done: false},
            {image: 'images/3.jpg',article: 'Xerneas, Legendary Fairy Pokemon' ,done: false}
        ]
        }
    },
    methods: {
        toggleDone(index){
            this.tasks[index].done = !this.tasks[index].done
        }
    },
    computed: {
        countUndone(){
            return this.tasks.filter( t => !t.done ).length
        }
    }
}
Vue.createApp(app).mount('#app')
     