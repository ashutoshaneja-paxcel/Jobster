$(document).ready(function() {

	//Post form data to corresponding controller
	$.post({
		url : '${pageContext.request.userPrincipal.name}/showVacancyData',
		data : $('form[name=searchForm]').serialize(),
		success : function(result) {
			console.log(result);

			for(var i=0;i<(result.length);i++){ 
				var table = document.getElementById("vacancyList").getElementsByTagName('tbody')[0];
				var newRow = table.insertRow(table.length);
				cell1 = newRow.insertCell(0);
				cell1.innerHTML = result[i].companyName;
				cell2 = newRow.insertCell(1);
				cell2.innerHTML = result[i].vacancyCount;
				cell3 = newRow.insertCell(2);
				cell3.innerHTML = result[i].location;
				cell4 = newRow.insertCell(3);
				cell4.innerHTML = result[i].skill;
				cell5 = newRow.insertCell(4);
				cell5.innerHTML = result[i].experience;
				hiddenCell1 = newRow.insertCell(5);
				var id = result[i].vacancyID;
				hiddenCell1.innerHTML = id;
				//hiddenCell1.innerHTML = '<input type="text" name="vacancyID" disabled class="vacancyID-input" value="' + id + '" >';
				//$('.vacancyID-input').val(result[i].vacancyID);
				hiddenCell1.style.visibility = 'hidden';
				cell6 = newRow.insertCell(6);
				cell6.innerHTML = '<a class="apply-job" href="javaScript:void(0);">Apply</a>'; 
			}
		}
	});


	$('button[type=submit]#searchButton').click(function(e) {

		//Prevent default submission of form
		e.preventDefault();

		//Post form data to corresponding controller
		$.post({
			url : '${pageContext.request.userPrincipal.name}',
			data : $('form[name=searchForm]').serialize(),
			success : function(result) {

				$("#vacancyList > tbody").html("");
				console.log(result);
				if(!$.trim(result)){
					alert("No Vacancy Found");
				}

				for(var i=0;i<(result.length);i++){ 
					var table = document.getElementById("vacancyList").getElementsByTagName('tbody')[0];
					var newRow = table.insertRow(table.length);

					cell1 = newRow.insertCell(0);
					cell1.innerHTML = result[i].companyName;
					cell2 = newRow.insertCell(1);
					cell2.innerHTML = result[i].vacancyCount;
					cell3 = newRow.insertCell(2);
					cell3.innerHTML = result[i].location;
					cell4 = newRow.insertCell(3);
					cell4.innerHTML = result[i].skill;
					cell5 = newRow.insertCell(4);
					cell5.innerHTML = result[i].experience;
					hiddenCell1 = newRow.insertCell(5);
					hiddenCell1.innerHTML = result[i].vacancyID;
					hiddenCell1.style.visibility = 'hidden';
					cell6 = newRow.insertCell(6);
					cell6.innerHTML = '<a class="apply-job">Apply</a>'; 
				}
			}
		})	
	});


	$('#vacancyList').on('click','.apply-job',function (e) {
		var selectedRow = this.parentElement.parentElement;
		var a = selectedRow.cells[0].innerHTML;
		var b = selectedRow.cells[1].innerHTML;
		var c = selectedRow.cells[2].innerHTML;
		var d = selectedRow.cells[3].innerHTML;
		var e = selectedRow.cells[4].innerHTML;
		var f = selectedRow.cells[5].innerHTML;

		console.log(a+" : "+b+" "+c+" "+d+" "+e+" "+f);

		//Post form data to corresponding controller
		$.get({
			url : '${pageContext.request.userPrincipal.name}/applyVacancy',
			data: {value: f},
			success : function(result) {
				alert(result);
				selectedRow.cells[6].innerHTML = "Applied!";
				$(".apply-job").removeAttr('href');
			}
		})	

	}); 

	$("#recordBox").change(function() {
		$("#searchButton").click()
	}); 

});