function check(year){
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
        return `Yes, ${year} is a leap year ✅`
    }
    else{
        return `Yes, ${year} is a leap year ✅`
    }
}
console.log(check(2024));