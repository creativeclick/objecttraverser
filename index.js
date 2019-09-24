/**
 * 
 * @param object [object] //eg. { genre: {name: 'John Doe'}}
 * @param key [string] //eg. 'genre.name'
 */
export function getValue(object, key) {
    let value = { ...object }
    const path = key.split('.')
    for(let index = 0 ; index < path.length ; index++ ){
      value = value[path[index]]
    }
    return value;
}
