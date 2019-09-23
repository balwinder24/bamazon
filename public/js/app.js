$(document).ready(function(){
  $.get('/api/product', function(products) {
  }).then(function(results) {
    console.log(results);
    for(let i = 0; i < results.length; i++) {
      let prodCard = $('<div>').addClass('card');
      let cardBody = $('<div>').addClass('card-body');
      let cardTitle = $('<div>').addClass('card-title');
      let cardText = $('<div>').addClass('card-text');
      let buyNow = $('<button>').addClass('btn btn-primary');
      cardTitle.text(results[i].product_name);
      cardBody.append(cardTitle);
      prodCard.append(cardBody);
      $('.products').append([prodCard]);
    }
  });
});
{/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}