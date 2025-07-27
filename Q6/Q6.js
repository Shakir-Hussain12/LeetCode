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