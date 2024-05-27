<!DOCTYPE html>
<html lang="en">
<head>
	<meta name="csrf-token" content="{{csrf_token()}}">
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet"/>
<link href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/4.0.0/mdb.min.css" rel="stylesheet">
</head>
<style>
#upload-photo {
   opacity: 0;
   position: absolute;
   z-index: -1;
}	
</style>
<body>
<div class="d-flex w-100 justify-content-center align-items-center vh-100" style="background: blue;" id="app">	
<div  style="padding: 23px;width: 40%;background: white;border-radius: 25px;">	
<ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
      aria-controls="pills-login" aria-selected="true">Login</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="tab-register" data-mdb-toggle="pill" href="#pills-register" role="tab"
      aria-controls="pills-register" aria-selected="false">Register</a>
  </li>
</ul>
	<div class="tab-content">
	  <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
	    <form @submit.prevent="Checkit()">
	      <div class="text-center mb-3">
	        <p>Sign in with:</p>
	        <!-- {{Auth::check()?'yes':'no'}} -->
	        <button type="button" class="btn btn-link btn-floating mx-1">
	          <i class="fab fa-facebook-f"></i>
	        </button>

	        <button type="button" class="btn btn-link btn-floating mx-1">
	          <i class="fab fa-google"></i>
	        </button>

	        <button type="button" class="btn btn-link btn-floating mx-1">
	          <i class="fab fa-twitter"></i>
	        </button>

	        <button type="button" class="btn btn-link btn-floating mx-1">
	          <i class="fab fa-github"></i>
	        </button>
	      </div>

	      <p class="text-center">or:</p>

	      <!-- Email input -->
	      <div class="form-outline mb-4">
	        <input type="email" id="loginName" class="form-control" v-model="email"/>
	        <label class="form-label" for="loginName">Email</label>
	      </div>

	      <!-- Password input -->
	      <div class="form-outline mb-4">
	        <input type="password" id="loginPassword" class="form-control" v-model="password"/>
	        <label class="form-label" for="loginPassword">Password</label>
	      </div>

	      <!-- 2 column grid layout -->
	      <div class="row mb-4">
	        <div class="col-md-6 d-flex justify-content-center">
	          <!-- Checkbox -->
	          <div class="form-check mb-3 mb-md-0">
	            <input class="form-check-input" type="checkbox" value="" id="loginCheck" checked />
	            <label class="form-check-label" for="loginCheck"> Remember me </label>
	          </div>
	        </div>

	        <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>

	        <div class="col-md-6 d-flex justify-content-center">
	          <!-- Simple link -->
	          <a href="#!">Forgot password?</a>
	        </div>
	      </div>
	    </form>
	      

	      <div class="text-center">
	        <p>Not a member? <a href="#">Register</a></p>
	      </div>	      
	  </div>
	  <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
	    <form>
	      <div class="text-center mb-3">
	        <p>Sign up with:</p>
	        <button type="button" class="btn btn-link btn-floating mx-1">
	          <i class="fab fa-facebook-f"></i>
	        </button>

	        <button type="button" class="btn btn-link btn-floating mx-1">
	          <i class="fab fa-google"></i>
	        </button>

	        <button type="button" class="btn btn-link btn-floating mx-1">
	          <i class="fab fa-twitter"></i>
	        </button>

	        <button type="button" class="btn btn-link btn-floating mx-1">
	          <i class="fab fa-github"></i>
	        </button>
	      </div>

	      <p class="text-center">or:</p>

	      <!-- Name input -->
	      <div class="form-outline mb-4">
	        <input type="text" id="registerName" class="form-control" v-model="name"/>
	        <label class="form-label" for="registerName">Name</label>
	      </div>

	      <!-- Username input -->
	      <div class="form-outline mb-4">
	        <input type="text" id="registerUsername" class="form-control" v-model="surname" />
	        <label class="form-label" for="registerUsername">Username</label>
	      </div>

	      <!-- Email input -->
	      <div class="form-outline mb-4">
	        <input type="email" id="registerEmail" class="form-control" v-model="email"/>
	        <label class="form-label" for="registerEmail">Email</label>
	      </div>

	      <!-- Password input -->
	      <div class="form-outline mb-4">
	        <input type="password" id="registerPassword" class="form-control" v-model="password" />
	        <label class="form-label" for="registerPassword">Password</label>
	      </div>

	      <!-- Checkbox -->
	      <div class="form-check d-flex justify-content-center mb-4">
	        <input class="form-check-input me-2" type="checkbox" value="" id="registerCheck" checked
	          aria-describedby="registerCheckHelpText" />
	        <label class="form-check-label" for="registerCheck">
	          I have read and agree to the terms
	        </label>
	      </div>

	      <!-- Submit button -->
	    </form>
	      <button type="submit" class="btn btn-primary btn-block mb-3"  @click='adduser()'>Sign in</button>
	  </div>
	</div>
</div>	
</div>
	<script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script> 
	<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/4.0.0/mdb.min.js"></script>	

	<script>
		
  var app = new Vue ({
  el:"#app",
		data:{
			domain_url: "{{url('')}}",
			token:document.querySelector('meta[name="csrf-token"]').content,
   		word:[],
   		name:'',
   		surname:'',
   		email:"",
   		password:'',
   		images:'',
    },
		methods: {
    adduser(){
    	console.log(this.name)
			let formData = new FormData();
			formData.append("name",this.name);
			formData.append("surname",this.surname);
			formData.append("email",this.email);
			formData.append("password",this.password); 
			formData.append("_token",this.token);
		fetch(this.domain_url + '/reg_save',{
		  method:"POST",
		  body:formData,
		})
		.then(rep=> rep.json())
		.then(res=>{
		  if (res.status == "ok") {
		  	document.querySelector('#tab-login').click();
		  }
		  console.log(res)
		})
		},
    Checkit(){
			let formData = new FormData();
			formData.append("email",this.email);
			formData.append("password",this.password); 
			formData.append("_token",this.token);

		fetch(this.domain_url + '/login',{
		  method:"POST",
		  body:formData,
		})
		.then(rep=> rep.json())
		.then(res=>{
		  if (res.status == "ok") {
		  	window.location.href = this.domain_url  
			console.log('http://portfolio/#/')
		  }
		  if (res.status == "none") {
		  	alert('Shundey email yoq')
		  }		  
		  console.log(res)
		})
		},	
		selectFile(event) {

		  	let formData = new FormData();
		  	formData.append("photo",event.target.files[0]);
		formData.append("_token",this.$parent.token);

		    fetch(this.domain_url + 'reg_save', {
		      method:"POST",
		      body:formData,
		    })
		},
		changeRadio($event) {
		console.log($event.target.value);
		this.category = $event.target.value;
 }

},	   
  })
</script>    
</body>
</html>
