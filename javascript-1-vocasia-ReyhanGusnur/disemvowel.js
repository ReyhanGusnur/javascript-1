function disemvowel(str) {
    var newStr = "",
        i;

    for (i = 0; i < str.length; i++) {
        if ("aeiou".includes(str[i].toLowerCase())) continue;
        newStr += str[i];
    }
    return newStr;
}
console.log(disemvowel("This website is for losers LOL!")); // 'Ths wbst s fr lsrs LL!'
console.log(disemvowel("You Better don't use this things, Not Gonna Lie!!")); // "Y Bttr dn't us ths thngs, Nt Gnna L!"