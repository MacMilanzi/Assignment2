$(document).ready(function(){
	$('#addRec').click(function(){
		var fullName;
		var major;
		var startYear;
		var myDate = new Date();
		fullName = $("#fullName").val();
		major = $("#major").val();
		startYear = $("#startYear").val();
		var startYearInt = parseInt(startYear);

		if(startYearInt >= 2000){
			$("#records").append("<p>"+myDate.getHours() +":"+ myDate.getMinutes() +" - "+ fullName+", "+ major+ ", "+startYear+"</p>");
		}else{
			alert("Incorrect Year: "+ startYearInt);
			$("#startYear").val("");
		return;
		}
		$("#fullName").val("");
		$("#major").val("");
		$("#startYear").val("");
		
	return;
	});
});