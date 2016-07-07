/**
 * 
 */

function singleVibration() {
	navigator.vibrate(2000);
}

function multiVibration() {
	navigator.vibrate([ 1000, 1000, 2000, 2000 ]);
}

function stopVibration() {
	navigator.vibrate(0);
}

var adapter = null;
var CHECK_INTERVAL = 200;

(function checkBT() {
	try {
		if (tizen.bluetooth == undefined) {
			alert("not found");
		} else {
			adapter = tizen.bluetooth.getDefaultAdapter();
			window.setInterval(sliderBT, CHECK_INTERVAL)
		}
	} catch (e) {
		alert("Error:___" + e);
	}
}());

function sliderBT() {
	if (adapter.powered) {
		//alert("sliderBT() if adapter.powered no problemes")
		$("#bluetoothSlider").val("on").slider('refresh');
	} else {
		//alert("sliderBT() if !adapter.powered no problemes")
		$("#bluetoothSlider").val("off").slider('refresh');
	}
}

function OnOffBT() {
	if ($("#bluetoothSlider").val() == "on")
		BTpowerOn();
	else
		BTpowerOff();
}

function BTpowerOff() {
	if (adapter.powered){
		adapter.setPowered(false, null, null);}
	else
		alert('BTpowerOFF - adapter is on')
}

function BTpowerOn() {
	if (!adapter.powered){
		adapter.setPowered(true, null, null);
	} else {
		alert('BTpowerOn - adapter is off')
	}
}