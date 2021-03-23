
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
                                <h1 class="font-white">Check out page {{count}}</h1> </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- end:Inner page hero -->
            <div class="breadcrumb">
               <div class="container">
                  <ul>
                  
                     <li>Checkout page</li>
                     <!-- <li v-for="i in doneTodosCount" :key="i.id">{{i.name}}</li>
                     <li>{{count1}}</li>
                     <button class="btn-btn-primary" v-on:click="increment"> Add</button> -->
                  </ul>
               </div>
            </div>
            <div class="container m-t-30">
               <div class="row">
                  <div class="col-xs-12 col-sm-4 col-md-4 col-lg-3">
                     <div class="sidebar clearfix m-b-20">
                        <div class="main-block">
                           <div class="sidebar-title white-txt">
                              <h6>Coming Soon</h6>
                              <i class="fa fa-cutlery pull-right"></i> 
                           </div>
                           <ul>
                              <li><a href="#1" class="scroll active">Pizza</a></li>
                              <li><a href="#2" class="scroll">Barbecuing and Grilling</a></li>
                              <li><a href="#3" class="scroll">Appetizers</a></li>
                              <li><a href="#4" class="scroll">Soup and salads</a></li>
                              <li><a href="#5" class="scroll">Pasta</a></li>
                              <li><a href="#6" class="scroll">Seafood</a></li>
                              <li><a href="#7" class="scroll">Beverages</a></li>
                           </ul>
                           <div class="clearfix"></div>
                        </div>
                        <!-- end:Sidebar nav -->
                        <div class="widget-delivery">
                           <form>
                              <div class="col-xs-6 col-sm-12 col-md-6 col-lg-6">
                                 <label class="custom-control custom-radio">
                                 <input id="radio1" name="radio" type="radio" class="custom-control-input" checked=""> <span class="custom-control-indicator"></span> <span class="custom-control-description">Delivery</span> </label>
                              </div>
                              <div class="col-xs-6 col-sm-12 col-md-6 col-lg-6">
                                 <label class="custom-control custom-radio">
                                 <input id="radio2" name="radio" type="radio" class="custom-control-input"> <span class="custom-control-indicator"></span> <span class="custom-control-description">Takeout</span> </label>
                              </div>
                           </form>
                        </div>
                     </div>
                     <!-- end:Left Sidebar -->
                     
                  </div>
                  <div class="col-xs-12 col-sm-8 col-md-8 col-lg-6">
                     <div class="menu-widget m-b-30">
                        <div class="widget-heading">
                           <h3 class="widget-title text-dark">
                              POPULAR ORDERS Delicious hot food! <a class="btn btn-link pull-right" data-toggle="collapse" href="#popular" aria-expanded="true">
                              <i class="fa fa-angle-right pull-right"></i>
                              <i class="fa fa-angle-down pull-right"></i>
                              </a>
                           </h3>
                           <div class="clearfix"></div>
                        </div>
                        <div class="collapse in" id="1">
                           <div class="food-item white">
                              <div class="row">
                                 <div class="col-xs-12 col-sm-12 col-lg-8">
                                    <div class="rest-logo pull-left">
                                       <a class="restaurant-logo pull-left" href="#"><img src="@/assets/images/food4.jpg" alt="Food logo"></a>
                                    </div>
                                    <!-- end:Logo -->
                                    <div class="rest-descr">
                                       <h6><a href="#">Veg Extravaganza</a></h6>
                                       <p> Burgers, American, Sandwiches, Fast Food, BBQ</p>
                                    </div>
                                    <!-- end:Description -->
                                 </div>
                                 <!-- end:col -->
                                 <div class="col-xs-12 col-sm-12 col-lg-4 pull-right item-cart-info"> <span class="price pull-left">$ 19.99</span> <a href="#" class="btn btn-small btn btn-secondary pull-right" data-toggle="modal" data-target="#order-modal">&#43;</a> </div>
                              </div>
                              <!-- end:row -->
                           </div>
                           <!-- end:Food item -->
                           <div class="food-item">
                              <div class="row">
                                 <div class="col-xs-12 col-sm-12 col-lg-8">
                                    <div class="rest-logo pull-left">
                                       <a class="restaurant-logo pull-left" href="#"><img src="@/assets/images/food5.jpg" alt="Food logo"></a>
                                    </div>
                                    <!-- end:Logo -->
                                    <div class="rest-descr">
                                       <h6><a href="#">Veg Extravaganza</a></h6>
                                       <p> Burgers, American, Sandwiches, Fast Food, BBQ</p>
                                    </div>
                                    <!-- end:Description -->
                                 </div>
                                 <!-- end:col -->
                                 <div class="col-xs-12 col-sm-12 col-lg-4 pull-right item-cart-info"> <span class="price pull-left">$ 19.99</span> <a href="#" class="btn btn-small btn btn-secondary pull-right" data-toggle="modal" data-target="#order-modal">&#43;</a> </div>
                              </div>
                              <!-- end:row -->
                           </div>
                           <!-- end:Food item -->
                           <div class="food-item white">
                              <div class="row">
                                 <div class="col-xs-12 col-sm-12 col-lg-8">
                                    <div class="rest-logo pull-left">
                                       <a class="restaurant-logo pull-left" href="#"><img src="@/assets/images/food6.jpg" alt="Food logo"></a>
                                    </div>
                                    <!-- end:Logo -->
                                    <div class="rest-descr">
                                       <h6><a href="#">Veg Extravaganza</a></h6>
                                       <p> Burgers, American, Sandwiches, Fast Food, BBQ</p>
                                    </div>
                                    <!-- end:Description -->
                                 </div>
                                 <!-- end:col -->
                                 <div class="col-xs-12 col-sm-12 col-lg-4 pull-right item-cart-info"> <span class="price pull-left">$ 19.99</span> <a href="#" class="btn btn-small btn btn-secondary pull-right" data-toggle="modal" data-target="#order-modal">&#43;</a> </div>
                              </div>
                              <!-- end:row -->
                           </div>
                           <!-- end:Food item -->
                           <div class="food-item">
                              <div class="row">
                                 <div class="col-xs-12 col-sm-12 col-lg-8">
                                    <div class="rest-logo pull-left">
                                       <a class="restaurant-logo pull-left" href="#"><img src="@/assets/images/food7.jpg" alt="Food logo"></a>
                                    </div>
                                    <!-- end:Logo -->
                                    <div class="rest-descr">
                                       <h6><a href="#">Veg Extravaganza</a></h6>
                                       <p> Burgers, American, Sandwiches, Fast Food, BBQ</p>
                                    </div>
                                    <!-- end:Description -->
                                 </div>
                                 <!-- end:col -->
                                 <div class="col-xs-12 col-sm-12 col-lg-4 pull-right item-cart-info"> <span class="price pull-left">$ 19.99</span> <a href="#" class="btn btn-small btn btn-secondary pull-right" data-toggle="modal" data-target="#order-modal">&#43;</a> </div>
                              </div>
                              <!-- end:row -->
                           </div>
                           <!-- end:Food item -->
                        </div>
                        <!-- end:Collapse -->
                     </div>
                     <!-- end:Widget menu -->
 
                     <!--/row -->
                  </div>
                  <!-- end:Bar -->
                  <div class="col-xs-12 col-md-12 col-lg-3">
                     <div class="sidebar-wrap">
                        <div class="widget widget-cart">
                           <div class="widget-heading">
                              <h3 class="widget-title text-dark">
                                 Your Shopping Cart
                              </h3>
                              <div class="clearfix"></div>
                           </div>
                           <div class="order-row bg-white">
                              <div class="widget-body">
                                 <div class="title-row">Pizza Quatro Stagione <a href="#"><i class="fa fa-trash pull-right"></i></a></div>
                                 <div class="form-group row no-gutter">
                                    <div class="col-xs-8">
                                       <select class="form-control b-r-0" id="exampleSelect1">
                                          <option>Size SM</option>
                                          <option>Size LG</option>
                                          <option>Size XL</option>
                                       </select>
                                    </div>
                                    <div class="col-xs-4">
                                       <input class="form-control" type="number" value="2" id="example-number-input"> 
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="order-row">
                              <div class="widget-body">
                                 <div class="title-row">Carlsberg Beer <a href="#"><i class="fa fa-trash pull-right"></i></a></div>
                                 <div class="form-group row no-gutter">
                                    <div class="col-xs-8">
                                       <select class="form-control b-r-0">
                                          <option>Size SM</option>
                                          <option>Size LG</option>
                                          <option>Size XL</option>
                                       </select>
                                    </div>
                                    <div class="col-xs-4">
                                       <input class="form-control" value="4" id="quant-input"> 
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <!-- end:Order row -->
                           <div class="widget-delivery clearfix">
                              <form>
                                 <div class="col-xs-6 col-sm-12 col-md-6 col-lg-6 b-t-0">
                                    <label class="custom-control custom-radio">
                                    <input id="radio4" name="radio" type="radio" class="custom-control-input" checked=""> <span class="custom-control-indicator"></span> <span class="custom-control-description">Delivery</span> </label>
                                 </div>
                                 <div class="col-xs-6 col-sm-12 col-md-6 col-lg-6 b-t-0">
                                    <label class="custom-control custom-radio">
                                    <input id="radio3" name="radio" type="radio" class="custom-control-input"> <span class="custom-control-indicator"></span> <span class="custom-control-description">Takeout</span> </label>
                                 </div>
                              </form>
                           </div>
                           <div class="widget-body">
                              <div class="price-wrap text-xs-center">
                                 <p>TOTAL</p>
                                 <h3 class="value"><strong>$ 25,49</strong></h3>
                                 <p>Free Shipping</p>
                                 <button onclick="location.href='checkout.html'" type="button" class="btn theme-btn btn-lg">Checkout</button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <!-- end:Right Sidebar -->
               </div>
               <!-- end:row -->
            </div>
            <!-- end:Container -->
          
           
         </div>
</div>
    
</template>

<script>

export default {
   name:'checkout',
data: function () {
    return {
      count: 5,
      mike:null
    }
  },

computed: {
  doneTodosCount () {
    return this.$store.getters.doneTodos
  },
  count1(){
    return this.$store.state.count
  }
},

methods:{
   increment(){
 return this.$store.dispatch('increment')

   }
},



    
}
</script>




<style scoped>

</style>