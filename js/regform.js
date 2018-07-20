$(function () {
	if (localStorage.getItem("students") == null) {
		localStorage.setItem("students", JSON.stringify([]));
	}
	showRegistredStudents();
	dialog=$("#dialog").dialog({
		autoOpen:false,
		width:500,
		height:500,
		modal:true
	});
	$(".regstu").click(function(){
		dialog.dialog("open");
	});
	$("#dob").datepicker({
		changeYear: true,
		changeMonth: true,
		maxDate: "0d"
	});
	$(".submit").click(function () {
		var isValid = $("#regform").validate({

			rules: {
				usn: {
					required: true,
					minlength: 10,
					minlength: 10


				},
				name: {
					required: true

				},
				email: {
					required: true,
				},
				email: {
					required: true,
					email: true
				},
				mobile: {
					required: true,
					minlength: 10,
					minlength: 10

				},
				course: {
					required: true,

				},
				dob: {
					required: true,
				},
				percentage: {
					required: true,

				}


			},
			messages: {
				usn: {
					required: "USN cannot be empty",
					maxlength: "max length do not exceed 10",
					minlength: "max length do not exceed 10"
				},
				name: {
					required: "Name cannot be empty"
				},
				email: {
					required: "E-mail cannot be empty",
					email: "please enter valid input ex:xyz@gmail.com"
				},
				mobile: {
					required: "mobile cannot be empty",
					maxlength: "max length do not exceed 10",
					minlength: "max length do not exceed 10"
				},
				course: {
					required: "course cannot be empty"
				},
				dob: {
					required: "dob can't be empty"
				},
				percentage: {
					required: "percentage cannot be empty"

				}


			}

		}).form();
		if (isValid) {
			var usn = $("#usn").val();
			var name = $("#name").val();
			var email = $("#email").val();
			var mobile = $("#mobile").val();
			var course = $("#course").val();
			var percentage = $("#percentage").val();
			var dob = $("#dob").val();
			$(".reset").click();
			student = {
				"usn": usn,
				"name": name,
				"email": email,
				"mobile": mobile,
				"course": course,
				"percentage": percentage,
				"dob": dob
			};
			var students = getDataFromLocalStorage();
			students.push(student);
			updateLocalStorageData(students);
			showRegistredStudents();
			dialog.dialog("close");
			return false;
		}
	});

	function showRegistredStudents() {
		var students =
			getDataFromLocalStorage();
		var data = "";
		if (students.length == 0) {
			data = "<h3>No students registered yet....."
		} else {
			data += "<table id='regstudents'><thead><tr>"
			data += "<th>#</th>";
			data += "<th>USN</th>";
			data += "<th>Name</th>";
			data += "<th>Email</th>";
			data += "<th>Mobile</th>";
			data += "<th>Dob</th>";
			data += "<th>Branch</th>";
			data += "<th>Percentage</th>";
			data += "</tr></thead>";
			for (var i = 0; i < students.length; i++) {
				var j = i + 1;
				data += "<tr>";
				data += "<td>" + j + "</td>";
				data += "<td>" + students[i].usn + "</td>";
				data += "<td>" + students[i].name + "</td>";
				data += "<td>" + students[i].email + "</td>";
				data += "<td>" + students[i].mobile + "</td>";
				data += "<td>" + students[i].dob + "</td>";
				data += "<td>" + students[i].course + "</td>";
				data += "<td>" + students[i].percentage + "</td>";
				data += "</tr>";
			}
			data += "</table>";
		}
		$("#content").html(data);
		$("#regstudents").dataTable({
			"pageLength": 2
		});



	}

	function getDataFromLocalStorage() {
		var students =
			JSON.parse(localStorage.getItem("students"));
		return students;
	}

	function
	updateLocalStorageData(updatedStudentsArr) {
		localStorage.setItem("students", JSON.stringify(updatedStudentsArr));
	}



});
