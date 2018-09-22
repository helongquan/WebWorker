//receive the message from main thread
self.onmessage = function(e) {
 
	var groupMembers = e.data.groupMembers;
	var keywords = e.data.keywords;
 
	var results = searchByKeywords(groupMembers, keywords);
 
	//post the result message to main thread
	self.postMessage({results: results});
};
 
//it may be quite complicated in real application
function searchByKeywords(groupMembers, keywords) {
	var results = [];
 
	keywords = keywords.toLowerCase();
 
	groupMembers.forEach(function(member) {
		var nameMatched = member.name.toLowerCase().indexOf(keywords) > -1;
		var skillsMatched = member.skills.toLowerCase().indexOf(keywords) > -1;
		
		if (nameMatched || skillsMatched) {
			results.push(member);
		}
	});
 
	return results;
}