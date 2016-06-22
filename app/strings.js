exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
    reduceString: function(str, amount) {
        var out = str[0],
            count = 1;
        for (var i = 1; i < str.length; i++) {
            if (str[i] === str[i - 1]) {
                if (count < amount) {
                    out += str[i];
                    count++;
                }
            } else {
                out += str[i];
                count = 1;
            }
        }
        return out;
    },

    wordWrap: function(str, cols) {
    	
    },

    reverseString: function(str) {
        var rtnStr = '';
        for (var i = str.length - 1; i >= 0; i--) {
            rtnStr += str[i];
        }
        return rtnStr;
    }
};
