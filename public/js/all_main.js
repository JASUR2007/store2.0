var Product = {
	template:`
    <div class='product_main'>
		     	<div id="main">
				<div  style="background-color:whitesmoke;height:100%;padding:20px 35px 20px"> 
				  <div class="product_div_4">
				    <div><b><h3>Books</h3></b></div>
				    <div class="product_div_5">
				      <button class="btn button_products1" style="background-color:white"><span><i class='bx bxs-cloud-upload' style="margin-left:-5px"></i><b style="margin-top:-5px">Export</b></span></button>
				      <button class="btn btn-primary button_products1" style="" @click="click_store"><b>+ Create new</b></button>
				    </div>
				  </div>
				        <div class="" style="background-color:white;border-radius:5px;padding: 11px 0px 40px;">
				            <div style="display:flex;justify-content:space-between;" class="product_div_7">
				              <div style="display:flex;padding: 0px 10px 0px;">
				                  <input type="" class="form-control input_pro" id="exampleInputEmail1" placeholder="Search">
				              </div>
				              <div class="d-flex justify-content-around" style="width:340px;padding-right:50px">
				                <select class="form-select form_product">
				                  <option selected>Category</option>
				                  <option value="1">One</option>
				                  <option value="2">Two</option>
				                  <option value="3">Three</option>
				                </select> 
				                <button class="btn" style="border:1px solid grey;background-color:white;width:140px">
				                  <span style="color:grey;">Last added<i class='bx bxs-hand-up' style="padding-left:5px"></i></span>
				                </button>           
				              </div>                
				            </div>
				            <hr width="100%" height="2px">
				          <div  style="height:100%;padding:20px;gap:20px"> 
								<table class="table table ">
								  <thead>
								    <tr>
								      <th scope="col">#</th>
								      <th scope="col">First</th>
								      <th scope="col">Images</th>
								      <th scope="col">Handle</th>
								    </tr>
								  </thead>
								  <tbody>
								    <tr v-for="(user,index) of users" :key="index">
								      <th scope="row">{{user.id}}</th>
								      <td>{{user.title}}</td>
								      <td><img style="height: 50px;width: 60px;" :src="parseJson(user.image)"></td>
								      <td class="d-flex align-items-center" height="67px">
										<a :href="'/edit/'+user.id" data-bs-toggle="dropdown" class="text-decoration "  style="border: 1px solid transparent;border-color: rgba(108, 117, 125, 0.25);background-color: #fff;padding: 0.25rem 0.5rem;font-size: 0.875rem;color:grey;margin:2px;width: 64px;height: 30px;"> 
											<i class='bx bxs-pencil' style=""></i>  Edit  
										 </a>
										<a @click="deletePro(user.id,index)" data-bs-toggle="dropdown" class="btn btn-sm btn-outline-danger" style="width: 60px;height: 35px;font-size:10px;align-items: center;display: flex;"> 
											<i class='bx bxs-trash' ></i>  Delete  
										</a>
									 </td>
								    </tr>
								  </tbody>
								</table>				           
				          </div>
				        </div>
				     </div>  
			</div>
	   </div> 
   </div>
	`,
    data(){
        return{
users:[],
 slider:{},
        }
    },
      mounted(){
        fetch(this.$parent.domain_url + "api/" + 'services')
          .then(rep=> rep.json())
           .then (res => {
            console.log(res)

           	this.users=res.services
    })
      },
methods:{
        parseJson(jsonArray) {
            if ( this.isJsonString(jsonArray)) {
               if( this.isJsonString(jsonArray).length > 0) {
                return this.$parent.domain_url+'storage/' +  this.isJsonString(jsonArray)[0];
               }
            } else {
                return "";
            }
        },
		deletePro(id,index){
		            let tek = confirm("Are you sure deleting?")
		            if(tek){
		                let formdata = new FormData()
		                formdata.append("id",id)
		                formdata.append("_token",this.$parent.token)

		                fetch(this.$parent.domain_url + 'delete-service', {
		                    method:"POST",
		                    body:formdata
		                })
		                .then(res=>res.json())
		                .then(resp=>{
		                    console.log(resp);
		                    if(resp.status==="deleted!"){
		                        this.users.splice(index,1);
		                    }
		                })
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
    click_store(){
    	this.$router.push("/add_store")
    }
  }
}
var Edit = {
	template:`

	    <div class="vh-100 d-flex justify-content-center align-items-center" style="flex-direction:column">
	        <form class="w-50">
	            <div >
	        		<label for="formFile" class="form-label">Title</label>
	         	 	<input  class="form-control" type="text" v-model="title">
	         	 </div>            
	       		<label for="formFile" class="form-label">FUll description</label>
	    	      <input class="form-control" type="text" v-model="info">
	     	    <label for="formFile" class="form-label">Text</label>
          	  <div class="mb-3 d-flex" >
                    <label for="upload-photo" class="labe" style="display:flex;gap:10px;overflow: auto;flex-wrap: wrap;">
                      <div style="height:60px;width:60px;background-color:whitesmoke;border-radius:5px;display:flex;cursor:pointer" class="align-items-center justify-content-center flex-column">
                        	<img src='data:image/png;base64,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' alt="" style="color:grey;width:20px;height:20px">
                       		 <div style="font-size:10px;color:grey">Upload</div>
                      </div>
					</label>
                      <div v-for="(img,index) in images"  :key="index"  style="height:60px;position:relative;width:60px;background-color:whitesmoke;border-radius:5px;display:flex;cursor:pointer" class="align-items-center justify-content-center flex-column">
                       	 <img :src="$parent.domain_url+'storage/'+img"  alt="" style="color:grey;width:90%;height:90%" >
							<i class='bx bx-x' @click="ImgDelete(index)" style="font-size:30px;position:absolute;top: -5px;left: 35px;"></i>

                      </div>
					  
                    <input type="file" name="photo" id="upload-photo" @change = "selectFile($event)"/>

           	   </div>	   

	        </form>
	         	 <button class="btn btn-warning mt-2 w-50" @click="edit_store">Submit</button>
	    </div>
	    </div>  	
	`,
    data(){
        return{
        	title:'',
        	info:'',	
        	users:[],
        	images:[],
        	categories:[],
			index:"",
        }
    },
mounted(){
	fetch(this.$parent.domain_url +   'services/' + this.$route.params.id)
        .then((res)=>res.json())
        .then(resp=>{
        	console.log(resp)
			this.title = resp.products[0].title
			this.info = resp.products[0].info
			this.images = JSON.parse(resp.products[0].image);


        })       

},
    methods:{
        
		changeRadio($event) {
		  console.log($event.target.value);
		  this.category = $event.target.value;
		},
        selectFile(event) {

          	let formData = new FormData();
          	formData.append("photo",event.target.files[0]);
			formData.append("_token",this.$parent.token);

            fetch(this.$parent.domain_url + 'upload-img', {
              method:"POST",
              body:formData,
            })
            .then(rep=> rep.json())
            .then(res=>{
              this.images.unshift(res.data);            
            });
        },
        edit_store(){
            let formdata = new FormData();
				formdata.append("_token",this.$parent.token);
	            formdata.append("title",this.title)
	            formdata.append("info",this.info)
				formdata.append("images",JSON.stringify(this.images))
	            formdata.append("id",this.$route.params.id)

            fetch(this.$parent.domain_url + `update-product`,{
                method:"post",
                body:formdata
            })
            .then(res=>res.json())
            .then(resp=>{
                if (resp.status=="ok!") {
                    this.$router.push("/")
                }
                console.log(resp)
            })
        },
		ImgDelete(index) {
            let tek = confirm("Are you sure deleting?");
            if (tek) {

                let formdata = new FormData();
                formdata.append("id", this.$route.params.id);
                formdata.append("index", index);
                formdata.append("_token", this.$parent.token);

                fetch(this.$parent.domain_url + 'deleteimg', {
                    method: "post",
                    body: formdata
                })
                    .then(res => res.json())
                    .then(res => {
                        if (res.status === "Deleted") {
                            this.images.splice(index, 1);
                        }
                    });
            }
        },

    }
}

var Add_store = {
	template:`
		     <div id="main" >
		      	<div  class="add_st"> 
		          <h3 style="height:60px">Create Product</h3>
		       	  <div class="" style="background-color:white;border-radius:5px;padding: 9px 14px 0px;">
		          	<div class="d-flex " id="" >
		               <div  style="width:100%">
		               	   <form class="w-100 form_store" style="margin-left:-10px;">
		                   		<div class="d-flex w-100 justify-content-between form_store_2">
		                      		<label style="font-weight:600;color:black" for="formFile" class="form-label">1.General info</label>
		                        	<div class="text_add">
		                        	    <label style="" for="formFile" class="form-label d-flex">Product title</label>
			                        	 <input class="form-control" style="font-size:14px;height:30px;color:grey;width:100%;" type="text" placeholder="Text" v-model="title">
			                          	<label  for="formFile" class="form-label d-flex">Full description</label>
			                         	<textarea placeholder="Type here" style="color:grey;border:1px solid #80808047;" class="store_textarea" name="" id="" cols="47" rows="6" v-model="info"></textarea >
		                        	</div>
		                   	   </div>
		                   	   <div>
		                     		<hr>
		                 	  </div>
		                  	  <div class="mb-3" >
			                        <label for="upload-photo" class="labe" style="display:flex;gap:10px;overflow: auto;flex-wrap: wrap;">
			                          <div style="height:60px;width:60px;background-color:whitesmoke;border-radius:5px;display:flex;cursor:pointer" class="align-items-center justify-content-center flex-column">
			                            	<img src='data:image/png;base64,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' alt="" style="color:grey;width:20px;height:20px">
			                           		 <div style="font-size:10px;color:grey">Upload</div>
			                          </div>		 	                        
			                          <div v-for="(img,index) in images" :key="index" style="height:60px;width:60px;background-color:whitesmoke;border-radius:5px;display:flex;cursor:pointer" class="align-items-center justify-content-center flex-column">
			                           	 <img :src="$parent.domain_url+'storage/'+img"  alt="" style="color:grey;width:90%;height:90%">
			                          </div>
			                       </label>
			                        <input type="file" name="photo" id="upload-photo"  @change = "selectFile($event)"/>                      
		                   	   </div>
		                  		  <hr>
		                  	 <div>
		                   	    <hr>
		                   	</div>
		                </form>
		            </div>
		          </div>
		          <div class="d-flex  justify-content-end">
		         	 <button class="btn  btn-outline-dark" >Save draft</button>
		         	 <button class="btn btn-primary" @click="adduser">Save product</button>
		          </div>
		      </div>  
		  </div>
		</div>		   
	   </div> 
   </div>
		`,
   data(){
        return{
	      lab:false,
	      tru1:false,
	      price:'',
	      images:[],      
	      title:'',
	      info:'',
        }
    },
	methods: {
        selectFile(event) {
	      	let formData = new FormData();
	      	formData.append("photo",event.target.files[0]);
			formData.append("_token",this.$parent.token);

	        fetch(this.$parent.domain_url + 'upload-img', {
	          method:"POST",
	          body:formData,
	        })
	        .then(rep=> rep.json())
	        .then(res=>{
	          this.images.push(res.data);
	        });
    	},
	    adduser(){
	        
			let formData = new FormData();
			formData.append("title",this.title);
			formData.append("info",this.info);
			formData.append("images",JSON.stringify(this.images)); 
			formData.append("_token",this.$parent.token);


			fetch(this.$parent.domain_url + 'create-service', {
			  method:"POST",
			  body:formData,
			})
			.then(rep=> rep.json())
			.then(res=>{
			  if (res.status == "ok") {
			  this.$router.push("/") 
			  }
			  console.log(res)
			});
		},
		changeRadio($event) {
	  		console.log($event.target.value);
	  		this.category = $event.target.value;
		},
	}
}
// var Add_store = {
// 	template:`
// 		     <div id="main" >
// 		      	<div  class="add_st"> 
// 		          <h3 style="height:60px">Create Product</h3>
// 		       	  <div class="" style="background-color:white;border-radius:5px;padding: 9px 14px 0px;">
// 		          	<div class="d-flex " id="" >
// 		               <div  style="width:100%">
// 		               	   <form class="w-100 form_store" style="margin-left:-10px;">
// 		                   		<div class="d-flex w-100 justify-content-between form_store_2">
// 		                      		<label style="font-weight:600;color:black" for="formFile" class="form-label">1.General info</label>
// 		                        	<div class="text_add">
// 		                        	    <label style="" for="formFile" class="form-label d-flex">Product title</label>
// 			                        	 <input class="form-control" style="font-size:14px;height:30px;color:grey;width:100%;" type="text" placeholder="Text" v-model="title">
// 			                          	<label  for="formFile" class="form-label d-flex">Full description</label>
// 			                         	<textarea placeholder="Type here" style="color:grey;border:1px solid #80808047;" class="store_textarea" name="" id="" cols="47" rows="6" v-model="info"></textarea >
// 		                        	</div>
// 		                   	   </div>
// 		                   	   <div>
// 		                     		<hr>
// 		                 	  </div>
// 		                  	  <div class="mb-3" >
// 			                        <label for="upload-photo" class="labe" style="display:flex;gap:10px;overflow: auto;flex-wrap: wrap;">
// 			                          <div style="height:60px;width:60px;background-color:whitesmoke;border-radius:5px;display:flex;cursor:pointer" class="align-items-center justify-content-center flex-column">
// 			                            	<img src='data:image/png;base64,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' alt="" style="color:grey;width:20px;height:20px">
// 			                           		 <div style="font-size:10px;color:grey">Upload</div>
// 			                          </div>			                        
// 			                          <div v-for="(img,index) in images" :key="index" style="height:60px;width:60px;background-color:whitesmoke;border-radius:5px;display:flex;cursor:pointer" class="align-items-center justify-content-center flex-column">
// 			                           	 <img :src="$parent.domain_url+'storage/'+img"  alt="" style="color:grey;width:90%;height:90%">
// 			                          </div>
// 			                       </label>
// 			                        <input type="file" name="photo" id="upload-photo"  @change = "selectFile($event)"/>                      
// 		                   	   </div>
// 		                  		  <hr>
// 		                  	 <div>
// 		                   	    <hr>
// 		                   	</div>
// 		                </form>
// 		            </div>
// 		          </div>
// 		          <div class="d-flex  justify-content-end">
// 		         	 <button class="btn  btn-outline-dark" >Save draft</button>
// 		         	 <button class="btn btn-primary" @click="adduser">Save product</button>
// 		          </div>
// 		      </div>  
// 		  </div>
// 		</div>		   
// 	   </div> 
//    </div>
// 		`,
//    data(){
//         return{
// 	      lab:false,
// 	      tru1:false,
// 	      price:'',
// 	      images:[],      
// 	      title:'',
// 	      info:'',
//         }
//     },
// 	methods: {
//         selectFile(event) {
// 	      	let formData = new FormData();
// 	      	formData.append("photo",event.target.files[0]);
// 			formData.append("_token",this.$parent.token);

// 	        fetch(this.$parent.domain_url + 'upload-img', {
// 	          method:"POST",
// 	          body:formData,
// 	        })
// 	        .then(rep=> rep.json())
// 	        .then(res=>{
// 	          this.images.push(res.data);
// 	        });
//     	},
// 	    adduser(){
	        
// 			let formData = new FormData();
// 			formData.append("title",this.title);
// 			formData.append("info",this.info);
// 			formData.append("images",JSON.stringify(this.images)); 
// 			formData.append("_token",this.$parent.token);


// 			fetch(this.$parent.domain_url + 'create-service', {
// 			  method:"POST",
// 			  body:formData,
// 			})
// 			.then(rep=> rep.json())
// 			.then(res=>{
// 			  if (res.status == "ok") {
// 			  this.$router.push("/") 
// 			  }
// 			  console.log(res)
// 			});
// 		},
// 		changeRadio($event) {
// 	  		console.log($event.target.value);
// 	  		this.category = $event.target.value;
// 		},
// 	}
// }
var card = {
	template:`
    <div class='product_main'>
		     	<div id="main">
				<div  style="background-color:whitesmoke;height:100%;padding:20px 35px 20px"> 
				  <div class="product_div_4">
				    <div><b><h3>Cards</h3></b></div>
				    <div class="product_div_5">
				      <button class="btn button_products1" style="background-color:white"><span><i class='bx bxs-cloud-upload' style="margin-left:-5px"></i><b style="margin-top:-5px">Export</b></span></button>
				      <button class="btn btn-primary button_products1" style="" @click="click_store"><b>+ Create new</b></button>
				    </div>
				  </div>
				        <div class="" style="background-color:white;border-radius:5px;padding: 11px 0px 40px;">
				            <div style="display:flex;justify-content:space-between;" class="product_div_7">
				              <div style="display:flex;padding: 0px 10px 0px;">
				                  <input type="" class="form-control input_pro" id="exampleInputEmail1" placeholder="Search">
				              </div>
				              <div class="d-flex justify-content-around" style="width:340px;padding-right:50px">
				                <select class="form-select form_product">
				                  <option selected>Category</option>
				                  <option value="1">One</option>
				                  <option value="2">Two</option>
				                  <option value="3">Three</option>
				                </select> 
				                <button class="btn" style="border:1px solid grey;background-color:white;width:140px">
				                  <span style="color:grey;">Last added<i class='bx bxs-hand-up' style="padding-left:5px"></i></span>
				                </button>           
				              </div>                
				            </div>
				            <hr width="100%" height="2px">
				          <div  style="height:100%;padding:20px;gap:20px"> 
								<table class="table table ">
								  <thead>
								    <tr>
								      <th scope="col">#</th>
								      <th scope="col">First</th>
								      <th scope="col">Images</th>
								      <th scope="col">Handle</th>
								    </tr>
								  </thead>
								  <tbody>
								    <tr v-for="(user,index) of users" :key="index">
								      <th scope="row">{{user.id}}</th>
								      <td>{{user.title}}</td>
								      <td><img style="height: 50px;width: 60px;" :src="parseJson(user.image)"></td>
								      <td class="d-flex align-items-center" height="67px">
										<a :href="'#edit_blog/'+user.id" data-bs-toggle="dropdown" class="text-decoration "  style="border: 1px solid transparent;border-color: rgba(108, 117, 125, 0.25);background-color: #fff;padding: 0.25rem 0.5rem;font-size: 0.875rem;color:grey;margin:2px;width: 64px;height: 30px;"> 
											<i class='bx bxs-pencil' style=""></i>  Edit  
										 </a>
										<a @click="deletePro(user.id,index)" data-bs-toggle="dropdown" class="btn btn-sm btn-outline-danger" style="width: 60px;height: 35px;font-size:10px;align-items: center;display: flex;"> 
											<i class='bx bxs-trash' ></i>  Delete  
										</a>
									 </td>
								    </tr>
								  </tbody>
								</table>				           
				          </div>
				        </div>
				     </div>  
			</div>
	   </div> 
   </div>
	`,
    data(){
        return{
users:[],
 slider:{},
        }
    },
      mounted(){
        fetch(this.$parent.domain_url + "api/" + 'blog')
          .then(rep=> rep.json())
           .then (res => {
            console.log(res)

           	this.users=res.blog
    })
      },
methods:{
        parseJson(jsonArray) {
            if ( this.isJsonString(jsonArray)) {
               if( this.isJsonString(jsonArray).length > 0) {
                return this.$parent.domain_url+'storage/' +  this.isJsonString(jsonArray)[0];
               }
            } else {
                return "";
            }
        },
		deletePro(id,index){
		            let tek = confirm("Are you sure deleting?")
		            if(tek){
		                let formdata = new FormData()
		                formdata.append("id",id)
		                formdata.append("_token",this.$parent.token)

		                fetch(this.$parent.domain_url + 'delete-blog', {
		                    method:"POST",
		                    body:formdata
		                })
		                .then(res=>res.json())
		                .then(resp=>{
		                    console.log(resp);
		                    if(resp.status==="deleted!"){
		                        this.users.splice(index,1);
		                    }
		                })
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
    click_store(){
    	this.$router.push("/add_card")
    }
  }
}
var add_card = {
	template:`
		     <div id="main" >
		      	<div  class="add_st"> 
		          <h3 style="height:60px">Create Product</h3>
		       	  <div class="" style="background-color:white;border-radius:5px;padding: 9px 14px 0px;">
		          	<div class="d-flex " id="" >
		               <div  style="width:100%">
		               	   <form class="w-100 form_store" style="margin-left:-10px;">
		                   		<div class="d-flex w-100 justify-content-between form_store_2">
		                      		<label style="font-weight:600;color:black" for="formFile" class="form-label">1.General info</label>
		                        	<div class="text_add">
		                        	    <label style="" for="formFile" class="form-label d-flex">Product title</label>
			                        	 <input class="form-control" style="font-size:14px;height:30px;color:grey;width:100%;" type="text" placeholder="Text" v-model="title">
			                          	<label  for="formFile" class="form-label d-flex">Full description</label>
			                         	<textarea placeholder="Type here" style="color:grey;border:1px solid #80808047;" class="store_textarea" name="" id="" cols="47" rows="6" v-model="info"></textarea >
		                        	</div>
		                   	   </div>
								  <div class="d-flex w-100 justify-content-between form_store_2">
								  <label style="font-weight:600;color:black" for="formFile" class="form-label">2.Category</label>
								<div class="text_add">
									<label style="" for="formFile" class="form-label d-flex">Category</label>
									 <input class="form-control" style="font-size:14px;height:30px;color:grey;width:100%;" type="text" placeholder="Text" v-model="category">
								</div>
							  </div>							  
		                   	   <div>
		                     		<hr>
		                 	  </div>
		                  	  <div class="mb-3" >
			                        <label for="upload-photo" class="labe" style="display:flex;gap:10px;overflow: auto;flex-wrap: wrap;">
			                          <div style="height:60px;width:60px;background-color:whitesmoke;border-radius:5px;display:flex;cursor:pointer" class="align-items-center justify-content-center flex-column">
			                            	<img src='data:image/png;base64,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' alt="" style="color:grey;width:20px;height:20px">
			                           		 <div style="font-size:10px;color:grey">Upload</div>
			                          </div>			                        
			                          <div v-for="(img,index) in images" :key="index" style="height:60px;width:60px;background-color:whitesmoke;border-radius:5px;display:flex;cursor:pointer" class="align-items-center justify-content-center flex-column">
			                           	 <img :src="$parent.domain_url+'storage/'+img"  alt="" style="color:grey;width:90%;height:90%">
			                          </div>
			                       </label>
			                        <input type="file" name="photo" id="upload-photo"  @change = "selectFile($event)"/>                      
		                   	   </div>
		                  		  <hr>
		                  	 <div>
		                   	    <hr>
		                   	</div>
		                </form>
		            </div>
		          </div>
		          <div class="d-flex  justify-content-end">
		         	 <button class="btn  btn-outline-dark" >Save draft</button>
		         	 <button class="btn btn-primary" @click="adduser">Save product</button>
		          </div>
		      </div>  
		  </div>
		</div>		   
	   </div> 
   </div>
		`,
   data(){
        return{
		 category:'',
	      info:'',
	      images:[],      
	      title:'',
	      info:'',
        }
    },
	methods: {
        selectFile(event) {
	      	let formData = new FormData();
	      	formData.append("photo",event.target.files[0]);
			formData.append("_token",this.$parent.token);

	        fetch(this.$parent.domain_url + 'upload-img', {
	          method:"POST",
	          body:formData,
	        })
	        .then(rep=> rep.json())
	        .then(res=>{
	          this.images.push(res.data);
	        });
    	},
	    adduser(){
	        
			let formData = new FormData();
			formData.append("title",this.title);
			formData.append("info",this.info);
			formData.append("category",this.category);
			formData.append("images",JSON.stringify(this.images)); 
			formData.append("_token",this.$parent.token);


			fetch(this.$parent.domain_url + 'create-blog', {
			  method:"POST",
			  body:formData,
			})
			.then(rep=> rep.json())
			.then(res=>{
			  if (res.status == "ok") {
			  this.$router.push("/card") 
			  }
			  console.log(res)
			});
		},
		changeRadio($event) {
	  		console.log($event.target.value);
	  		this.category = $event.target.value;
		},
	}
}
var edit_blog = {
	template:`

	    <div class="vh-100 d-flex justify-content-center align-items-center" style="flex-direction:column">
	        <form class="w-50">
	            <div >
	        		<label for="formFile" class="form-label">Title</label>
	         	 	<input  class="form-control" type="text" v-model="title">
	         	 </div>            
	       		<label for="formFile" class="form-label">FUll description</label>
	    	      <input class="form-control" type="text" v-model="info">
	     	    <label for="formFile" class="form-label">category</label>
				 <input class="form-control" type="text" v-model="category">
          	  <div class="mb-3 d-flex" >
                    <label for="upload-photo" class="labe" style="display:flex;gap:10px;overflow: auto;flex-wrap: wrap;">
                      <div style="height:60px;width:60px;background-color:whitesmoke;border-radius:5px;display:flex;cursor:pointer" class="align-items-center justify-content-center flex-column">
                        	<img src='data:image/png;base64,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' alt="" style="color:grey;width:20px;height:20px">
                       		 <div style="font-size:10px;color:grey">Upload</div>
                      </div>
					</label>
                      <div v-for="(img,index) in images"  :key="index"  style="height:60px;position:relative;width:60px;background-color:whitesmoke;border-radius:5px;display:flex;cursor:pointer" class="align-items-center justify-content-center flex-column">
                       	 <img :src="$parent.domain_url+'storage/'+img"  alt="" style="color:grey;width:90%;height:90%" >
							<i class='bx bx-x' @click="ImgDelete(index)" style="font-size:30px;position:absolute;top: -5px;left: 35px;"></i>

                      </div>
					  
                    <input type="file" name="photo" id="upload-photo" @change = "selectFile($event)"/>

           	   </div>	   

	        </form>
	         	 <button class="btn btn-warning mt-2 w-50" @click="edit_store">Submit</button>
	    </div>
	    </div>  	
	`,
    data(){
        return{
        	title:'',
        	info:'',	
        	users:[],
        	images:[],
        	category:'',
			index:"",
        }
    },
mounted(){
	fetch(this.$parent.domain_url + 'blog/' + this.$route.params.id)
        .then((res)=>res.json())
        .then(resp=>{
        	console.log(resp)
			this.title = resp.blogs.title
			this.info = resp.blogs.info
			this.category = resp.blogs.category
			this.images = JSON.parse(resp.blogs.image);


        })       

},
    methods:{
        
		changeRadio($event) {
		  console.log($event.target.value);
		  this.category = $event.target.value;
		},
        selectFile(event) {

          	let formData = new FormData();
          	formData.append("photo",event.target.files[0]);
			formData.append("_token",this.$parent.token);

            fetch(this.$parent.domain_url + 'upload-img', {
              method:"POST",
              body:formData,
            })
            .then(rep=> rep.json())
            .then(res=>{
              this.images.unshift(res.data);            
            });
        },
        edit_store(){
            let formdata = new FormData();
				formdata.append("_token",this.$parent.token);
	            formdata.append("title",this.title)
	            formdata.append("info",this.info)
	            formdata.append("category",this.category)
				formdata.append("images",JSON.stringify(this.images))
	            formdata.append("id",this.$route.params.id)

            fetch(this.$parent.domain_url + `update-blog`,{
                method:"post",
                body:formdata
            })
            .then(res=>res.json())
            .then(resp=>{
                if (resp.status=="ok!") {
                    this.$router.push("/card")
                }
                console.log(resp)
            })
        },
		ImgDelete(index) {
            let tek = confirm("Are you sure deleting?");
            if (tek) {

                let formdata = new FormData();
                formdata.append("id", this.$route.params.id);
                formdata.append("index", index);
                formdata.append("_token", this.$parent.token);

                fetch(this.$parent.domain_url + 'deleteimg_blog', {
                    method: "post",
                    body: formdata
                })
                    .then(res => res.json())
                    .then(res => {
                        if (res.status === "Deleted") {
                            this.images.splice(index, 1);
                        }
                    });
            }
        },

    }
}
var recomend = {
	template:`
    <div class='product_main'>
		     	<div id="main">
				<div  style="background-color:whitesmoke;height:100%;padding:20px 35px 20px"> 
				  <div class="product_div_4">
				    <div><b><h3>Mahsulotlar</h3></b></div>
				    <div class="product_div_5">
				      <button class="btn button_products1" style="background-color:white"><span><i class='bx bxs-cloud-upload' style="margin-left:-5px"></i><b style="margin-top:-5px">Export</b></span></button>
				      <button class="btn btn-primary button_products1" style="" @click="click_store"><b>+ Create new</b></button>
				    </div>
				  </div>
				        <div class="" style="background-color:white;border-radius:5px;padding: 11px 0px 40px;">
				            <div style="display:flex;justify-content:space-between;" class="product_div_7">
				              <div style="display:flex;padding: 0px 10px 0px;">
				                  <input type="" class="form-control input_pro" id="exampleInputEmail1" placeholder="Search">
				              </div>
				              <div class="d-flex justify-content-around" style="width:340px;padding-right:50px">
				                <select class="form-select form_product">
				                  <option selected>Category</option>
				                  <option value="1">One</option>
				                  <option value="2">Two</option>
				                  <option value="3">Three</option>
				                </select> 
				                <button class="btn" style="border:1px solid grey;background-color:white;width:140px">
				                  <span style="color:grey;">Last added<i class='bx bxs-hand-up' style="padding-left:5px"></i></span>
				                </button>           
				              </div>                
				            </div>
				            <hr width="100%" height="2px">
				          <div  style="height:100%;padding:20px;gap:20px"> 
								<table class="table table ">
								  <thead>
								    <tr>
								      <th scope="col">#</th>
								      <th scope="col">First</th>
								      <th scope="col">Images</th>
								      <th scope="col">Handle</th>
								    </tr>
								  </thead>
								  <tbody>
								    <tr v-for="(user,index) of users" :key="index">
								      <th scope="row">{{user.id}}</th>
								      <td>{{user.title}}</td>
								      <td><i class='bx bxs-star' style="color:red" v-for="i of user.rate"></i></td>
								      <td class="d-flex align-items-center" height="67px">
										<a :href="'#edit_recomend/'+user.id" data-bs-toggle="dropdown" class="text-decoration "  style="border: 1px solid transparent;border-color: rgba(108, 117, 125, 0.25);background-color: #fff;padding: 0.25rem 0.5rem;font-size: 0.875rem;color:grey;margin:2px;width: 64px;height: 30px;"> 
											<i class='bx bxs-pencil' style=""></i>  Edit  
										 </a>
										<a @click="deletePro(user.id,index)" data-bs-toggle="dropdown" class="btn btn-sm btn-outline-danger" style="width: 60px;height: 35px;font-size:10px;align-items: center;display: flex;"> 
											<i class='bx bxs-trash' ></i>  Delete  
										</a>
									 </td>
								    </tr>
								  </tbody>
								</table>				           
				          </div>
				        </div>
				     </div>  
			</div>
	   </div> 
   </div>
	`,
    data(){
        return{
users:[],
 slider:{},
        }
    },
      mounted(){
        fetch(this.$parent.domain_url + 'api/' + 'recomend')
          .then(rep=> rep.json())
           .then (res => {
            console.log(res)

           	this.users=res.recomendation
    })
      },
methods:{
		deletePro(id,index){
		            let tek = confirm("Are you sure deleting?")
		            if(tek){
		                let formdata = new FormData()
		                formdata.append("id",id)
		                formdata.append("_token",this.$parent.token)

		                fetch(this.$parent.domain_url + 'delete-recomend', {
		                    method:"POST",
		                    body:formdata
		                })
		                .then(res=>res.json())
		                .then(resp=>{
		                    console.log(resp);
		                    if(resp.status==="deleted!"){
		                        this.users.splice(index,1);
		                    }
		                })
		            }
		            
		            
		          
		        },        

    click_store(){
    	this.$router.push("/add_card")
    }
  }
}
var add_recomend = {
	template:`
		     <div id="main" >
		      	<div  class="add_st"> 
		          <h3 style="height:60px">Create Product</h3>
		       	  <div class="" style="background-color:white;border-radius:5px;padding: 9px 14px 0px;">
		          	<div class="d-flex " id="" >
		               <div  style="width:100%">
		               	   <form class="w-100 form_store" style="margin-left:-10px;">
		                   		<div class="d-flex w-100 justify-content-between form_store_2">
		                      		<label style="font-weight:600;color:black" for="formFile" class="form-label">1.General info</label>
		                        	<div class="text_add">
		                        	    <label style="" for="formFile" class="form-label d-flex">Product title</label>
			                        	 <input class="form-control" style="font-size:14px;height:30px;color:grey;width:100%;" type="text" placeholder="Text" v-model="title">
			                          	<label  for="formFile" class="form-label d-flex">Full description</label>
			                         	<textarea placeholder="Type here" style="color:grey;border:1px solid #80808047;" class="store_textarea" name="" id="" cols="47" rows="6" v-model="info"></textarea >
		                        	</div>
		                   	   </div>
		                  	  <div class="mb-3" >
								<label  for="formFile" class="form-label d-flex">Range</label>
								<span>{{rate}}</span>
								<input type="range" min="0,5" max="5" class="form-range" id="customRange1" v-model="rate">                      
		                   	   </div>
		                  		  <hr>
									</form>
		          <div class="d-flex  justify-content-end">
		         	 <button class="btn  btn-outline-dark" >Save draft</button>
		         	 <button class="btn btn-primary" @click="adduser">Save product</button>
		          </div>
		      </div>  
		  </div>
		</div>		   
	   </div> 
   </div>
		`,
   data(){
        return{
     	  rate:'',
	      title:'',
	      info:'',
        }
    },
	methods: {
	    adduser(){
	        
			let formData = new FormData();
			formData.append("title",this.title);
			formData.append("info",this.info);
			formData.append("rate",this.rate);
			formData.append("_token",this.$parent.token);


			fetch(this.$parent.domain_url + 'create-recomend', {
			  method:"POST",
			  body:formData,
			})
			.then(rep=> rep.json())
			.then(res=>{
			  if (res.status == "ok") {
			  this.$router.push("/recomend") 
			  }
			  console.log(res)
			});
		},
	}
}
var edit_recomend = {
	template:`

	    <div class="vh-100 d-flex justify-content-center align-items-center" style="flex-direction:column">
	        <form class="w-50">
	            <div >
	        		<label for="formFile" class="form-label">Title</label>
	         	 	<input  class="form-control" type="text" v-model="title">
	         	 </div>            
	       		<label for="formFile" class="form-label">FUll description</label>
	    	      <input class="form-control" type="text" v-model="info">			  
				  <div class="mb-3" >
					  <label   class="form-label d-flex">Range</label>
					  <span>{{rate}}</span>
					  <input type="range" min="0,5" max="5" class="form-range" id="customRange1" v-model="rate">                      
				 </div>  
	        </form>
	         	 <button class="btn btn-warning mt-2 w-50" @click="edit_store">Submit</button>
	    </div>
	    </div>  	
	`,
    data(){
        return{
        	title:'',
        	info:'',
        	rate:0,	
        	users:[],
			index:"",
        }
    },
mounted(){
	fetch(this.$parent.domain_url + 'recomend/' + this.$route.params.id)
        .then((res)=>res.json())
        .then(resp=>{
        	console.log(resp)
			this.title = resp.recomend[0] .title;
			this.info = resp.recomend[0].info;
			this.rate = resp.recomend[0].rate;


        })       

},
    methods:{
        edit_store(){
            let formdata = new FormData();
				formdata.append("_token",this.$parent.token);
	            formdata.append("title",this.title)
	            formdata.append("info",this.info)
				formdata.append("rate",this.rate)
	            formdata.append("id",this.$route.params.id)

            fetch(this.$parent.domain_url + `update-recomendation`,{
                method:"post",
                body:formdata
            })
            .then(res=>res.json())
            .then(resp=>{
                if (resp.status=="ok!") {
                    this.$router.push("/recomend")
                } 
                console.log(resp)
            })
        },


    }
}
var brand = {
	template:`
    <div class='product_main'>
		     	<div id="main">
				<div  style="background-color:whitesmoke;height:100%;padding:20px 35px 20px"> 
				  <div class="product_div_4">
				    <div><b><h3>Mahsulotlar</h3></b></div>
				    <div class="product_div_5">
				      <button class="btn button_products1" style="background-color:white"><span><i class='bx bxs-cloud-upload' style="margin-left:-5px"></i><b style="margin-top:-5px">Export</b></span></button>
				      <button class="btn btn-primary button_products1" style="" @click="click_store"><b>+ Create new</b></button>
				    </div>
				  </div>
				        <div class="" style="background-color:white;border-radius:5px;padding: 11px 0px 40px;">
				            <div style="display:flex;justify-content:space-between;" class="product_div_7">
				              <div style="display:flex;padding: 0px 10px 0px;">
				                  <input type="" class="form-control input_pro" id="exampleInputEmail1" placeholder="Search">
				              </div>
				              <div class="d-flex justify-content-around" style="width:340px;padding-right:50px">
				                <select class="form-select form_product">
				                  <option selected>Category</option>
				                  <option value="1">One</option>
				                  <option value="2">Two</option>
				                  <option value="3">Three</option>
				                </select> 
				                <button class="btn" style="border:1px solid grey;background-color:white;width:140px">
				                  <span style="color:grey;">Last added<i class='bx bxs-hand-up' style="padding-left:5px"></i></span>
				                </button>           
				              </div>                
				            </div>
				            <hr width="100%" height="2px">
				          <div  style="height:100%;padding:20px;gap:20px"> 
								<table class="table table ">
								  <thead>
								    <tr>
								      <th scope="col">#</th>
								      <th scope="col">Images</th>
								      <th scope="col">Handle</th>
								    </tr>
								  </thead>
								  <tbody>
								    <tr v-for="(user,index) of users" :key="index">
								      <th scope="row">{{user.id}}</th>
								      <td><img style="height: 50px;width: 60px;" :src="parseJson(user.image)"></td>
								      <td class="d-flex align-items-center" height="67px">
										<a :href="'/edit_brand/'+user.id" data-bs-toggle="dropdown" class="text-decoration "  style="border: 1px solid transparent;border-color: rgba(108, 117, 125, 0.25);background-color: #fff;padding: 0.25rem 0.5rem;font-size: 0.875rem;color:grey;margin:2px;width: 64px;height: 30px;"> 
											<i class='bx bxs-pencil' style=""></i>  Edit  
										 </a>
										<a @click="deletePro(user.id,index)" data-bs-toggle="dropdown" class="btn btn-sm btn-outline-danger" style="width: 60px;height: 35px;font-size:10px;align-items: center;display: flex;"> 
											<i class='bx bxs-trash' ></i>  Delete  
										</a>
									 </td>
								    </tr>
								  </tbody>
								</table>				           
				          </div>
				        </div>
				     </div>  
			</div>
	   </div> 
   </div>
	`,
    data(){
        return{
			users:[],
			slider:{},
        }
    },
      mounted(){
        fetch(this.$parent.domain_url + 'api/brand')
          .then(rep=> rep.json())
           .then (res => {
            console.log(res)

           	this.users=res.brand
    })
      },
methods:{
        parseJson(jsonArray) {
            if ( this.isJsonString(jsonArray)) {
               if( this.isJsonString(jsonArray).length > 0) {
                return this.$parent.domain_url+'storage/' +  this.isJsonString(jsonArray)[0];
               }
            } else {
                return "";
            }
        },
		deletePro(id,index){
		            let tek = confirm("Are you sure deleting?")
		            if(tek){
		                let formdata = new FormData()
		                formdata.append("id",id)
		                formdata.append("_token",this.$parent.token)

		                fetch(this.$parent.domain_url + 'delete-brand', {
		                    method:"POST",
		                    body:formdata
		                })
		                .then(res=>res.json())
		                .then(resp=>{
		                    console.log(resp);
		                    if(resp.status==="deleted!"){
		                        this.users.splice(index,1);
		                    }
		                })
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
    click_store(){
    	this.$router.push("/add_brand")
    }
  }
}
var add_brand = {
	template:`
		     <div id="main" >
		      	<div  class="add_st"> 
		          <h3 style="height:60px">Create Product</h3>
		       	  <div class="" style="background-color:white;border-radius:5px;padding: 9px 14px 0px;">
		          	<div class="d-flex " id="" >
		               <div  style="width:100%">
		               	   <form class="w-100 form_store" style="margin-left:-10px;">
		                  	  <div class="mb-3" >
			                        <label for="upload-photo" class="labe" style="display:flex;gap:10px;overflow: auto;flex-wrap: wrap;">
			                          <div style="height:60px;width:60px;background-color:whitesmoke;border-radius:5px;display:flex;cursor:pointer" class="align-items-center justify-content-center flex-column">
			                            	<img src='data:image/png;base64,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' alt="" style="color:grey;width:20px;height:20px">
			                           		 <div style="font-size:10px;color:grey">Upload</div>
			                          </div>			                        
			                          <div v-for="(img,index) in images" :key="index" style="height:60px;width:60px;background-color:whitesmoke;border-radius:5px;display:flex;cursor:pointer" class="align-items-center justify-content-center flex-column">
			                           	 <img :src="$parent.domain_url+'storage/'+img"  alt="" style="color:grey;width:90%;height:90%">
			                          </div>
			                       </label>
			                        <input type="file" name="photo" id="upload-photo"  @change = "selectFile($event)"/>                      
		                   	   </div>
		                  		  <hr>
		                </form>
		            </div>
		          </div>
		          <div class="d-flex  justify-content-end">
		         	 <button class="btn  btn-outline-dark" >Save draft</button>
		         	 <button class="btn btn-primary" @click="adduser">Save product</button>
		          </div>
		      </div>  
		  </div>
		</div>		   
	   </div> 
   </div>
		`,
   data(){
        return{
		 category:'',
	      info:'',
	      images:[],      
	      title:'',
	      info:'',
        }
    },
	methods: {
        selectFile(event) {
	      	let formData = new FormData();
	      	formData.append("photo",event.target.files[0]);
			formData.append("_token",this.$parent.token);

	        fetch(this.$parent.domain_url + 'upload-img', {
	          method:"POST",
	          body:formData,
	        })
	        .then(rep=> rep.json())
	        .then(res=>{
	          this.images.push(res.data);
	        });
    	},
	    adduser(){
	        
			let formData = new FormData();
			formData.append("images",JSON.stringify(this.images)); 
			formData.append("_token",this.$parent.token);


			fetch(this.$parent.domain_url + 'create-brand', {
			  method:"POST",
			  body:formData,
			})
			.then(rep=> rep.json())
			.then(res=>{
			  if (res.status == "ok") {
			  this.$router.push("/brand") 
			  }
			  console.log(res)
			});
		},
		changeRadio($event) {
	  		console.log($event.target.value);
	  		this.category = $event.target.value;
		},
	}
}
var edit_brand = {
	template:`

	    <div class="vh-100 d-flex justify-content-center align-items-center" style="flex-direction:column">
	        <form class="w-50">
			<div class="mb-3 d-flex" >
			<label for="upload-photo" class="labe" style="display:flex;gap:10px;overflow: auto;flex-wrap: wrap;">
			  <div style="height:60px;width:60px;background-color:whitesmoke;border-radius:5px;display:flex;cursor:pointer" class="align-items-center justify-content-center flex-column">
					<img src='data:image/png;base64,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' alt="" style="color:grey;width:20px;height:20px">
						<div style="font-size:10px;color:grey">Upload</div>
			  </div>
			</label>
			  <div v-for="(img,index) in images"  :key="index"  style="height:60px;position:relative;width:60px;background-color:whitesmoke;border-radius:5px;display:flex;cursor:pointer" class="align-items-center justify-content-center flex-column">
					<img :src="$parent.domain_url+'storage/'+img"  alt="" style="color:grey;width:90%;height:90%" >
					<i class='bx bx-x' @click="ImgDelete(index)" style="font-size:30px;position:absolute;top: -5px;left: 35px;"></i>

			  </div>
			  
			<input type="file" name="photo" id="upload-photo" @change = "selectFile($event)"/>

		  </div>   

	        </form>
	         	 <button class="btn btn-warning mt-2 w-50" @click="edit_store">Submit</button>
	    </div>
	    </div>  	
	`,
    data(){
        return{
			images:[],
        	users:[],
			index:"",
        }
    },
	mounted(){
		fetch(this.$parent.domain_url + 'api/brand/' + this.$route.params.id)
			.then((res)=>res.json())
			.then(resp=>{
				console.log(resp)
				this.images = JSON.parse(resp.brand[0].image);
	
	
			})       
	
	},
    methods:{
        selectFile(event) {

          	let formData = new FormData();
          	formData.append("photo",event.target.files[0]);
			formData.append("_token",this.$parent.token);

            fetch(this.$parent.domain_url + 'upload-img', {
              method:"POST",
              body:formData,
            })
            .then(rep=> rep.json())
            .then(res=>{
              this.images.unshift(res.data);            
            });
        },
        edit_store(){
            let formdata = new FormData();
				formdata.append("images",JSON.stringify(this.images))
                formdata.append("_token", this.$parent.token);
	            formdata.append("id",this.$route.params.id)

            fetch(this.$parent.domain_url + `update-brand`,{
                method:"post",
                body:formdata
            })
            .then(res=>res.json())
            .then(resp=>{
                if (resp.status=="ok!") {
                    this.$router.push("/brand")
                }
                console.log(resp)
            })
        },
		ImgDelete(index) {
            let tek = confirm("Are you sure deleting?");
            if (tek) {

                let formdata = new FormData();
                formdata.append("id", this.$route.params.id);
                formdata.append("index", index);
                formdata.append("_token", this.$parent.token);

                fetch(this.$parent.domain_url + 'deleteimg_brand', {
                    method: "post",
                    body: formdata
                })
                    .then(res => res.json())
                    .then(res => {
                        if (res.status === "Deleted") {
                            this.images.splice(index, 1);
                        }
                    });
            }
        },

    }
}


