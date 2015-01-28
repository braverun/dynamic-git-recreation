(function(){

  var baseUrl = "https://api.github.com/users/jacobthemyth";


//Token and URL Setup

  $(document).ready(function(){
    if(typeof githubToken !== 'undefined'){
      $.ajaxSetup({
        headers: { 'Authorization': 'token ' + githubToken }
      });
    }



//Repository Template
    var repoTemplate = _.template($('[data-template-name=repo]').text());
    var $repositoriesUl = $('.repositories');

    $.ajax(baseUrl + "/repos").done(function(repos){
      _.each(repos, function(repo) {
        $repositoriesUl.append(repoTemplate(repo));
          moment(repo.pushed_at).fromNow();


      });
    });
  });


//Profile Template

var profileTemplate = _.template($('[data-template-name=profile]').text());
var $profileSideBar = $('.profile-side-bar');

$.ajax(baseUrl).done(function(profileElement){
  $profileSideBar.append(profileTemplate(profileElement));

});




})();




















  //FIN
