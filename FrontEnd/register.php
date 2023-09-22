<?php include "header.php"; ?>


<div class="titleBar mx-auto text-center">
    <h1>SIGN UP</h1>
</div>

<div class="loginform p-5 mx-auto">
    <div class="form-group">
        <label for="exampleInputEmail1">Name</label>
        <input type="email" class="form-control formName" aria-describedby="emailHelp" placeholder="Enter email" />
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control formEmail" aria-describedby="emailHelp" placeholder="Enter email" />
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control formPassword" placeholder="Password" />
    </div>
    <div class="form-group">
        <label for="exampleInputPassword1">Repeat Password</label>
        <input type="password" class="form-control formRepeatPassword" placeholder="Password" />
    </div>
    <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="submitbtn btn btn-primary">Submit</button>
</div>


<?php include "footer.php"; ?>