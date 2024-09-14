function name_shorter(name,maxlength){
    if(name.length>maxlength){
        return name.substring(0,maxlength)+"..."
    }
    return name
}

let newName=name_shorter("CodeMonster",8);
console.log(newName);

// run code D:\webTech\webTech>node shorter_name_string.js