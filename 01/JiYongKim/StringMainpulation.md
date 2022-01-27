# 문자열조작 (by Java)


<details>
    <summary>Palindrome</summary>

<br>

팰린드롬이란?

앞뒤가 똑같은 문장이나 단어로 뒤집어도 동일한 말이 되는 단어나 문장을 의미한다.

**문제 : 문자열이 팰린드롬인지 확인하라**

<처음 풀기>

```java
class Solution
{
    public Boolean solution(String s)
    {
	s = s.replaceAll("[^a-z0-9]", "");
        int md = str.length()/2;

        String first = str.substring(0,md+1);
        String second = str.substring(md);
        String reverseSecond = "";

        for (int i = second.length()-1 ; i >=0 ; i-- )
            reverseSecond+=second.charAt(i);

        return first.equals(reverseSecond);
    }
}

```
        <설명>
        1. a-z, 0-1 이 아닌 문자는 제거한다.
        2. 입력받은 문자열의 중간을 기준으로 문자열 앞과 뒤 2부분으로 자른다.
        3. 앞부분과 뒤부분을 reverse하여 비교하여 동일하면 true를 반환한다.

<다른 풀이>

```java
class Solution
{
    public int solution(String s)
   {
     s = s.replaceAll("[^a-z0-9]", "");
     int j = s.length()-1;
     for(int i =0 ; i < s.length(); i++ , j--)
         if(s.charAt(i) != s.charAt(j))
            return false;

        return true;
    }
}

```

</details>

<br>

<details>
    <summary>Reverse string</summary>

<br>    

문자열 뒤집기란?

입력받은 문자열을 뒤집어 반환한다.

**문제 : 입력받은 문자열을 뒤집어 반환하라**

<처음 풀기>

```java
class Solution
{
    public String solution(String s)
    {
	     String result = "";

        for (int i = s.length()-1; i>=0; i--)
            result += String.valueOf(s.charAt(i));

        return result;
    }
}


        <설명>
        1. 입력받은 문자열의 맨뒤 인덱스부터 차례로 새로운 문자열에 추가한다.
        => 시간 복잡도 O(n)
        
    
```

<다른 풀이>

java.lang.StringBuffer 클래스의 reverse() 메소드 사용

```java
class Solution
{
    public String solution(String s)
    {
	StringBuilder sb = new StringBuilder(s);
        return sb.reverse().toString();
    }
}

```
        <설명>
        1. StringBuilder 라이브러리의 reverse 메소드를 통해 뒤집는다.
        => 시간복잡도는 O(n)

>⇒ StringBuilder → 비동기 (StringBuffer 보다 효율적이고 빠름, but 멀티 스레드의 동기 보장하지 않음)

>⇒ StringBuffer → 동기

</details>

<br>

<details>
    <summary>Reorder data in log files</summary>

<br>

**문제 : 로그 재정렬 하라.**

<기준>
<br>
1.로그 가장 앞 부분은 식별자
<br>
2.문자로 구성된 로그가 숫자 로그보다 앞에 온다.
<br>
3.식별자는 순서에 영향을 끼치지 않지만,문자가 동일할 경우 식별자 순으로 한다.
<br>
4.숫자 로그는 입력 순서대로 한다.

```java
class Solution
{
    public String[] solution(String []log)
    {
	List<String> letters = new ArrayList<>();
        List<String> digits = new ArrayList<>();

    for(int i=0; i<log.length; i++){
        if (log[i].split(" ")[1].chars().allMatch(Character::isDigit)){
            digits.add(log[i]);
        }
        else {

            letters.add(log[i]);
        }

    }

        Collections.sort(letters, new Comparator<String>() {
            @Override
            public int compare(String o1, String o2) {
                if(o1.split(" ")[1] == o2.split(" ")[1])
                    return o1.split(" ")[0].compareTo(o2.split(" ")[0]);
                else{
                    return o1.split(" ")[1].compareTo(o2.split(" ")[1]);
                }
            }
        });

        List<String> result = new ArrayList<>();
        result.addAll(letters);
        result.addAll(digits);
	
        return result.toArray(new String[result.size()]);
	}
}

```
        <설명>
        1. 입력받은 로그를 쪼개어 1번째 인덱스가 숫자 문자에 따라 각각의 리스트에 저장한다.
        2. 쪼갠 로그의 1번째 인덱스가 문자인 리스트에서 1번째 인덱스값이 동일할경우 0번째 식별자를 통해 비교하고 1번째 인덱스가 동일하지 않을경우 1번째 인덱스 기준으로 정렬한다.
        3. 정렬한 문자 리스트와 숫자 리스트를 합쳐 배열로 반환한다.

</details>

<br>

<details>
    <summary>Most common word</summary>

<br>

**문제 : 금지된 단어를 제외한 가장 흔하게 등장하는 단어를 출력하라**

<처음 풀이>

```java
class Solution
{
    public String solution(String s, String[] banned)
    {
		    Map<String, Integer> counter = new HashMap<>();

        String str = s.replaceAll("[^A-Za-z0-9\\s]", "").toLowerCase();

        for(int i =0; i<banned.length; i++)
            str = str.replaceAll(" "+banned[i],"");

        String[] words = str.split(" ");

        for(int i=0; i< words.length;i++){
            if(counter.containsKey(words[i]))
                counter.put(words[i],counter.get(words[i])+1);
            else
                counter.put(words[i],1);
        }

        return Collections.max(counter.entrySet(), Map.Entry.comparingByValue()).getKey();
    }
}
```
        <설명>
        1. 알파벳 , 숫자, 공백 외 다른 문자들은 제거한다.
        2. 이후 문자열에서 금지된 단어를 삭제한다.
        3. 이후 공백을 기준으로 쪼개어 단어를 키와 횟수를 값으로 map에 저장한다.
        4. map의 값인 횟수중 최대값을 찾고 최대값의 키를 뽑아 반환한다.

</details>

<br>

<details>
    <summary>Group anagrams</summary>
    
‘애너그램’ 이란?

일종의 언어유희로 문자열 재배열하여 다른 뜻을 가진 단어로 바꾸는 것을 의미한다.

**문제 : 문자열 배열을 받아 애너그램 단위로 그룹핑 하라.**

<처음 풀이>

```java
class Solution
{
    public List<List<String>> solution(String[] s)
    {
	    List<List<String>> result = new ArrayList<>();
            Map<String, List<Integer>> map = new HashMap<>();

        for(int i=0; i<s.length;i++){
            char[] chars = s[i].toCharArray();
            Arrays.sort(chars);
            String sortedWord = String.valueOf(chars);
            if(map.containsKey(sortedWord))
                map.get(sortedWord).add(i);
            else
                map.put(sortedWord,new ArrayList<>(Arrays.asList(i)));
        }

        Set<String> set = map.keySet();
        for (String key : set) {
            List<Integer> integers = map.get(key);
            List<String> list = new ArrayList<>();
            for (Integer index : integers) {
                list.add(s[index]);
            }
            result.add(list);
        }

        return result;
    }
}
```
        <설명>
        1. 입력받은 배열의 요소 하나씩 뽑아 정렬한다.
        2. map에 키는 정렬된 문자열, 값은 배열의 요소 인덱스 번호가 저장된 리스트를 저장한되 동일 정렬문자키가 있다면 값으로 저장된 리스트에 요소의 배열 인덱스 번호를 저장한다.
        => 키 - 정렬된 단어, 값 - 리스트 (원래 단어가 저장된 배열의 인덱스 번호)
        3. map의 키셋에서 키에 상응하는 리스트의 인덱스 번호로 결과 리스트에 그룹핑하여 저장한다.
        4. 저장한 결과 리스트를 반환

<다른 풀이>

```java
class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        if (strs.length == 0) return new ArrayList();
        Map<String, List> ans = new HashMap<String, List>();
        for (String s : strs) {
            char[] ca = s.toCharArray();
            Arrays.sort(ca);
            String key = String.valueOf(ca);
            if (!ans.containsKey(key)) ans.put(key, new ArrayList());
            ans.get(key).add(s);
        }
        return new ArrayList(ans.values());
    }
}
```

</details>

<br>

<details>
    <summary>Longest palindromic substring</summary>
    
<br>

```java
class Solution
{

    public int solution(String s){
    
	if (s == null || s.length() < 1) return "";
        int start = 0, end = 0;
        for (int i = 0; i < s.length(); i++) {
            int len1 = expandAroundCenter(s, i, i);
            int len2 = expandAroundCenter(s, i, i + 1);
            int len = Math.max(len1, len2);
            if (len > end - start) {
                start = i - (len - 1) / 2;
                end = i + len / 2;
            }
        }
        return s.substring(start, end + 1);
 
    }

     private static int expandAroundCenter(String s, int left, int right) {
	        int L = left, R = right;
	        while (L >= 0 && R < s.length() && s.charAt(L) == s.charAt(R)) {
	            L--;
	            R++;
	        }
	        return R - L - 1;
	    }
	}
```

    
</details>

<br>

