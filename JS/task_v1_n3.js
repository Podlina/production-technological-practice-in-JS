let user1 = {
    name: "Ira",
    age: 18,
};

let user2 = {
    name: "Genna",
    age: 18,
};

function equalsObjects (obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1){
        if (obj1[key] !== obj2[key]){
            return false;
        }
    }
    return true;
}

function equalsProprety (user1, user2) {
    
    if (equalsObjects(user1, user2)) {
        console.log('Равны');
    } else {
        console.log('Не равны');
    }

    if (user1.name === user2.name){
        console.log('Тёски');
    } else {console.log('Не тёски');}
   
    if (user1.age === user2.age){
        console.log('Одногодки');
    } else {console.log('Разный возраст');}
}

equalsProprety(user1, user2);