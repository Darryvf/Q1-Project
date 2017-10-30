$(document).ready(function(){

  (function(){
    var comicVineAPI="https://comicvine.gamespot.com/api/search/?json_callback=?";
    $.getJSON( comicVineAPI,  {
      api_key: "05b4f8f5fda83cc6c9ff081e00bd78f0143e16ba",
      query: "batman",
      resources: "episode",
      limit: "5",
      field_list: "id,name,image,api_detail_url,episode_number",
      format: "jsonp"
    })
      .done(function( data){
        pushData(data);
      });
  })();

  function pushData(resultData){
    $('#table').bootstrapTable({
      columns: [{
        field: 'episode_number',
        title: 'Episode'
      },{
        field: 'name',
        title: 'Title'
      },{
        field: 'api_detail_url',
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
