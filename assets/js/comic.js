$(document).ready(function(){

  (function(){
    var comicVineAPI="https://comicvine.gamespot.com/api/search/?json_callback=?";
    $.getJSON( comicVineAPI,  {
      api_key: "05b4f8f5fda83cc6c9ff081e00bd78f0143e16ba",
      query: "iron man",
      resources: "issue",
      limit: "5",
      field_list: "id,image,description,issue_number,name",
      format: "jsonp"
    })
      .done(function( data){
        pushData(data);
      });
  })();

  function pushData(resultData){
    $('#table').bootstrapTable({
      columns: [{
        field: 'issue_number',
        title: 'Issue'
      },{
        field: 'name',
        title: 'Title'
      },{
        field: 'description',
        title: 'Detail Page',
        formatter: urlFormatter,
      },{
        field: 'image.thumb_url',
        title: 'Cover',
        formatter: imageFormatter,
      },],
      data: resultData.results
    });
  }

  function imageFormatter(value, row, index){
    return `<img src="${value}">`;
  }
  function urlFormatter(value, row, index){
    return `<a href="${value}">${value}</a>`;
  }
});

$('#goButton').click(function( event ) {
      var searchTerm = $('#inputSearch').val();
      event.preventDefault();
      // console.log("My searchTerm is: " + searchTerm);
    });
