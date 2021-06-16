<template>
    
    
      
    <div class="o-page__content">

        <div class="container-fluid">
           <div class="row">
                    <div class="col-sm-12 col-lg-6 col-xl-3">
                        <div class="c-state-card" data-mh="state-cards" style="height: 124.4px;">
                            <div class="c-state-card__icon c-state-card__icon--info">
                                <i class="fa fa-cutlery"></i>
                            </div>

                            <div class="c-state-card__content">
                                <h5 class="c-state-card__number">587
                                   
                                </h5>
                                <p class="c-state-card__meta">Total Menus 
                                   </p>
                            </div>
                        </div>
                    </div><!-- // .col-md-3 -->

                    <div class="col-sm-12 col-lg-6 col-xl-3">
                        <div class="c-state-card" data-mh="state-cards" style="height: 124.4px;">
                            <div class="c-state-card__icon c-state-card__icon--fancy">
                                <i class="fa fa-usd"></i>
                            </div>

                            <div class="c-state-card__content">
                                <h5 class="c-state-card__number">$2,190
                                   
                                </h5>
                                <p class="c-state-card__meta">Revenue <span class="u-text-success">(+$286)</span></p>
                            </div>
                        </div>
                    </div><!-- // .col-md-3 -->

                    <div class="col-sm-12 col-lg-6 col-xl-3">
                        <div class="c-state-card" data-mh="state-cards" style="height: 124.4px;">
                            <div class="c-state-card__icon c-state-card__icon--warning">
                                <i class="fa fa-clipboard"></i>
                            </div>

                            <div class="c-state-card__content">
                                <h5 class="c-state-card__number">93
                                </h5>
                                <p class="c-state-card__meta">Total Orders </p>
                            </div>
                        </div>
                    </div><!-- // .col-md-3 -->

                    <div class="col-sm-12 col-lg-6 col-xl-3">
                        <div class="c-state-card" data-mh="state-cards" style="height: 124.4px;">
                            <div class="c-state-card__icon c-state-card__icon--success">
                                <i class="fa fa-users"></i>
                            </div>

                            <div class="c-state-card__content">
                                <h5 class="c-state-card__number">431
                                    <span class="c-state-card__status u-bg-green">
                                        <i class="fa fa-caret-up"></i>
                                    </span>
                                </h5>
                                <p class="c-state-card__meta">Total Customers </p>
                            </div>
                        </div>
                    </div><!-- // .col-md-3 -->
                </div>

                 <div class="row u-mb-large">
                    <div class="col-xl-6">
                        <div class="c-graph-card" data-mh="secondary-graphs">
                            <div class="c-graph-card__content u-flex u-justify-between u-align-items-baseline">
                                <h3 class="c-graph-card__title u-h4">Daily Sales</h3>
                                <div class="u-text-right">
                                    <h4 class="u-h1 u-mb-zero">552</h4>
                                    <span class="u-color-success">+16.2%</span>
                                </div>
                            </div>
                            
                            <div class="c-graph-card__chart">
                                <canvas id="js-chart-sales" height="150"></canvas>
                            </div>

                            <div class="u-flex u-justify-between u-ph-medium u-pv-small u-border-top">
                                <p>
                                    <span class="u-text-mute u-text-xsmall u-mr-xsmall">BEST DAY</span>21
                                </p>
                                <p>
                                    <span class="u-text-mute u-text-xsmall u-mr-xsmall">AVERAGE</span>32
                                </p>
                            </div>

                            <div class="c-graph-card__footer">
                                <div class="row u-align-items-center">

                                    <div class="col-9">
                                        <p class="u-text-mute u-text-uppercase u-mb-xsmall u-text-xsmall">This Month
                                        </p>
                                        <div class="c-progress c-progress--medium c-progress--info">
                                            <div class="c-progress__bar" style="width:35%;"></div>
                                        </div>
                                    </div>
                                    <div class="col-3 u-text-right">
                                        <h4 class="u-h2">21</h4>
                                    </div>
                                    
                                </div>

                                <div class="row u-align-items-center">

                                    <div class="col-9">
                                        <p class="u-text-mute u-text-uppercase u-mb-xsmall u-text-xsmall">
                                        Last Month</p>
                                        <div class="c-progress c-progress--medium c-progress--fancy">
                                            <div class="c-progress__bar" style="width:56%;"></div>
                                        </div>
                                    </div>
                                    <div class="col-3 u-text-right">
                                        <h4 class="u-h2">34</h4>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-6">
                        <div class="c-graph-card" data-mh="secondary-graphs">
                            <div class="c-graph-card__content u-flex u-justify-between u-align-items-baseline">
                                <h3 class="c-graph-card__title u-h4">Customers</h3>
                                <div class="u-text-right">
                                    <h4 class="u-h1 u-mb-zero">354</h4>
                                    <span class="u-color-success">+16.2%</span>
                                </div>
                            </div>
                            
                            <div class="c-graph-card__chart u-flex u-justify-center">
                                <canvas id="js-chart-customers" width="150" height="150"></canvas>
                            </div>

                            <div class="o-line u-ph-medium u-pv-small u-border-top">
                                <span class="u-color-primary u-text-xsmall u-mr-xsmall">
                                    <i class="fa fa-circle-o u-mr-xsmall u-color-info"></i> New
                                </span>

                                <span class="u-color-primary u-text-xsmall u-mr-xsmall">
                                    <i class="fa fa-circle-o u-mr-xsmall u-color-primary"></i> Returning
                                </span>

                                <span class="u-color-primary u-text-xsmall u-mr-xsmall">
                                    <i class="fa fa-circle-o u-mr-xsmall u-color-warning"></i> Referrals
                                </span>
                            </div>

                            <div class="c-graph-card__footer">
                                <div class="row">

                                    <div class="col-4">

                                        <h5 class="u-h2 u-mb-zero">39</h5>
                                        <p class="u-text-mute u-text-uppercase u-mb-xsmall u-text-xsmall">New</p>
                                        <div class="c-progress c-progress--medium c-progress--info">
                                            <div class="c-progress__bar" style="width:70%;"></div>
                                        </div>
                                    </div>

                                    <div class="col-4">

                                        <h5 class="u-h2 u-mb-zero">54</h5>
                                        <p class="u-text-mute u-text-uppercase u-mb-xsmall u-text-xsmall">Returning</p>
                                        <div class="c-progress c-progress--medium c-progress--success">
                                            <div class="c-progress__bar" style="width:70%;"></div>
                                        </div>
                                    </div>

                                    <div class="col-4">

                                        <h5 class="u-h2 u-mb-zero">28</h5>
                                        <p class="u-text-mute u-text-uppercase u-mb-xsmall u-text-xsmall">Referrals</p>
                                        <div class="c-progress c-progress--medium c-progress--warning">
                                            <div class="c-progress__bar" style="width:70%;"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>
            
        </div>

        
    </div>
    

  



</template>



<script>
export default {
    
}
</script>



<style scoped>

</style>