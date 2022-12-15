<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ content ? `${content} | HEHFEY` : `HEHFEY` }}</template>
  </metainfo>
  <div id="app">
    <PrimaryNav/>
    <section class="section">
      <div class="columns">
        <div class="column is-narrow">
          <figure class="image is-128x128">
            <img class="is-rounded" style="height: 100%; object-fit: cover;" src="./assets/ME_1.jpeg">
          </figure>
        </div>
        <div class="column">
            <h1 class="title">Hi! I'm Jeff</h1>
            <h6 class="title is-6"><b>VP of Development</b> at Prime Software Solutions</h6>
            <p>My wife and I reside in Northwest Arkansas - a place we have both called home our entire lives. I have been blessed to join the professional workforce at a young age and have hit the ground running. I began interest around 2008 when my mother gifted us our first home computer. Shortly after, my interest turned into action as I began diving into all sorts of tools and software available to me. I never lost my interest and it became a hobby of mine that continues to this day. Some examples of work include a website similar to Soundcloud that would allow users to upload their own audio and share, CSS design projects, videography projects edited in Adobe After Effects and Final Cut Pro, and home automation using Raspberry Pi.</p>
            <p class="mt-3">Primary professional experience with LAMP stack: PHP, JavaScript, CSS, HTML, MySQL, and Linux. Performs server management which includes but is not limited to Apache and MySQL configuration, Postfix configuration, Certbot & Let's Encrypt SSL certificate automation, cron management, and general upkeep.
              Additional professional experience with AS2 (OpenAS2) & certificate management, EDI translation/mapping, some mobile technologies (such as Xcode & Swift, Android Studio & Java, and Expo & React Native), and Virtual Machine management.
              Conceptualized standalone Wordpress plugins as well as integrated with other plugins such as WooCommerce.
              Chaired numerous development teams to work with Account Managers and clients to offer solutions and suggestions for common software problems and needs.
              Built company brochure design plans within Adobe Photoshop and Adobe InDesign that was driven by clean, readable design. Drafted, designed and brought to life web design concepts using CSS & HTML.
              Hobby experience working with Adobe After Effects, and Final Cut Pro.</p>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="box">
        <h3 class="title is-3">Professional Experience</h3>
        <ProfessionalExperience/>
        <h3 class="title is-3">Education</h3>
        <MyEducation/>
      </div>
    </section>
    <section class="section">
      <MyValues/>
    </section>
  </div>
  <MyFooter/>
</template>

<script>
import PrimaryNav from './components/PrimaryNav.vue'
import MyValues from './components/MyValues.vue'
import ProfessionalExperience from './components/ProfessionalExperience.vue'
import MyEducation from './components/MyEducation.vue'
import MyFooter from './components/MyFooter.vue'
import { useMeta } from 'vue-meta'

export default {
  name: 'App',
  components: {PrimaryNav, MyValues, ProfessionalExperience, MyEducation, MyFooter},
  setup () {
    useMeta({ title: 'Home' })
  }
}
</script>

<style>
  @import "css/custom.css"; 
</style>
