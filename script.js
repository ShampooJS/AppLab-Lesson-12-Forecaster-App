// Build the Random Forecaster app
//Make sure you have the Daily Weather dataset imported...
var cityList = getColumn("Daily Weather", "City");
var forecastNumberList = getColumn("Daily Weather", "Forecast Number");
var conditionList = getColumn("Daily Weather", "Condition Description");
var highTempList = getColumn("Daily Weather", "High Temperature");
var lowTempList = getColumn("Daily Weather", "Low Temperature");
var iconList = getColumn("Daily Weather", "Icon");

var filteredCityList = [];
var filteredconditionList = [];
var filteredhighTempList = [];
var filteredlowTempList = [];
var filterediconList = [];

filter();

var num;
onEvent("forecastButton", "click", function( ) {
  num = randomNumber(0, filteredCityList.length - 1);
  setProperty("cityOutput", "text", filteredCityList[num]);
  setProperty("highTempOutput", "text", filteredhighTempList[num]);
  setProperty("lowTempOutput", "text", filteredlowTempList[num]);
  setProperty("conditionOutput", "text", filteredconditionList[num]);
  setProperty("iconOutput", "image", filterediconList[num]);
});



function filter() {

  for (var i = 0; i < forecastNumberList.length; i++) {
    if(forecastNumberList[i] == 1){
      appendItem(filteredCityList, cityList[i]);
      appendItem(filteredconditionList, conditionList[i]);
      appendItem(filteredhighTempList, highTempList[i]);
      appendItem(filteredlowTempList, lowTempList[i]);
      appendItem(filterediconList, iconList[i]);
      
    }
  }
  
}
