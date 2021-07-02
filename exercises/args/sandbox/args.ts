export const args = (input: string, schema: object) => {
  let result = {};
  const tokens = input.split(' ');

  Object.keys(schema).map(key => {
    let tokenIndex = tokens.indexOf(`-${key}`)  // 0 or -1
    
    switch (schema[key]) {
      case 'boolean':
        result[key] = tokens.includes(`-${key}`)
        break
      case 'string':
        result[key] = tokens[tokenIndex + 1]
        break; 
      case 'int':
        const maybeTokenVal = tokens[tokenIndex + 1]
        if (maybeTokenVal === undefined || maybeTokenVal.includes('-')) {
          result[key] = 0
        } else {
          result[key] = parseInt(maybeTokenVal, 10)
        }
        break;
      case '[int]':
        const arrStringValue = (tokens[tokenIndex + 1]).split(',');
        result[key] = arrStringValue.map(v => parseInt(v));
        break;
      case '[string]':
        const maybeTokenVal2 = tokens[tokenIndex + 1]
        if (maybeTokenVal2 === undefined || maybeTokenVal2.includes('-')) {
          result[key] = []
        } else { 
          result[key] = (tokens[tokenIndex + 1]).split(',')
        }
        break;
      default:
        break;
    }
  })

  return result;
}
