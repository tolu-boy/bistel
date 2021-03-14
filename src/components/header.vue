<template>
    
     <header id="header" class="header-scroll top-header headrom">
            <!-- .navbar -->
            <nav class="navbar navbar-dark" > 
                <div class="container">
                    <button class="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#mainNavbarCollapse">&#9776;</button>
                    <a class="navbar-brand" > <span style="color: #FF3300; font-family: 'Raleway', sans-serif;">Bistel</span>Foods
                    </a>
                    <div class="collapse navbar-toggleable-md  float-lg-right" id="mainNavbarCollapse">
                        <ul class="nav navbar-nav">
                            <li class="nav-item">  <router-link to="/"  class="nav-link active" exact>Home</router-link> </li>

                            <li class="nav-item">  <router-link to="#"  class="nav-link active" exact>promo</router-link> </li>
                            <li class="nav-item">  <router-link to="/contact"  class="nav-link active" exact>contact</router-link> </li>
                             <li class="nav-item">  <router-link to="/login"  class="nav-link active" exact>Login</router-link> </li>

                            <li class="nav-item">  <router-link to="/checkout"  class="nav-link active" exact>Checkout</router-link> </li>

                        </ul>
                    </div>
                </div>
            </nav>
            <!-- /.navbar -->
        </header>
</template>



<script>
export default {
    
}
</script>



<style scoped>

/* .router-link-active{
    background: blue;
    color: red;
} */




</style>