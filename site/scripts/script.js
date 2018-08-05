var $grid = $('.grid').isotope({
  // options
  itemSelector: '.grid-item',
  layoutMode: 'fitRows'
});
 $('.filter-button-group').on('click', 'button', function(){
	$('.is-checked')[0].classList.remove('is-checked');
	$(this)[0].classList.add('is-checked');
	var filterValue = $(this).attr('data-filter');
	$grid.isotope({filter: filterValue});
}) 

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	items: 1,
  	nav: true,
  	loop: true,
  	dots: true
  });
});

function initMap() {
  // The location of Uluru
  var uluru = {lat: -25.344, lng: 131.036};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}