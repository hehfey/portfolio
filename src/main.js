import { createApp } from 'vue'
import App from './App.vue'
import { createMetaManager } from 'vue-meta'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faGithub)
library.add(faLinkedinIn)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(createMetaManager())
.mount('#app')
