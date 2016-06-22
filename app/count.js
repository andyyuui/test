exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
  	var time;
  	function print(){
  		console.log(start++);
  		if(start<=end){
  			time=setTimeout(print,100);
  		}
  	}
  	print();
  	return{
  		cancel:function(){
  			time&&clearTimeout(time);
  		}
  	}
  }
};
