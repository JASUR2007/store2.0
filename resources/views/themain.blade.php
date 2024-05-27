<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta name="csrf-token" content="{{ csrf_token() }}">
	<title>Document</title>
       <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
       <script src="https://unpkg.com/vue-router@2.0.0/dist/vue-router.js"></script>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">   
       <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>   
     <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'>
</head>
<style>
#upload-photo {
   opacity: 0;
   position: absolute;
   z-index: -1;
}
</style>
<body>
	<div id="app" style="display: flex;width: 100%;" >  
		@include('sidebar')
     <div style="background-color: whitesmoke;height: 100vh;width: 100%;" class="main_head">
				@include('header')
            <div class="maine">
		          <router-view></router-view>
            </div>
         </div>
	</div>
	
	<script src="{{asset('js/all_main.js')}}"></script>
	<script>
		 var routes =[
        {path:'/',component:Product},
        {path:'/add_store', component: Add_store},
        {path:'/edit/:id',component:Edit},
        {path:'/card', component: card},
        {path:'/add_card', component: add_card},
        {path:'/edit_blog/:id', component:edit_blog},
        {path:'/recomend', component:recomend},
        {path:'/add_recomend', component: add_recomend},
        {path:'/edit_recomend/:id', component:edit_recomend},
        {path:'/brand', component: brand},
        {path:'/add_brand', component: add_brand},
        {path:'/edit_brand/:id', component: edit_brand},
        ]

         var router= new VueRouter({
            routes:routes,
            mode:'history'
        })
        var app = new Vue ({
            router:router,
            el:"#app",
            data:{
               users:[],
               domain_url:window.location.origin + '/',
               token:document.querySelector('meta[name="csrf-token"]').content,
            },
mounted(){
   // fetch(this.domain_url + 'reg_save')
   //       .then(rep=> rep.json())
   //       .then (res => {
   //       console.log(res)
   //    });        

},
            methods:{
               open(){
                  this.$el.querySelector('.shrink-btn').classList.toggle('activate')
                  this.$el.querySelector('.sidebar_1').classList.toggle('active')
                  this.$el.querySelector('.sidebar_1').classList.toggle('activate')
                  this.$el.querySelector('.main_head ').classList.toggle('active_1')
                  this.$el.querySelector('.header').classList.toggle('active_2')
                  this.$el.querySelector('.header').classList.toggle('active_2')
                  this.$el.querySelector('.tooltip').classList.toggle('show1')
                  this.$el.querySelector('.app').classList.toggle('activate')
               },
                 parseJson(jsonArray) {
                     if ( this.isJsonString(jsonArray)) {
                        if( this.isJsonString(jsonArray).length > 0) {
                         return this.$parent.domain_url+'storage/' +  this.isJsonString(jsonArray)[0];
                        }
                     } else {
                         return "";
                     }
                 },
                 isJsonString(str) {
                     try {
                         JSON.parse(str);
                         return JSON.parse(str);
                     } catch (e) {
                         return false;
                     }
                 
             },               
            }     
        })
	</script>
    <link rel="stylesheet" href="{{asset('css/style.css')}}">
    <link rel="stylesheet" href="{{asset('css/media480.css')}}">
    <link rel="stylesheet" href="{{asset('css/media768.css')}}">	
	<script type="text/javascript" src="{{asset('js/app1.js')}}"></script>
</body>
</html>