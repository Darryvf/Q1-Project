$(document).ready(function(){
    var name1 = localStorage.getItem('usernamekey');
    if (name1 != undefined){
      $('#searchName').text(`${name1}, try this... `);
    }
});
