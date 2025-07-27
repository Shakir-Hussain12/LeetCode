var reverseVowels = function(s) {
    let arr = s.split('');

    let vowels = {
        'a': 1,
        'A': 1,
        'e': 1,
        'E': 1,
        'i': 1,
        'I': 1,
        'o': 1,
        'O': 1,
        'u': 1,
        'U': 1,
    }

    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        if (vowels[arr[start]]) { 
            while (vowels[arr[end]] == undefined) {
                end -= 1;
            }

            if (arr[start] != arr[end]) {
                let temp = arr[end];
                arr[end] = arr[start];
                arr[start] = temp;
            } 
            end -= 1;
        }
        start += 1;
    }

    return arr.join('');
};