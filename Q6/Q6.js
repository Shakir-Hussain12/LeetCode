// soultion 1
var reverseWords = function(s) {
    let arr = s.split(' ')

    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start += 1;
        end -= 1;
    }

    let res = arr.filter((item) => item != '')
    return res.join(' ')
};

// soultion 2
var reverseWords = function(s) {
    let arr = s.split(' ') 
    let res = '';

    let end = arr.length - 1;
    let ind = 0;
    while (end >= 0) {
        if (arr[end] != '') {
            if (ind != 0) {
                res += ' '
            }
            res += arr[end];
            ind += 1;
        }
        end -= 1;
    }

    return res;
};