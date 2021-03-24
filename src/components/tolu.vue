<template>
    
    
      
    <div>
       <div class="page-wrapper">
            <br> 
            <!-- start: Inner page hero -->
            <section class="bg-image space-md"  style="background-image: url('../img/image01.jpg');">
                <div class="profile">
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12 col-sm-4  col-lg-4 profile-img">
                                <h1 class="font-white">product view page</h1> </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- end:Inner page hero -->
           <br> <br> <br>
          <section class="popular">
            <div class="container">
                <div class="title text-xs-center m-b-30">
                    <h2>Popular This Month In Your City</h2>
                    <p class="lead">The easiest way to your favourite food</p>
                </div>
                <div class="row">
                    <!-- Each popular food item starts -->
                    <div class="col-xs-12 col-sm-6 col-md-4 food-item">
                       
                    </div>
                    <!-- Each popular food item starts -->
                    <!-- Each popular food item starts -->
                    <div class="col-xs-12 col-sm-6 col-md-4 food-item">
                        <div class="food-item-wrap">
                            <div class="figure-wrap bg-image" data-image-src="images/food2.jpg" style="background-image: url('../img/image01.jpg');">
                                <div class="distance"><i class="fa fa-pin"></i>1240m</div>
                                <div class="rating pull-left"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-o"></i> </div>
                                <div class="review pull-right"><a href="#">198 reviews</a> </div>
                            </div>
                            <div class="content">
                                <!-- <h5>{{details.name}}</h5> -->
                                <div class="product-name">{{details.desc}}</div>
                                <div class="price-btn-block"> <span class="price">N{{details.price}}</span> <a href="#" class="btn theme-btn-dash pull-right">Order Now</a> </div>
                            </div>
                            <div class="restaurant-block">
                                <div class="left">
                                    <div class="pull-left right-text"> <a href="#">Chicken Restaurant</a> <span>68 5th Avenue New York</span> </div>
                                </div>
                                <div class="right-like-part pull-right"> <i class="fa fa-heart-o"></i> <span>48</span> </div>
                            </div>
                        </div>
                     <div class="price-btn-block" v-on:click="addTocart">  <a  class="btn theme-btn-dash pull-right">Add to cart Now</a> </div>
                     <br><br>
                          <div class="price-btn-block" v-on:click="removeItem">  <a class="btn theme-btn-dash pull-right">Remove from cart</a> </div>

                   
                   
                   
                   
                    </div>
                    
                    <!-- Each popular food item starts -->
                    <!-- Each popular food item starts -->
                    <div class="col-xs-12 col-sm-6 col-md-4 food-item">
                     
                    </div>
                    <!-- Each popular food item starts -->


                    
                </div>
            </div>
            
        </section>
        </div>
    </div>
    

  



</template>



<script>
export default {
    name: "tolu",
    data(){
        return{
            details: this.$route.params.items
        }
    },

    created(){
if ( this.$route.params.items !== undefined) {

    localStorage.setItem("details",JSON.stringify(this.$route.params.items))
    
}

    },

    methods:{
        gotocart(){
console.log(this.details);
        },

        addTocart(){
this.$store.dispatch('add',this.details)

// console.log(this.$store.state.cartItemCount);

        },


        removeItem(){
this.$store.dispatch('remove',this.details)

        }


    },

   
    
}
</script>



<style scoped>

</style>