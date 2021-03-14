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
                                <h1 class="font-white">Signup page</h1> </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- end:Inner page hero -->
           <br> <br> <br>
            <section class="contact-page inner-page">
                <div class="container">
                    <h1 style="text-align:center"> Sign up </h1>
                    <div class="row">
                        <div class="col-md-2"></div>
                        <!-- REGISTER -->
                     <div class="col-md-8">
                        <div class="widget">
                           <div class="widget-body">
                              <form>
                                 <div class="row">
                                    <div class="form-group col-sm-6">
                                       <label for="exampleInputEmail1">First Name</label>
                                       <input class="form-control" type="text"  id="example-text-input" placeholder="Enter Firstname"> 
                                    </div>
                                    <div class="form-group col-sm-6">
                                       <label for="exampleInputEmail1">Last Name</label>
                                       <input class="form-control" type="text"  id="example-text-input-2" placeholder="Enter Lastname"> 
                                    </div>
                                    <div class="form-group col-sm-6">
                                       <label for="exampleInputEmail1">Email address</label>
                                       <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"> 
                                    </div>
                                    <div class="form-group col-sm-6">
                                       <label for="exampleInputEmail1">Phone number</label>
                                       <input class="form-control" type="tel"  id="example-tel-input-3" placeholder="Enter phone number"> 
                                    </div>
                                    <div class="form-group col-sm-6">
                                       <label for="exampleInputPassword1">Password</label>
                                       <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"> 
                                    </div>
                                    <div class="form-group col-sm-6">
                                       <label for="exampleInputPassword1">Repeat password</label>
                                       <input type="password" class="form-control" id="exampleInputPassword2" placeholder=" Repeat Password"> 
                                    </div>
                                    
                                 </div>
                                
                                 <div class="row">
                                    <div class="col-sm-4">
                                       <button class="btn theme-btn" v-on:submit.prevent> Register</button>
                                    </div>

                                    <div class="col-sm-4">
                                        <p> Already a member
                                        <router-link to="/login" class="primary-color"  exact> Login</router-link>                                            
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