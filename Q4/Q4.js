// first solution
var canPlaceFlowers = function(flowerbed, n) {
    if (n == 0) return true;

    let i = 0;
    let len = flowerbed.length;
    
    if (len == 1 && n == 1) {
        if (flowerbed[0] == 0) return true
        else return false
    }

    if (flowerbed[0] == 0 && flowerbed[1] == 0) {
        flowerbed[0] = 1;
        n -= 1;
    }

    while (i <= len - 3) {
        if (flowerbed[i] == 1 && flowerbed[i + 1] == 0 && flowerbed[i + 2] == 0 && flowerbed[i + 3] == 0) {
                flowerbed[i + 2] = 1;
                n -= 1;
        }
        i += 1;
    }

    if (flowerbed[len - 1] == 0 && flowerbed[len - 2] == 0) {
        flowerbed[len - 1] = 1;
        n -= 1;
    }
    
    return n <= 0;
};

//second solution
var canPlaceFlowers = function(flowerbed, n) {
    if (n == 0) return true;

    let i = 0;
    let len = flowerbed.length;
    
    if (len == 1 && n == 1) {
        if (flowerbed[0] == 0) return true
        else return false
    }

    while (i < len) {
        if (flowerbed[i] == 0) {
            if (i - 1 < 0 && flowerbed[i + 1] == 0) {
                flowerbed[i] = 1;
                n -= 1;
            }

            else if (i + 1 >= len && flowerbed[i - 1] == 0) {
                flowerbed[i] = 1;
                n -= 1;
            }

            else if (flowerbed[i - 1] == 0 && flowerbed[i + 1] == 0) {
                flowerbed[i] = 1;
                n -= 1;
            }
        }
        i += 1;
    }
    
    return n <= 0;
};