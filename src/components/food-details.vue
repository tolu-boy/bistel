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
                                <h1 class="font-white">Login page</h1> </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- end:Inner page hero -->
           <br> <br> <br>
            <section class="contact-page inner-page">
                <div class="container">
                    <h1 style="text-align:center"> Sign in </h1>
                    <div class="row">
                        <div class="col-md-2"></div>
                        <!-- REGISTER -->
                     <div class="col-md-8">
                        <div class="widget">
                           <div class="widget-body">
                              <form>
                                 <div class="row">
                                    
                                    <div class="form-group col-sm-12">
                                       <label for="exampleInputEmail1">Email address</label>
                                       <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                                        
                                    </div>
                                   
                                    <div class="form-group col-sm-12">
                                       <label for="exampleInputPassword1">Password</label>
                                       <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"> 
                                    </div>
                                   
                                
                                 </div>
                                
                                 <div class="row">
                                    <div class="col-sm-4">
                                       <button class="btn theme-btn" v-on:submit.prevent> login</button>
                                    </div>

                                    <div class="col-sm-4">
                                        <p> Not a member 
                                           
                                        <router-link to="/signup" class="primary-color"  exact> Sign up</router-link> 

                                        </p>                                           
                                    </div>
                                 </div>
                              </form>
                           </div>
                           <!-- end: Widget -->
                        </div>
                        <!-- /REGISTER -->
                     </div>
                        <!-- /REGISTER -->
                        
                    </div>
                </div>
            </section>
        
        </div>
    </div>
    

  



</template>



<script>
export default {
    
}
</script>



<style scoped>

</style>