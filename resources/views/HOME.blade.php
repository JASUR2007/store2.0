<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<link rel="stylesheet" href="{{asset('css/HOME.css')}}">


	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
	<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script src="https://unpkg.com/vue-router@2.0.0/dist/vue-router.js"></script>

	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>	
	<div class="dad-div" id="app1">
		<div class="father" :class="{ fath: active }">			
			<div class="theme-f">

			</div>
			<div class="CODE-MAN">
				<div class="CODE">
					<h1 class="DISCOVER">
						Discover my Amazing <br>Art Space
					</h1>
					<pre class="cod-dad">
<<p class="cod">code</p>> I build ios and andr < /<p class="cod">code</p>>
					</pre>
					<div class="explore">
						EXPLORE NOW
					</div>
				</div>
				<div class="MAN">
				</div>
			</div>
			<div class="somethings">
				<div class="thing">
					<h2 class="ten">
						10  +
					</h2>
					<p class="pop">Years experience</p>
				</div>
				<div class="thing">
					<h2 class="ten">
						143
					</h2>
                    <p class="pop">
                    	Lorem ipsum
                    </p>
				</div>
				<div class="thing">
					<h2 class="ten">
						114
					</h2>
					<p class="pop">
						Lorem ipsum</ dolor.
					</p>
				</div>
				<div class="thing">
					<h2 class="ten">
						20 +
					</h2>
					<p class="pop">Lorem ipsum</p>
				</div>

			</div>
			<h2 class="title">
				My service		
			</h2>
			<div class="grid-container" style="height:200px;">
				<div class="grid" v-for="(user , index) of users" :key="index">
					<h4 class="title" v-text="user.title">
					</h4>
					<p class="p0p" v-text="user.info">
						
					</p>

					<h4 class="yellow">
						ORDER NOV >
					</h4>
				</div>
			</div>
			<h2 class="title">
				Price Plans		
			</h2>

			<div class="grid-container2">
				<div class="grid2">
					<h4 class="title">
						Starter Price
					</h4>
					<div class="cost">$ <h1 class="hp">FREE</h1>hour</div>
					<div class="true-false">
						<p class="true">
							<i class="fa-solid fa-check"></i>
						</p>
						Ui Design
					</div>
					<div class="true-false">
						<p class="true">
							<i class="fa-solid fa-check"></i>
						</p>
						Web Development
					</div>
					<div class="true-false1">
						<p class="false">
							<i class="fa-solid fa-xmark"></i>
						</p>
						Logo Design
					</div>
					<div class="true-false1">
						<p class="false">
							<i class="fa-solid fa-xmark"></i>
						</p>
						Seo Optimization
					</div>
					<div class="true-false1">
						<p class="false">
							<i class="fa-solid fa-xmark"></i>
						</p>
						WordPress Integration
					</div>
					<h4 class="yellow">
						ORDER NOV >
					</h4>

				</div>
				<div class="grid3">
					<span class="span3">POPULAR</span>
					<h4 class="title">
						Hourly Payment
					</h4>
					<div class="cost">$ <h1 class="hp">29</h1>hour</div>
					<div class="true-false">
						<p class="true">
							<i class="fa-solid fa-check"></i>
						</p>
						Ui Design
					</div>
					<div class="true-false">
						<p class="true">
							<i class="fa-solid fa-check"></i>
						</p>
						Web Development
					</div>
					<div class="true-false">
						<p class="true">
							<i class="fa-solid fa-check"></i>
						</p>
						Logo Design
					</div>
					<div class="true-false1">
						<p class="false">
							<i class="fa-solid fa-xmark"></i>
						</p>
						Seo Optimization
					</div>
					<div class="true-false1">
						<p class="false">
							<i class="fa-solid fa-xmark"></i>
						</p>
						WordPress Integration
					</div>
					<h4 class="yellow">
						ORDER NOV >
					</h4>
				</div>
				<div class="grid2">
					<h4 class="title">
						Full time
					</h4>

					<div class="cost">$ <h1 class="hp">2999</h1>hour</div>

					<div class="true-false">
						<p class="true">
							<i class="fa-solid fa-check"></i>
						</p>
						Ui Design
					</div>
					<div class="true-false">
						<p class="true">
							<i class="fa-solid fa-check"></i>
						</p>
						Web Development
					</div>
					<div class="true-false">
						<p class="true">
							<i class="fa-solid fa-check"></i>
						</p>
						Logo Design
					</div>
					<div class="true-false">
						<p class="true">
							<i class="fa-solid fa-check"></i>
						</p>
						Seo OPTIMIZATION
					</div>
					<div class="true-false">
						<p class="true">
							<i class="fa-solid fa-check"></i>
						</p>
						WordPress Integration
					</div>

					<h4 class="yellow">
						ORDER NOV >
					</h4>
				</div>
			</div>
			<h2 class="title">
				Recommebdations
			</h2>
			<br>			
			<div class="grid-container3">
				<div class="Paul" v-for="users of user">
					<h2 class="title" v-text="users.title">
					</h2>
					<p class="templ" v-text="users.info">
					</p>
					<br>
					<br>
					<div class="stars" style="justify-content:flex-start">
						<pre class="star" style="display: flex;justify-content: flex-start;">
							<i class="fa-solid fa-star"  v-for="i of users.rate"></i>
							<i class="fa-solid fa-star" style="font-weight: 200;" v-for="i of '5' -  users.rate"></i>
						</pre>
					</div>
				</div>
			</div>
			<div class="grid-container4" style="margin-top: 10px;">
			</div>					 
			<div class="grid-container4">
				<img  :src="parseJson(users.image)" v-for="users of img" style="height:200px;width:226px">
			</div>							
			<div class="by-someone">
				<p class="h3">@All Right Reserved</p>
				<p class="h3">Email:admin@bewsae.sit</p>
			</div>
		</div>



	<div class="dad-div2" :class="{ big: active }">
		<div class="btn">
			<input type="checkbox" id="checked">
			<label for="checked" class="bar-btn2"  @click="active = !active" :aria-pressed="active ? 'true' : 'false'">
    			<span class="span2"></span>
      			<span class="span2"></span>
      			<span class="span2"></span>
			</label>
		</div>

		<div class="rotate" style="width:10%;" :class="{ home: active }">
				HOME
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
	<script>
        
        var app = new Vue({
        el:'#app1',
        data: {
                domain_url: window.location.origin+'/',
				users: [],
				user:[],
				img:[],
				active: false
        },
	mounted() {
        fetch(this.domain_url + "api/" + "recomend")
            .then(red => red.json())
            .then(data => {
              this.user = data.recomendation
                console.log(data.recomendation)
            })
			fetch(this.domain_url  + "api/" +`services`)
            .then(resp => resp.json())
            .then((rep) => {
                this.users = rep.services
                console.log(rep.services)
            })			
			fetch(this.domain_url + "api/" + `brand`)
            .then(image => image.json())
            .then((date) => {
                this.img = date.brand
                console.log(date.brand)
            })				
    },	
	methods:{
		parseJson(jsonArray) {
			if ( this.isJsonString(jsonArray)) {
			if( this.isJsonString(jsonArray).length > 0) {
				return this.domain_url+'storage/' +  this.isJsonString(jsonArray)[0];
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
</body>
</html>