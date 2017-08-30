
add_text(1);

function set_item_width(val){
	$('.flex-item').width(val);
	$('#item-width-input').val(val);
	$('#item-width-slider').val(val);
}

function remove_width(){
	$('.flex-item').css("width", "auto");
	$('#item-width-input').val("");
}

function set_item_height(val){
	$('.flex-item').height(val);
	$('#item-height-input').val(val);
	$('#item-height-slider').val(val);
}

function remove_height(){
	$('.flex-item').css("height", "auto");
	$('#item-height-input').val("");
}

function add_text(num){
	if (num == 1){
		$('#item1').text("Item 1");
		$('#item2').text("Item 2");
		$('#item3').text("Item 3");
		$('#item4').text("Item 4");
	}
	else if (num == 2){
		$('#item1').html("Item 1:<br>Pallas's leaf warbler (Phylloscopus proregulus) is a migratory bird that breeds in mountain forests from southern Siberia east to northern Mongolia and northeastern China. It is named for German zoologist Peter Simon Pallas, who first described it.");
		$('#item2').html("Item 2: yup");
		$('#item3').html("Item 3:<br>It winters mainly in and near southern China, although in recent decades increasing numbers have been found in Europe in autumn.");
		$('#item4').html("Item 4: hello");
	}
}

$('#justify-content-select').on('change', function() {
  $('.flex-container').css("justify-content",this.value);
})

$('#flex-direction-select').on('change', function() {
  $('.flex-container').css("flex-direction",this.value);
})

$('#flex-wrap-select').on('change', function() {
  $('.flex-container').css("flex-wrap",this.value);
})

$('#align-items-select').on('change', function() {
  $('.flex-container').css("align-items",this.value);
})

$('#align-content-select').on('change', function() {
  $('.flex-container').css("align-content",this.value);
})