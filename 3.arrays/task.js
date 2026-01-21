function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index]);

}

function getUsersNamesInAgeRange(users, gender) {
    if (users.length === 0) {
        return 0;
    }
    let genders = users.filter(users => users.gender === gender);
    let ages = genders.map(gender => gender.age);
    if (ages.length === 0) {
        return 0;
    }
    let summ = ages.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    let average = summ / genders.length;
    return average;
}