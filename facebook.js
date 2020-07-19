1010943272709060
7b35ac8a5d7fc03ac23442c8f3c286d2

<script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1010943272709060',
      cookie     : true,
      xfbml      : true,
      version    : '{api-version}'
    });

    FB.AppEvents.logPageView();

  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script>

// 샘플호출
FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
});

// 샘플 JSON 응답
{
    status: 'connected',
    authResponse: {
        accessToken: '...',
        expiresIn:'...',
        signedRequest:'...',
        userID:'...'
    }
}

// facebook button
// body 뒤에 위치
<div id="fb-root"></div>
<script async defer crossorigin="anonymous" \
src="https://connect.facebook.net/ko_KR/sdk.js#xfbml=1&version=v7.0" \
nonce="0H0uPikF"></script>
// 페이지에서 위치시키고 싶은 곳에 위치
<div class="fb-login-button" \
data-size="small" data-button-type="login_with" \
data-layout="rounded" data-auto-logout-link="true" \
data-use-continue-as="false" data-width=""></div>



<fb:login-button
  scope="public_profile,email"
  onlogin="checkLoginState();">
</fb:login-button>

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

      //
      //
      // 예시
      //
      function statusChangeCallback(response) {  // Called with the results from FB.getLoginStatus().
          console.log('statusChangeCallback');
          console.log(response);                   // The current login status of the person.
          if (response.status === 'connected') {   // Logged into your webpage and Facebook.
            testAPI();
          } else {                                 // Not logged into your webpage or we are unable to tell.
            document.getElementById('status').innerHTML = 'Please log ' +
              'into this webpage.';
          }
        }


        function checkLoginState() {               // Called when a person is finished with the Login Button.
          FB.getLoginStatus(function(response) {   // See the onlogin handler
            statusChangeCallback(response);
          });
        }


        window.fbAsyncInit = function() {
          FB.init({
            appId      : '{app-id}',
            cookie     : true,                     // Enable cookies to allow the server to access the session.
            xfbml      : true,                     // Parse social plugins on this webpage.
            version    : '{api-version}'           // Use this Graph API version for this call.
          });


          FB.getLoginStatus(function(response) {   // Called after the JS SDK has been initialized.
            statusChangeCallback(response);        // Returns the login status.
          });
        };

        function testAPI() {                      // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
          console.log('Welcome!  Fetching your information.... ');
          FB.api('/me', function(response) {
            console.log('Successful login for: ' + response.name);
            document.getElementById('status').innerHTML =
              'Thanks for logging in, ' + response.name + '!';
          });
        }
