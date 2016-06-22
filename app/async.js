exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
  	var deferred =$.Deferred();
  	setTimeout(function(){
  		deferred.resolve(value);
  	},10);
  	return deferred.promise();
  },

  manipulateRemoteData: function(url) {
  	var deferred=$.Deferred();
  	$.ajax(url).then(function(data){
  		var people=$.map(data.people,function(p){
  			return p.name;
  		});
  		deferred.resolve(people.sort());
  	});
  	return deferred.promise();
  }
};
