const app_id = '1010943272709060';
const api_version = 'v7.0';
const app_secret = '7b35ac8a5d7fc03ac23442c8f3c286d2';

function select(tag){
  return document.querySelector(tag);
}

const facebook = select("#fb_button");
// const fb_login = select('#fb_login');
// const fb_logout = select('#fb_logout');
const _text = select('#text');

window.fbAsyncInit = function() {
  FB.init({
    appId      : `${app_id}`,
    cookie     : true,                     // Enable cookies to allow the server to access the session.
    xfbml      : true,                     // Parse social plugins on this webpage.
    version    : `${api_version}`           // Use this Graph API version for this call.
  });
  checkLoginState()
}
function statusChangeCallback(response) {  // Called with the results from FB.getLoginStatus().
  console.log('statusChangeCallback');
  console.log(response);                  // The current login status of the person.
  if (response.status === 'connected') {   // Logged into your webpage and Facebook.
    console.log("is Logined")
    fb_button.value = 'is Logined'
    fb_button.innerHTML = "LogOut";

    testAPI();
  } else {                                 // Not logged into your webpage or we are unable to tell.
    console.log("Not Logined")
    fb_button.value = 'Not Logined'
    fb_button.innerHTML = "LogIn";

    _text.innerHTML = 'Please log into this webpage.';
  }
}

function checkLoginState() {               // Called when a person is finished with the Login Button.
  FB.getLoginStatus(function(response) {   // See the onlogin handler
    statusChangeCallback(response);
  });
}

function testAPI() {                      // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
  console.log('Welcome!  Fetching your information.... ');
  FB.api('/me', function(response) {
    console.log(`Successful login for: ${response.name}`);
    console.log('-----------------------');

    _text.innerHTML =
      `Thanks for logging in ${response.name} !`;
  });
}


function init(){
  fb_button.addEventListener('click',function(){
    if (fb_button.value == 'is Logined'){
      FB.logout(function(res){
        console.log("logout");
        statusChangeCallback(res);
      })
    }
    else{
      FB.login(function(res){
        console.log("login");
        statusChangeCallback(res);
      })
    }
  })
}
init()
