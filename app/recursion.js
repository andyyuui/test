exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
   listFiles: function(data, dirName) {
    var listOfFiles = [];
    var dirs = [];
    function processDir(dir) {
      var i;
      var len;
      var file;
      var files = dir.files;
      dirs.push( dir.dir );
      for (i = 0; i < files.length; i++) {
        file = files[i];
        if (typeof file === 'string') {
          if (!dirName || dirs.indexOf(dirName) > -1) {
            listOfFiles.push(files[i]);
          }
        } else {
          processDir(files[i]);
        }
      }
      dirs.pop();
    }
    processDir(data);
    return listOfFiles;
  },
  permute: function(arr) {
    var temp = [];
    var answer = [];
    function logResult() {
      answer.push(
        temp.slice()
      );
    }
    function doIt() {
      var i;
      var len;
      var item;
      for (i = 0; i < arr.length; i++) {
        item = arr.splice(i, 1)[0];
        temp.push(item);
        if (arr.length) {
          doIt();
        } else {
          logResult();
        }
        arr.splice(i, 0, item);
        temp.pop();
      }
      return answer;
    }
    return doIt();
  },
  fibonacci:function(n){
  	if(n<=2){
  		return 1;
  	}else{
  		var a=1, b=1, t;
  		for(var i=0;i<n-2;++i){
  			t=a+b;
  			a=b;
  			b=t;
  		}
  		return b;
  	}
  },
  validParentheses:function(n){
    if (n === 0)
    return [""];
    var result = [];
    for (var i = 0; i < n; ++i) {

        var lefts = arguments.callee(i);
        var rights = arguments.callee(n - i - 1);

        for (var l = 0; l < lefts.length; ++l)
            for (var r = 0; r < rights.length; ++r)
                result.push("(" + lefts[l] + ")" + rights[r]);
    }

    return result;
  }
};