<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>

	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
	<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script src="https://unpkg.com/vue-router@2.0.0/dist/vue-router.js"></script>

	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body  style="background-color:black;height:100%;width:100%">
<div style="display:flex ;flex-direction:column;justify-content:center;height:100vh">
	<div class="card" id="app1">
		<div class="row g-0">
		<div class="col-sm-9" v-for="(user,index) of images"  :key="index">
			<img :src="'/storage/'+user"  class="card-img-top h-100" style="width: 1100px;height:1000px">      
		</div>			
			<div class="col-sm-1">
				<div class="card-body d-flex flex-column justify-content-center h-100 w-100">
					<h5 class="card-title" v-text="title"></h5>
					<p class="card-text" v-text="info"></p>
					<p class="card-text"   v-text="category"></p>
					<button class="btn btn-primary stretched-link">Previous </button>
				</div>
			</div>
		</div>
		<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
			<ol class="carousel-indicators">
				<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
				<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
				<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
			</ol>
			<div class="carousel-inner">
				<div class="carousel-item active" v-for="(user,index) of images"  :key="index">
				<img :src="'/storage/'+user"  class="card-img-top h-100" style="width: 1100px;height:1000px">      
				</div>
			</div>
			<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="sr-only">Previous</span>
			</a>
			<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="sr-only">Next</span>
			</a>
		</div>		
	</div>
</div>

<script>
        
        var app = new Vue({
        el:'#app1',
        data: {
                domain_url: window.location.origin+'/',
				users: [],
				url:window.location.href,
				id:'',
				title:'',
				info:'',
				category:'',
				images:[],
        },
        mounted() {		
			fetch(this.domain_url + `blog/` + this.url.split('/')[5])
				.then(resp => resp.json())
				.then((resp) => {
					console.log(resp)
					this.title = resp.blogs.title
					this.info = resp.blogs.info
					this.images = json.parse(resp.blogs.image);
					this.id = resp.blogs.id;
					this.category = resp.blogs.category;				

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