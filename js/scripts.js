document.querySelector('#sign_up').addEventListener('click', (e)=>{
    document.querySelector('#main').innerHTML = render_signup_form()
});

document.querySelector('#sign_in').addEventListener('click', (e)=>{
    document.querySelector('#main').innerHTML = render_signin_form()
});


document.querySelector('#main').addEventListener('click', function(event) {
    if (event.target.className == 'sign_up_form') {
        document.querySelector('#main').innerHTML = render_signup_form()
    }
});


function render_signup_form() {
    return `
    <div class="col-md-2"></div>
    <div class="col-md-4">
            <form role="form">
                    <div class="form-group">
                    <label class="required" for="user_name">
                        Username
                    </label>
                    <input type="text" class="form-control" id="username" required/>
                </div>

                <div class="form-group">
					 <label class="required" for="first_name">
						First Name
					</label>
					<input type="text" class="form-control" id="first_name" required/>
                </div>
                
                <div class="form-group">
					 <label class="required" for="last_name">
						Last Name
					</label>
					<input type="text" class="form-control" id="last_name" required/>
				</div>
                
                <div class="form-group">
					 <label class="required" for="email">
						Email address
					</label>
					<input type="email" class="form-control" id="email" required/>
				</div>
                
                <div class="form-group">
					 
					<label class="required" for="password">
						Password
					</label>
					<input type="password" class="form-control" id="password" required/>
                </div>
        </div>
            <div class="col-md-4">
                
                <div class="form-group">
					 <label for="Age" class="not_required">
						Age
					</label>
					<input type="text" class="form-control" id="age"/>
                </div>
                
                <div class="form-group">
					 <label for="phone_number" class="not_required">
						Phone number
					</label>
					<input type="tel" class="form-control" id="phone_number"/>
                </div>
                
                <div class="form-group">
					 <label for="country" class="not_required">
						Country
					</label>
					<input type="text" class="form-control" id="country"/>
                </div>
                
                <div class="form-group" class="not_required">
					 <label for="City" class="not_required">
						City
					</label>
					<input type="text" class="form-control" id="city"/>
				</div>
                
                <div class="form-group">
					 <label for="InputFile" class="not_required">
						Profile photo
					</label>
					<input type="file" class="form-control-file" id="profile_photo" />
				</div>
				<button type="submit" class="btn btn-primary submit_button">
					Submit
				</button>
			</form>
        </div>
        <div class="col-md-2"></div>`;
};
function render_signin_form() {
    return `
    <div class="container">
	<div class="d-flex justify-content-center h-100">
		<div class="card">
			<div class="card-header">
				<h3>Sign In</h3>
				<div class="d-flex justify-content-end social_icon">
					<span><i class="fab fa-facebook-square"></i></span>
					<span><i class="fab fa-google-plus-square"></i></span>
					<span><i class="fab fa-twitter-square"></i></span>
				</div>
			</div>
			<div class="card-body">
				<form>
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-user"></i></span>
						</div>
						<input type="text" class="form-control" placeholder="username">
						
					</div>
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-key"></i></span>
						</div>
						<input type="password" class="form-control" placeholder="password">
					</div>
					<div class="row align-items-center remember">
						<input type="checkbox">Remember Me
					</div>
					<div class="form-group">
						<input type="submit" value="Login" class="btn float-right login_btn">
					</div>
				</form>
			</div>
			<div class="card-footer">
				<div class="d-flex justify-content-center links">
					Don't have an account?<a href="#" class="sign_up_form">Sign Up</a>
				</div>
				<div class="d-flex justify-content-center">
					<a href="#">Forgot your password?</a>
				</div>
			</div>
		</div>
	</div>
</div>
`;
}

