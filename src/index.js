module.exports = function check(str, bracketsConfig) {
  let result = false
  str = str.split('');
  brack(str, bracketsConfig)  
  function brack(str){
    if(str.length == 0){
      result = true;
      } else {
        for (let i = 0; i < str.length; i++){
          for (let j = 0; j < bracketsConfig.length; j++){
            if(str[i] == bracketsConfig[j][0] && str[i+1] == bracketsConfig[j][1]){
              str.splice(i, 2);
              brack(str);
            }
          }
        }
      }
    }
    return result;
  }