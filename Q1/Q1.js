var mergeAlternately = function(word1, word2) {
    let iter = 0;
    let res = '';

    while(iter < word1.length) {
        res += word1[iter];
        if (word2[iter]) {
            res += word2[iter];
        }

        iter += 1;
    }

    while(iter < word2.length) {
        res += word2[iter];
        iter += 1;
    }

    return res;
};