# HashMap

### HashMap이란?

<img width="472" alt="스크린샷 2022-03-08 오후 4 47 39" src="https://user-images.githubusercontent.com/81874493/157190632-e2353638-fc89-471b-8521-a41a51034c1e.png">

정의 : HashMap은 키(Key)와 값(Value) 두 쌍으로 데이터를 보관하는 자료구조인 Map 인터페이스의 구현체로 키를 해싱하여 사용하는 자료구조 이다.

<br>

### HashMap의 특징

- key는 Map 내부의 동일한 값이 존재할 수 없다.
- 함시함수를 통해 key를 해싱 하여 사용한다.
- 하나의 key는 정확히 하나의 value만 가질 수 있다

<br>

### HashMap의 작동 과정

- Hash 함수
    
    ```java
    public static int hashCode(byte[] value) {
            int h = 0;
            int length = value.length >> 1;
            for (int i = 0; i < length; i++) {
                h = 31 * h + getChar(value, i);
            }
            return h;
        }
    ```
    
- Hash 충돌 방지 기법
    - Java의 HashMap은 separate Chaining  충돌 방지 기법을 채택하여 사용한다.

<br>

### HashMap의 시간 복잡도

```java
시간복잡도
get           : O(1)
containsKey   : O(1)
next          : O(h/n) h는 테이블 용량
java 1.2 에서 나옴
특징 : 순서에 상관없이 저장됨, Null을 허용한다. thread-safe 보장하지 않는다.
	-값은 중복저장 가능하지만, 키는 중복 저장이 불가능하다
```

<br>

### 번외)

**HashMap vs HashTable**

HashMap과 HashTable은 Java의 API 이름이다. 

- HashTable이란 JDK 1.0부터 있던 Java의 API이고, HashMap은 Java 2에서 처음 선보인 Java Collections Framework에 속한 API다.
- HashTable 또한 Map 인터페이스를 구현하고 있기 때문에 HashMap과 HashTable이 제공하는 기능은 같다.
    
    ⇒ 다만 HashMap은 보조 해시 함수(Additional Hash Function)를 사용하기 때문에 보조 해시 함수를 사용하지 않는 HashTable에 비하여 해시 충돌(hash collision)이 덜 발생할 수 있어 상대으로 성능상 이점이 있다. 
    
    ⇒ 보조 해시 함수가 아니더라도, HashTable 구현에는 거의 변화가 없는 반면, HashMap은 지속적으로 개선되고 있다. 
    
    ⇒ HashTable의 현재 가치는 JRE 1.0, JRE 1.1 환경을 대상으로 구현한 Java 애플리케이션이 잘 동작할 수 있도록 하위 호환성을 제공하는 것에 있기 때문에, 이 둘 사이에 성능과 기능을 비교하는 것은 큰 의미가 없다고 할 수 있다.
