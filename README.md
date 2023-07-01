# Steps to setup before running hte code in repo


This is a client website demo app that is supposed to mimic the acutal client website.

To initialize the repo:
`npm init`

To run the app on server:
`npm run start`

# Auth0 Actions code

```
/**
* Handler that will be called during the execution of a PostLogin flow.
*
* @param {Event} event - Details about the user and the context in which they are logging in.
* @param {PostLoginAPI} api - Interface whose methods can be used to change the behavior of the login.
*/
exports.onExecutePostLogin = async (event, api) => {
    const axios = require('axios');
    //console.log(typeof(event.user.email));
    /*
    const res = await axios.get("https://userd6fdb4112540b5f7.app.vtxhub.com/register");
    console.log(res);
    */
   var username = event.user.email
   var password = "doesntmatter";
   var auth0_domain = "dev-mewa47vclg4f0vlr";
   var main_data = {
       "username" : username,
       "password" : password
   }
   var vortex_url = "https://auth0.silencelaboratories.com/"; //"http://userd6fdb4112540b5f7.app.vtxhub.com/"; 
   var join_url = vortex_url + "api/join/"

   await axios.post(join_url, main_data)
   .then(response => {
       console.log(response.data)
       if(response.data.status === 'success'){
             api.redirect.sendUserTo(vortex_url + "qrscan/"+ username + "/" + auth0_domain + "/");
    }
 
    })
    .catch(error => {
       let error_message = error.response.data.message;
       console.log(error_message);
       if(error_message === "User already registered"){
          api.redirect.sendUserTo(vortex_url + "gesture/" + username + "/" + auth0_domain + "/");
       }
   });
 
 };
 
 
 /**
 * Handler that will be invoked when this action is resuming after an external redirect. If your
 * onExecutePostLogin function does not perform a redirect, this function can be safely ignored.
 *
 * @param {Event} event - Details about the user and the context in which they are logging in.
 * @param {PostLoginAPI} api - Interface whose methods can be used to change the behavior of the login.
 */
 exports.onContinuePostLogin = async (event, api) => {
    //  api.redirect.sendUserTo("https://userd6fdb4112540b5f7.app.vtxhub.com/profile/")
         api.redirect.sendUserTo("https://www.youtube.com/");

 };
 ```