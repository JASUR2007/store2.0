<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>Document</title>
 <link rel="stylesheet" href="{{asset('css/BLOG.css')}}">


<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  <script src="https://unpkg.com/vue-router@2.0.0/dist/vue-router.js"></script></head>
<body>  
 <div id="app1"  class="dad-div">
  <div class="father">   
   <div class="theme-f">
    <a class="title" href="#">
     <pre>BLOG</pre>
    </a>
   </div>

   <div class="card-box">
    <div class="card" v-for="(user , index) of users" style="height:70%;" :key="index">
      <img :src="parseJson(user.image)">      
      <div class="card-p">
       <h1 class="TITLE" v-text="user.title">
        
       </h1>
       <p class="p" v-text="user.info">
       <p class="p" v-text="user.category">
       </p>

       <a class="A">
        READ MORE >
       </a>
      </div>
    </div>
   </div>
   <div class="by-someone1"></div>
   <div class="by-someone">
    <p class="h3">@All Right Reserved</p>
    <p class="h3">Email:admin@bewsae.sit</p>
   </div>
  </div>
 <div class="dad-div2" :class="{big:active}">
		<div class="btn">
			<input type="checkbox" id="checked">
			<label for="checked" class="bar-btn2"  @click="active = !active" :aria-pressed="active ? 'true' : 'false'">
    			<span class="span2"></span>
      			<span class="span2"></span>
      			<span class="span2"></span>
			</label>
		</div>

		<div class="rotate" style="width:10%;" :class="{ home: active }">
				blog
		</div>	
		<div>
			<ul class="open_ul" :class="{ close_ul: active }">
				<li class="open_li" :class="{ close_li1: active }">
					<a href="/home" class="open_home">Home</a>
				</li>
				<li class="open_li" :class="{ close_li2: active }">
					<a href="/portfolio" class="open_home">Portfolio</a>
				</li>
				<li class="open_li" :class="{ close_li3: active }">
					<a href="/blogs" class="open_home">History</a>
				</li>
				<li class="open_li" :class="{ close_li4: active }">
					<a href="/contact" class="open_home">Contact</a>
				</li>		
			</ul>
		</div>
		
	</div>
 </div>
</div>

 <script>
        
        var app = new Vue({
        el:'#app1',
        data: {
          domain_url: window.location.origin + '/',
          active:false,
          users: []
        },
        mounted() {
        fetch(this.domain_url + 'api/' + "blog")
            .then(resp => resp.json())
            .then((rep) => {
              this.users = rep.blog
                console.log(rep.blog)
            })
    },
  methods:{
        isJsonString(str) {
                try {
                    JSON.parse(str);
                    return JSON.parse(str);
                } catch (e) {
                    return false;
                }
            
        },
        parseJson(jsonArray) {
                if ( this.isJsonString(jsonArray)) {
                  if( this.isJsonString(jsonArray).length > 0) {
                    return this.domain_url+'storage/' +  this.isJsonString(jsonArray)[0];
                  }
                } else {
                    return "";
                }
            },
  }
        })
 </script>		
</body>
</html>