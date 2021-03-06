

function createTable(){
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
    data:[{
        'issue_number': '',
        'name': '',
        'description': '',
        'image.thumb_url': ''
    }]
  });
  $('#resultTable').hide();
  $('#resultsTotal').show();
  $('#searchInstruct').show();
}
function imageFormatter(value, row, index){
  if (value === undefined){
    return "";
  } else {
    return `<img src="${value}">`;
  }
}
function urlFormatter(value, row, index){
  if (value === undefined){
    return "";
  } else {
    return `<a href="${value}">${value}</a>`;
  }
}
$(document).ready(function(createTable){
  $(function (){
    createTable();
  });
// console.log('hello world');
  function search(searchTerm){
    // console.log(searchTerm);
    var comicVineAPI="https://comicvine.gamespot.com/api/search/?json_callback=?";
    $.getJSON( comicVineAPI,  {
      api_key: "05b4f8f5fda83cc6c9ff081e00bd78f0143e16ba",
      query: searchTerm,
      resources: "issue",
      limit: "10",
      field_list: "id,image,description,site_detail_url,issue_number,name",
      format: "jsonp"
    })
      .done(function( data){
        pushData(data);
        // console.log(data);
      })
  }
  function pushData(resultData){
    if (resultData.number_of_total_results === 0){
        $('#resultTable').hide();
      } else {
        $('#table').bootstrapTable('load', resultData.results);
        $('#resultsTotal p:first').text(`${resultData.number_of_page_results} results found`);
        $('#resultTable').show();
      }
    }

    function createTable(){
      $('#table').bootstrapTable({
        columns: [{
          field: 'issue_number',
          title: 'Issue'
        },{
          field: 'name',
          title: 'Title'
        },{
          field: 'site_detail_url',
          title: 'Detail Page',
          formatter: urlFormatter,
        },{
          field: 'image.thumb_url',
          title: 'Cover',
          formatter: imageFormatter,
        },],
        data:[{
            'issue_number': '',
            'name': '',
            'description': '',
            'image.thumb_url': ''
        }]
      });
      $('#resultTable').hide();
      $('#resultsTotal').show();
      $('#searchInstruct').show();
  }
  function imageFormatter(value, row, index){
    if (value === undefined){
      return "";
    } else {
      return `<img src="${value}">`;
    }
  }
  function urlFormatter(value, row, index){
    if (value === undefined){
      return "";
    } else {
      return `<a href="${value}">${value}</a>`;
  }
}
  $('#goButton').click(function(event) {
    var searchTerm = $('#inputSearch').val();
    // console.log(searchTerm);
    search(searchTerm);
    event.preventDefault();
    // console.log("My searchTerm is: " + searchTerm);
  });
  $(document).keypress(function(event){
    var keycode = (event.keyCode? event.keyCode : event.which);
    if (keycode == '13'){
      $('#goButton').click();
      event.preventDefault();
    }
  });
  $('#friendForm').submit(function(event){
    var username1=$('#userinput').val();
    console.log(username1);
    storeName(username1);
    event.preventDefault();
  })
  function storeName(name){

      localStorage.setItem('usernamekey', name);
      var tempName = localStorage.getItem('usernamekey');
      updateName(tempName);
      console.log('storage: ' + localStorage.getItem('usernamekey'));
  }
  function updateName(name){
    $('#welcomeName').text(name);
      $('#formDiv').hide();
      $('welcomeDiv').show();
  }
});
