<template>
  <div id="app">
    <Header />
    <Nav />
    <Slide />
    <Content />
    <Community />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'
import Slide from './components/Slide.vue'
import Content from './components/Content.vue'
import Community from './components/Community.vue'
export default {
  name: 'App',
  components: {
    Header,Nav,Footer,Content,Community,Slide
  },
  mounted:function(){
     jQuery.ajax({
        url:"http://localhost:3000/products",
        type:"GET",
        success:function(d){
          alert(d.data);

        },
        error:function(jqXHR, textStatus,error){
            if(error){
              throw error;
            }
        }
    })


  }
}

</script>

<style>
/* @import '../public/css/public.css'; 
@import '../public/css/fs_home.css';  */
/* @import '../public/css/css.css';  */
/* @import '../public/css/iconfont.css';  */
/* @import '../public/css/media.css';  */
/* @import '../public/css/new_index.css'; 
@import '../public/css/swiper-sweetalert2.css';  */

</style>


