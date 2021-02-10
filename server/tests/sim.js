function sim(birthYear, workAge) {
    if (birthYear < 1953) {
        trimester = 0
    }
    else if (birthYear == 1953 || birthYear == 1954) {
        trimester = 165
    }
    else if (birthYear >= 1955 && birthYear <= 1957) {
        trimester = 166
    }
    else if (birthYear >= 1958 && birthYear <= 1960) {
        trimester = 167
    }
    else if (birthYear >= 1961 && birthYear <= 1963) {
        trimester = 168
    }
    else if (birthYear >= 1964 && birthYear <= 1966) {
        trimester = 169
    }
    else if (birthYear >= 1967 && birthYear <= 1969) {
        trimester = 170
    }
    else if (birthYear >= 1970 && birthYear <= 1972) {
        trimester = 171
    }
    else if (birthYear >= 1973) {
        trimester = 172
    }

    years = Math.trunc((trimester*3)/12)

    month = (trimester*3)%12

    if(month != 0){
        age = (years + workAge) + ' ans et ' + month + ' mois'
    }
    else if (trimester == 0 && month == 0) {
        age = 'vous pouvez déjà partir à la retraite'
    }
    else{
        age = years + workAge + ' ans'
    }

    return age;
}
module.exports = sim;
 