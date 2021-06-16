<template>
  <div>
    <div class="o-page__sidebar js-page-sidebar">
      <div class="c-sidebar">
        <a class="c-sidebar__brand" href="#" style="font-size: 20px;">
          <span style="color: #FF3300; font-family: 'Raleway', sans-serif; "
            >Bistel-
          </span>
          Eats
        </a>

        <h4 class="c-sidebar__title">Dashboards</h4>
        <ul class="c-sidebar__list">
          <li class="c-sidebar__item">
            <a class="c-sidebar__link" href="home-overview.html">
              <i class="fa fa-tachometer u-mr-xsmall"></i>Dashboard
            </a>
          </li>

           <li class="c-sidebar__item">
            <a class="c-sidebar__link" href="performance.html">
              <i class="fa fa-line-chart u-mr-xsmall"></i>Analytics
             
            </a>
          </li>


          <li class="c-sidebar__item">
            <a class="c-sidebar__link" href="performance.html">
              <i class="fa fa-bookmark-o u-mr-xsmall"></i>Orders
              
            </a>
          </li>

          <li class="c-sidebar__item">
            <a class="c-sidebar__link is-active" href="analytics.html">
              <i class="fa fa-clipboard u-mr-xsmall"></i>Order List
            </a>
          </li>

          <li class="c-sidebar__item">
            <a class="c-sidebar__link is-active" href="analytics.html">
              <i class="fa fa-users u-mr-xsmall"></i>General Customers
            </a>
          </li>

          <li class="c-sidebar__item">
            <a class="c-sidebar__link" target="_blank" href="projects.html">
              <i class="fa fa-table u-mr-xsmall"></i>Reviews
            </a>
          </li>
        </ul>

      </div>
      <!-- // .c-sidebar -->
    </div>
    <!-- // .o-page__sidebar -->
    <main class="o-page__content">
      <header class="c-navbar u-mb-medium">
        <button class="c-sidebar-toggle js-sidebar-toggle">
          <span class="c-sidebar-toggle__bar"></span>
          <span class="c-sidebar-toggle__bar"></span>
          <span class="c-sidebar-toggle__bar"></span>
        </button>

        <h2 class="c-navbar__title u-mr-auto">Welcome Admins</h2>

        <div class="c-dropdown u-hidden-down@mobile">
          <a
            class="c-notification dropdown-toggle"
            href="#"
            id="dropdownMenuUser"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span class="c-notification__icon">
              <i class="fa fa-user-o"></i>
            </span>
            <span class="c-notification__number">3</span>
          </a>

          <div
            class="c-dropdown__menu c-dropdown__menu--large dropdown-menu dropdown-menu-right"
            aria-labelledby="dropdownMenuUser"
          >
           
            <a href="#" class="c-dropdown__item dropdown-item o-media">
              <span class="o-media__img u-mr-xsmall">
                <span class="c-avatar c-avatar--xsmall">
                  <img
                    class="c-avatar__img"
                    src="img/avatar2-72.jpg"
                    alt="User's Profile Picture"
                  />
                </span>
              </span>
              <div class="o-media__body">
                <h6 class="u-mb-zero">Recieved a Payment</h6>
                <p class="u-text-mute">
                  You have recieved a mention on twitter, check it out!
                </p>
              </div>
            </a>
            <a href="#" class="c-dropdown__item dropdown-item o-media">
              <span class="o-media__img u-mr-xsmall">
                <span class="c-avatar c-avatar--xsmall">
                  <img
                    class="c-avatar__img"
                    src="img/avatar3-72.jpg"
                    alt="User's Profile Picture"
                  />
                </span>
              </span>
              <div class="o-media__body">
                <h6 class="u-mb-zero">You got a promotion</h6>
                <p class="u-text-mute">
                  You have recieved a mention on twitter, check it out!
                </p>
              </div>
            </a>
          </div>
        </div>

        <div
          class="c-dropdown dropdown u-mr-medium u-ml-small u-hidden-down@mobile"
        >
          <a
            class="c-notification dropdown-toggle"
            href="#"
            id="dropdownMenuAlerts"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span class="c-notification__icon">
              <i class="fa fa-bell-o"></i>
            </span>
            <span class="c-notification__number">3</span>
          </a>

          <div
            class="c-dropdown__menu c-dropdown__menu--large dropdown-menu dropdown-menu-right"
            aria-labelledby="dropdownMenuAlerts"
          >
            <a href="#" class="c-dropdown__item dropdown-item o-media">
              <span class="o-media__img u-mr-xsmall">
                <span class="c-avatar c-avatar--xsmall">
                  <span
                    class="c-avatar__img u-bg-success u-flex u-justify-center u-align-items-center"
                  >
                    <i class="fa fa-check u-text-large u-color-white"></i>
                  </span>
                </span>
              </span>
              <div class="o-media__body">
                <h6 class="u-mb-zero">Completed a task</h6>
                <p class="u-text-mute">
                  You have recieved a mention on twitter, check it out!
                </p>
              </div>
            </a>

            <a href="#" class="c-dropdown__item dropdown-item o-media">
              <span class="o-media__img u-mr-xsmall">
                <span class="c-avatar c-avatar--xsmall">
                  <span
                    class="c-avatar__img u-bg-fancy u-flex u-justify-center u-align-items-center"
                  >
                    <i class="fa fa-calendar u-text-large u-color-white"></i>
                  </span>
                </span>
              </span>
              <div class="o-media__body">
                <h6 class="u-mb-zero">Company meetup</h6>
                <p class="u-text-mute">
                  You have recieved a mention on twitter, check it out!
                </p>
              </div>
            </a>
            <a href="#" class="c-dropdown__item dropdown-item o-media">
              <span class="o-media__img u-mr-xsmall">
                <span class="c-avatar c-avatar--xsmall">
                  <span
                    class="c-avatar__img u-bg-primary u-flex u-justify-center u-align-items-center"
                  >
                    <i class="fa fa-info u-text-large u-color-white"></i>
                  </span>
                </span>
              </span>
              <div class="o-media__body">
                <h6 class="u-mb-zero">Someone mentioned you</h6>
                <p class="u-text-mute">
                  You have recieved a mention on twitter, check it out!
                </p>
              </div>
            </a>
          </div>
        </div>

      </header>
      <!-- // .c-navbar -->

     
    </main>
  </div>
</template>

<script>
require("@/assets/css/main.css");


export default {};
</script>

<style></style>
