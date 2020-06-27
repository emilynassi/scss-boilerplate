const stringValue = (partialName) => {
  return `@import '${partialName}'`
}

const indexContent = (arr) => {
  let content = [];
  arr.forEach(file => {
      if(file.type !== 'index'){
      content.push(stringValue(file.type));
      }
  });
  return content.join(";\n");
}

module.exports = indexContent;