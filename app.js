function templateByQuery(query) {
  var templateString = $(query).html();
  return Handlebars.compile(templateString);
}

var userTemplate = templateByQuery('#user-profile');

var userHasLoaded = function(data) {
  var result = userTemplate(data);

  $('.user').html(result);
};

$.ajax({
  url: 'https://api.github.com/users/santiagomarvin',
  dataType: 'json',
  success: userHasLoaded
});

var repoTemplate = templateByQuery('#repos');

var repoHasLoaded = function(data) {
  var result = repoTemplate(data);

  $('.repo').html(result);
};

$.ajax({
  url: 'https://api.github.com/users/santiagomarvin/repos',
  dataType: 'json',
  success: repoHasLoaded
});
