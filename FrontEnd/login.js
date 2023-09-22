const login = {
  user: "test",

  printUser: function () {
    console.log(this.user);
  },

  registerUser: function () {
    const name = $(".formName").val();
    const email = $(".formEmail").val();
    const password = $(".formPassword").val();
    const repeatPassword = $(".formRepeatPassword").val();
    const url = "http://127.0.0.1:8000/register";
    const csrf = "http://127.0.0.1:8000/get-csrf-token";
    console.log("This is working");

    $.ajax({
      url: csrf,
      method: "GET",
      dataType: "json",
      success: function (data) {
        const csrf = data.csrf_token;
        console.log(data);
        // This function will be called if the request is successful
        console.log("Data received:", data);
        console.log(csrf);
        $.ajax({
          url: url,
          method: "POST",
          dataType: "json",
          headers: {
            "X-CSRF-Token": csrf, // Set the X-CSRF-TOKEN header
          },
          data: {
            _token: csrf,
            id: "test",
          },
          processData: false,
          contentType: false,
          success: function (data) {
            console.log("Data received:", data);
            window.location.href = "login.php";
          },
          error: function (xhr, status, error) {
            console.error("Error:", status, error);
          },
        });
      },
      error: function (xhr, status, error) {
        console.error("Error:", status, error);
      },
    });
  },

  loginUser: function () {
    $.ajax({
      url: "google.com",
      method: "POST",
      dataType: "json",
      data: {
        name: name,
        email: email,
        password: password,
        repeatPassword: repeatPassword,
      },
      success: function (data) {
        console.log("Data received:", data);

        window.location.href = "login.html";
      },
      error: function (xhr, status, error) {
        // This function will be called if there's an error
        console.error("Error:", status, error);
      },
    });
  },
};
