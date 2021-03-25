<template>
  <div>
    <div class="page-wrapper">
      <!-- start: Inner page hero -->
      <section
        class="bg-image space-md"
        style="background-image: url('../img/image01.jpg');"
      >
        <div class="profile">
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-sm-4  col-lg-4 profile-img">
                <h1 class="font-white">Shopping Cart Page </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- end:Inner page hero -->
     <br> <br>
      <div class="container m-t-30" v-if="totalPrice !==0">
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
                  <li>
                    <a href="#2" class="scroll">Barbecuing and Grilling</a>
                  </li>
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
                      <input
                        id="radio1"
                        name="radio"
                        type="radio"
                        class="custom-control-input"
                        checked=""
                      />
                      <span class="custom-control-indicator"></span>
                      <span class="custom-control-description">Delivery</span>
                    </label>
                  </div>
                  <div class="col-xs-6 col-sm-12 col-md-6 col-lg-6">
                    <label class="custom-control custom-radio">
                      <input
                        id="radio2"
                        name="radio"
                        type="radio"
                        class="custom-control-input"
                      />
                      <span class="custom-control-indicator"></span>
                      <span class="custom-control-description">Takeout</span>
                    </label>
                  </div>
                </form>
              </div>
            </div>
            <!-- end:Left Sidebar -->
          </div>
          <div class="col-xs-12 col-sm-8 col-md-8 col-lg-6">
            <div class="menu-widget m-b-30">
              <div class="widget-heading">
                <h3 class="widget-title text-dark" style="text-align: center;">
                   Your Order 
                  <a
                    class="btn btn-link pull-right"
                    data-toggle="collapse"
                    href="#popular"
                    aria-expanded="true"
                  >
                    <i class="fa fa-angle-right pull-right"></i>
                    <i class="fa fa-angle-down pull-right"></i>
                  </a>
                </h3>
                <div class="clearfix"></div>
              </div>
              <div class="collapse in" id="1">
               <!-- start food item -->
               <div class="food-item white"  v-for="items in cartItems"
                  :key="items.id">
                              <div class="row">
                                 <div class="col-xs-12 col-sm-12 col-lg-8">
                                    <div class="rest-logo pull-left">
                                       <a class="restaurant-logo pull-left" href="#"><img :src="items.url" alt="Food logo"></a>
                                    </div>
                                    <!-- end:Logo -->
                                    <div class="rest-descr">
                                       <h6>{{ items.name }}</h6>
                                       <p> {{ items.desc }}</p>
                                      <p> Quantity :{{ items.quantity }}</p>

                                    </div>
                                    <!-- end:Description -->
                                 </div>
                                 <!-- end:col -->
                                 <div class="col-xs-12 col-sm-12 col-lg-4  "> 
                                    <span class="price pull-left"> N {{ items.price }}</span> 
                                    
                                    <button  v-on:click="addItem(items)"  class="btn btn-small btn btn-secondary pull-right" >&#43;</button>
                                     <button  v-on:click="removeItem(items)" class="btn btn-small btn btn-secondary pull-right" >&#8722;</button>
                                     </div>

                              </div>
                              <!-- end:row -->
                           </div>
               
              
              </div>
              <!-- end:Collapse -->
            </div>
            <!-- end:Widget menu -->

            <!--/row -->
          </div>
          <!-- end:Bar -->
          <!-- summary -->
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
                    <div class="title-row">Cart Subtotal</div>
                    N{{ totalPrice }}
                  </div>
                </div>
                <div class="order-row">
                  <div class="widget-body">
                    <div class="title-row">Shipping & Handling</div>
                    <div class="form-group row no-gutter">
                      N1000
                    </div>
                  </div>
                </div>

                <div class="widget-body">
                  <div class="price-wrap text-xs-center">
                    <p>TOTAL</p>
                    <h3 class="value">
                      <strong>{{ totalPrice + 1000 }}</strong>
                    </h3>
                    <p>Free Shipping</p>
                    <button
                      onclick="location.href='checkout.html'"
                      type="button"
                      class="btn theme-btn btn-lg"
                    >
                      Checkout
                    </button>
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

      <emptycart  v-else/>
    </div>
  </div>
</template>

<script>
import  emptycart  from "@/components/emptycart";
export default {
  name: "cart",
  components:{
     emptycart
  },
  data: function() {
    return {
      count: 5,
      mike: null,
      price: 1
    };
  },

  computed: {
    cartItems() {
      return this.$store.state.cartItems;
    },

    totalPrice() {
      let price = 0;
      this.$store.state.cartItems.map((el) => {
        price += el["quantity"] * el["price"];
      });

      return price;
    },
  },

  methods: {
    increment() {
      return this.$store.dispatch("increment");
    },

    addItem(items) {
   this.$store.dispatch("add", items);
    },

    removeItem(items) {
   this.$store.dispatch("remove", items);

    },
  },
};
</script>

<style scoped></style>
