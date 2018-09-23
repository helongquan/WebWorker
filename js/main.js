//a simple group member data example
$(document).ready(function () {

    var groupMembers;
	htmlobj = $.ajax({
        // url: "../WebWorker/data.json",
        url: "http://localhost:8888/api/webworker/getmember",
        type: "get",
        dataType: "json",
        contentType: "application/json",
        success: function (res) {
            if (typeof res === 'string') {
                res = JSON.parse(res);
            }
            	console.log(res);
        },
        error: function (xhr, err, exception) {
            console.log(err);
            $("#msg").html(err);
        }
    });

})

// var groupMembers = [
// 	{
// 		id: 101,
// 		name: 'John Li',
// 		skills: 'Java programming, Python language, MySQL'
// 	},
// 	{
// 		id: 102,
// 		name: 'Lisa Wang',
// 		skills: 'HTML, JavaScript, CSS, Node.js'
// 	},
// 	{
// 		id: 103,
// 		name: 'Tom Wang',
// 		skills: 'JavaScript, CSS, HTML5'
// 	},
// 	{
// 		id: 104,
// 		name: 'Andy Zhang',
// 		skills: 'PHP language, JavaScript programming, CSS'
// 	}
// 	/*
// 		a large number of data
// 	*/
// ];

var groupMembers = [
{
    "id": 1,
    "name": "jick",
    "skills": "java,PHP，web前端开发",
    "city": "深圳",
    "qq": 46557254,
    "sex": "男",
    "position": "全栈开发",
    "url": "test2.html"
},
{
    "id": 2,
    "name": "刘波涛",
    "skills": "html,css,javascript模式设计",
    "city": "广州",
    "qq": 435766544,
    "sex": "男",
    "position": "web前端设计",
    "url": "test3.html"
},
{
    "id": 3,
    "name": "张宏",
    "skills": "PS,平面设计，网页设计",
    "city": "珠海",
    "qq": 765643253,
    "sex": "女",
    "position": "网页设计",
    "url": "test4.html"
},
{
    "id": 4,
    "name": "刘娟",
    "skills": "C，C++,linux内核开发",
    "city": "深圳",
    "qq": 325437536,
    "sex": "女",
    "position": "系统开发工程师",
    "url": "test5.html"
},
{
    "id": 5,
    "name": "周成",
    "skills": "ruby,python，数据爬虫",
    "city": "广州",
    "qq": 123354324,
    "sex": "男",
    "position": "大数据工程师",
    "url": "test6.html"
},
{
    "id": 6,
    "name": "王皇",
    "skills": "摇滚音乐，音乐制作与设计，动画设计",
    "city": "上海",
    "qq": 656452346,
    "sex": "女",
    "position": "音乐制作师",
    "url": "test7.html"
},
{
    "id": 7,
    "name": "梁伟",
    "skills": "管理，团队建设",
    "city": "珠海",
    "qq": 767563426,
    "sex": "男",
    "position": "产品经理人",
    "url": "test8.html"
}];
 
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

