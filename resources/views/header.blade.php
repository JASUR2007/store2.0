<header class="header" style="height:10%;display:flex;padding: 0 40px 0 0;box-shadow:10px 1px 10px white;background-color:white;border:none" >
            <div style="margin:0;display:flex;width: 100%;" class="header_main"> 
                   <div  style="display: flex;justify-content: flex-start;"> 
                       <div class="search_header" style="display: flex;align-items: center;justify-content: flex-start;"> 
                           <i class=" fas fa-search" style="margin-top: 3px;"></i>
                              <input type="text" class="header_input px-4" placeholder="Search" style="margin-left:20px;margin-top:4px">
                        </div>
                    </div>
                <div class="dropdown_head" style="display: flex;justify-content: flex-end;margin-top:5px"> 
                     <div class="dropdown">
                        <div  v-for="(user,index) of users" :key="index">
                           <img  :src="parseJson(user.images)" class="img_login " alt="">
                        </div>  
                       <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" style="box-shadow: none;margin-left:-12px">
                     </button>
                        <span class="caret"></span>               
                      <span class="caret dropbtn" ></span>
                       <div class="dropdown-content">
                          <a href="/" >login</a>
                          <a>
                              <form action="{{url('/logout-system')}}" method="post">
                                 <input type="hidden" value="{{csrf_token()}}" name="_token">
                                 <button style="border:none;background-color: transparent;">Logout</button>
                              </form>
                           </a>
                          <a href="/" >register</a>
                      </div>
                  </div>
               </div>
               </div>
         </header>      
