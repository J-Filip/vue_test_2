
// importing method from vue
import { createApp } from 'vue'
// importing component 
import App from './App.vue'

// mounting main app component to div with id = app
createApp(App).mount('#app')

require ("./sass/main.scss")