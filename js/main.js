//const app = new Vue({
    //el: '#app',
    //data () {
        //return {
           // products: [],
           
           
       //   } 
      
      
   // },
 
  //  mounted () {
       // axios
         
       //   .get('fichier.json')
       //   .then(response => (this.products = response.data.products))
  //  } 
//}).mount('#app')

const { createApp } = Vue;
createApp({
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    axios
      .get("product.json")
      .then((response) => (this.products = response.data.products));
  },
}).mount("#app");