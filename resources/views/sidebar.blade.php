





<b class="app" @click="open()"></b>
<nav class="sidebar_1"> 
         <div class="sidebar-top" style="margin-left: -5px;">

            <img  src="https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202201181250" class="logo hide1" alt="" style="height: 45px;width: 150px;">
            <img  src="https://2compa.ru/wp-content/uploads/2021/03/apple-iphone-logo-png-1_large-1024x542.png" class="logo hide2" alt="" style="height: 61px;width: 138px;">
        </div>
           <hr style="width: 135%;color: grey;margin: 1px -14px;color: inherit;background-color: currentColor;
         border: 0;opacity: .1;" class="hide1">
           <hr style="width: 112%;margin-top: 1px;margin-left:-14px;color: grey;" class=" hide">
       <div class="search">
       </div>
       <div class="sidebar-links">
         <ul class="ul_item">
           <div class="active-tab"></div>
            <li class="tooltip-element" data-tooltip="0">
                   <router-link to="/" class="active" data-active="0">
                      <div class="icon">
                     <i class='bx bxs-box'></i>
                     <i class='bx bxs-box'></i>               
                     </div>
                     <span class="link hide"><div>Services</div>
                     </span>
                   </router-link>
                </li>
              <li class="tooltip-element" data-tooltip="1">
                <router-link to="/card" data-active="1">
                  <div class="icon">
                    <i class='bx bxs-category' ></i>
                    <i class='bx bxs-category' ></i>
                  </div>
                  <span class="link hide"><div>Cards</div>
                  </span>
                </router-link>
              </li>      
              <li class="tooltip-element" data-tooltip="2">
                <router-link to="/recomend" data-active="2">
                  <div class="icon">
                    <i class='bx bxs-cart' ></i>
                    <i class='bx bxs-cart' ></i>
                  </div>
                  <span class="link hide"><div>Recomendation</div>
                  </span>
                </router-link>
              </li> 
              <li class="tooltip-element" data-tooltip="3">
                <router-link to="/add_recomend" data-active="3">
                  <div class="icon">
                  <i class='bx bxs-message-add' ></i>
                  <i class='bx bxs-message-add' ></i>
                  </div>
                  <span class="link hide"><div>+Adding a recomendation</div>
                  </span>
                </router-link>
              </li> 
              <li class="tooltip-element" data-tooltip="4">
                <router-link to="/brand" data-active="4">
                  <div class="icon">
                  <i class='bx bx-globe'></i>
                  <i class='bx bx-globe'></i>
                  </div>
                  <span class="link hide"><div>Brand</div>
                  </span>
                </router-link>
              </li>                                                                                  
              <div class="tooltip">
                <span class="show">Services</span>
                <span>cartochka</span>
                <span>recomendation</span>
                <span>+recomendation</span>
                <span>brand</span>
              </div>
          </ul>
        </div>
     </nav>
            <span class="shrink-btn" @click="open()">
               <div class="openbtn" >
                  <span></span>  
                  <span></span>
                  <span></span>
            </div>  
       </span> 
  