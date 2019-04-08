let map = new Map();
map.set('name','Mai').set('age',22);
console.log(map.has('name'));
console.log(map.has('ten'));
console.log(map.get('age'));
let m = new Map([['r1','admin'],['r2','user'],]);
console.log(`Role1: ${m.get('r1')}\nRole2: ${m.get('r2')}`)