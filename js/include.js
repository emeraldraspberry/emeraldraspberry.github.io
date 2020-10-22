$(function() {
  // $('header').load('./html/header.html');
  // $('nav').load('./html/nav.html');
  // $('footer').load('./html/footer.html');
  $('head').append().load('./include/head.html');
  
  $('#page-sidebar').load('./include/sidebar.html');
});

$(window).on('hashchange', function() {
  let hash = window.location.hash;
  loadPageContent(delimitHash(hash));
});

$(window).on('load', function() {
  let pathname = window.location.pathname;
  let hash = window.location.hash;
  if (hash === "") {
    $('#page-content').load('./include/home.html');
  }
  else if (hash !== null) {
    console.log("Loading page content from hash: " + hash);
    loadPageContent(delimitHash(hash));
  }
});

function loadPageContent(hash) {
  console.log("Delimited hash: " + hash);
  $.get('./include/'+hash+'.html', function(pageContent){
    $('#page-content').html(pageContent);
  });
}

function delimitHash(hash) {
  hash = hash.slice(1, hash.length);
  return hash;
}