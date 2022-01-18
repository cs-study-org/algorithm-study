# 문자열 조작

<details>
<summary>1. Valid Palindrome</summary>
<br/>

테스트 코드에서 제출 오류가 있었다.

    Input:    ".," 
    Expected: true
  
테스트 코드의 형태가 Palindrome이 아니라서 테스트 코드 오류가 아닌가 싶다.

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {  
  if(s.length === 1)
    return true;
  
  const antiPattern = /[^a-zA-Z]/g;
  const pattern = /[a-zA-Z]/g;
  
  let arr = s.replace(antiPattern, "").toLowerCase().split(pattern);  
  
  while (arr.length >= 1){
    const targetA = arr.shift();
    const targetB = arr.pop();
    
    if(targetA !== targetB)
      return false;
    
    arr = arr.slice(
      arr.indexOf(targetA) + 1,
      arr.indexOf(targetB) - 1
    );    
  }
  return true;
};
```

</details>

<hr/>