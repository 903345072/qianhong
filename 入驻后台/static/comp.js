export function translate(imgSrc,callback) {
	uni.showLoading({
		title:'压缩中'
	})
	var img = new Image();	
	img.src = imgSrc;	
	img.onload = function() {		
		var that = this;		
		var h = that.height;		
		// 默认按比例压缩		
		var w = that.width;		
		var canvas = document.createElement('canvas');		
		var ctx = canvas.getContext('2d');		
		var anw = document.createAttribute("width");		
		anw.nodeValue = w;		
		var anh = document.createAttribute("height");		
		anh.nodeValue = h;		
		canvas.setAttributeNode(anw);		
		canvas.setAttributeNode(anh);		
		ctx.drawImage(that, 0, 0, w, h);		
		//压缩比例		
		var quality = 0.1;		
		var base64 = canvas.toDataURL('image/jpeg', quality);		
		canvas = null;		
		var blob=base64ToBlob(base64);		
		// console.log(blob)		
		//Blob对象转blob地址		
		var blobUrl=window.URL.createObjectURL(blob);		
		callback(blobUrl);	
		uni.hideLoading()
		}}
		
		export function base64ToBlob(base64) {	
			var arr = base64.split(','),		
			mime = arr[0].match(/:(.*?);/)[1],		
			bstr = atob(arr[1]),		
			n = bstr.length,		
			u8arr = new Uint8Array(n);	
			while (n--) {
				u8arr[n] = bstr.charCodeAt(n);	
				}	
			return new Blob([u8arr], {		type: mime	});
			
			}
		
