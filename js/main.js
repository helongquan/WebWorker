//a simple group member data example

// $(document).ready(function () {

// 	$.ajax({
//         // url: "../WebWorker/data.json",
//         url: "/api/webworker/getmember",
//         type: "get",
//         dataType:"json",
//         contentType: "application/json",
//         success: function (res) {
//             if (typeof res === 'string') {
//                 res = JSON.parse(res);
//             }
//             console.log(res);
//             // renderGroupMembers(res);
//         },
//         error: function (xhr, err, exception) {
//             console.log(err);
//             $("#msg").html(err);
//         }
//     });

// });

var groupMembers = [
{
	id: 101,
	name: 'John Li',
	skills: 'Java programming, Python language, MySQL'
},
{
	id: 102,
	name: 'Lisa Wang',
	skills: 'HTML, JavaScript, CSS, Node.js'
},
{
	id: 103,
	name: 'Tom Wang',
	skills: 'JavaScript, CSS, HTML5'
},
{
	id: 104,
	name: 'Andy Zhang',
	skills: 'PHP language, JavaScript programming, CSS'
}
	/*
		a large number of data
	*/
];

 
//loading the worker.js to instantiate a Worker object
var worker = new Worker('js/worker.js');
 
//receive message from work thread, and then render the result data
worker.onmessage = function(e) {
	renderGroupMembers(e.data.results);
};
 
function search() {
	var keywords = $('#keywords').val().trim();
	
	//post a message to work thread
	worker.postMessage({
		groupMembers: groupMembers,
		keywords: keywords
	});
}
 
function renderGroupMembers(members) {
	var html = '';
	members.forEach(function(member) {
		var resultHtml = '<div class="member">'
					   + ' <div class="thumbnail">'
			 		   + '	 <img class="icon" src="img/icon.jpg">'
			 		   + ' </div>'
			 		   + '	<div class="info">'
			 		   + '		<p class="name">' + member.name + '</p>'
			 		   + '		<p class="skill">' + member.skills + '</p>'
			 		   + '	    <a class="add">+Add</a><a href="' + member.url + '" class="add" target="_blank">More</a>'
			 		   + '	</div>'
			 		   + '</div>';
		html += resultHtml;
	});
 
	$('#members').html(html);
}

renderGroupMembers(groupMembers);