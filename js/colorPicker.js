var img = document.getElementById('image');
// 或者
// var img = 'http://example.com/path-to-image.jpg';

$('#btn').on('click', function() {
	RGBaster.colors(img, {
		paletteSize: 5000, // 调色板大小
		exclude: [ 'rgb(255,255,255)', 'rgb(0,0,0)' ],  // 不包括白色黑色
		success: function(payload) {
		    // payload.dominant是主色，RGB形式表示
		    // payload.secondary是次色，RGB形式表示
		    // payload.palette是调色板，含多个主要颜色，数组
		   	console.log(payload.dominant);
		    console.log(payload.secondary);
		    console.log(payload.palette);
		    $('#colorPickerFst').css('background-color', payload.dominant);
		    $('#colorPickerScd').css('background-color', 'rgb(87,31,0)');
		}
	});
});