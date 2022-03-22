## < Hash >

- 구현 문제
    

    - 706. Design HashMap
        <details>
        <summary>Design HashMap</summary>
        

        - 필수 메소드 ( put, get, remove, getHashCode, isEmpty )
        
        ```java
        package HashMap;
        
        import java.util.LinkedList;
        import java.util.List;
        import java.util.Objects;
        
        class MyKeyValueEntry<K,V>{
            private K key;
            private V value;
        
            public MyKeyValueEntry(K key, V value) {
                this.key = key;
                this.value = value;
            }
        
            public K getKey() {
                return key;
            }
        
            public void setKey(K key) {
                this.key = key;
            }
        
            public V getValue() {
                return value;
            }
        
            public void setValue(V value) {
                this.value = value;
            }
        }
        
        class MyBucket {
            private List<MyKeyValueEntry> entryList;
        
            public MyBucket() {
                if (entryList == null) {
                    entryList = new LinkedList<>();
                }
            }
        
            public List<MyKeyValueEntry> getEntryList() {
                return entryList;
            }
        
            public void addEntry(MyKeyValueEntry entry) {
                this.entryList.add(entry);
            }
        
            public void removeEntry(MyKeyValueEntry entry) {
                this.entryList.remove(entry);
            }
        }
        
        public class MyHashMap<K, V> {
            private int CAPACITY = 10;
            private MyBucket[] bucket;
            private int size = 0;
        
            public MyHashMap() {
                this.bucket = new MyBucket[CAPACITY];
            }
        
            private int getHashCode(K key) {
                return (key.hashCode() & 0xfffffff) % CAPACITY;
            }
        
            private MyKeyValueEntry getEntry(K key) {
                int hash = getHashCode(key);
                for (int i = 0; i < bucket[hash].getEntryList().size(); i++) {
                    MyKeyValueEntry myKeyValueEntry = bucket[hash].getEntryList().get(i);
                    if (myKeyValueEntry.getKey().equals(key)) {
                        return myKeyValueEntry;
                    }
                }
                return null;
            }
        
            public boolean containsKey(K key) {
                int hash = getHashCode(key);
                return !(Objects.isNull(bucket[hash]) || Objects.isNull(getEntry(key)));
            }
        
            public void put(K key, V value) {
                if (containsKey(key)) {
                    // key 존재시 업데이트
                    MyKeyValueEntry entry = getEntry(key);
                    entry.setValue(value);
                } else {
                    int hash = getHashCode(key);
                    if(bucket[hash] == null){
                        bucket[hash] = new MyBucket();
                    }
                    bucket[hash].addEntry(new MyKeyValueEntry<>(key, value));
                    size++;
                }
            }
        
            public V get(K key) {
                return containsKey(key) ? (V) getEntry(key).getValue() : null;
            }
        
            public  void delete(K key){
                if(containsKey(key)){
                    int hash = getHashCode(key);
                    bucket[hash].removeEntry(getEntry(key));
                    size --;
                }
            }
        
            public boolean isEmpty() {
                if(size == 0){
                    return true;
                }
                return false;
            }
        
            public int size(){
                return size;
            }
        
            // Testing
            public static void main(String[] args) {
                MyHashMap<String, Integer> map = new MyHashMap<>();
        
                map.put("first",1);
                map.put("second",2);
                map.put("third",3);
                map.put("fourth",4);
                map.put("fifth",5);
        
                System.out.println("first ="+map.get("first"));
                System.out.println("fourth ="+map.get("fourth"));
                map.delete("fifth");
                System.out.println(map.isEmpty());
                System.out.println(map.size());
        
            }
        
        }
        ```
        
        <시간 복잡도>
        
        | containsKey | O(1) |
        | --- | --- |
        | put | O(1) |
        | get | O(1) |
        | delete | O(1) |
        | isEmpty | O(1) |
        
        ( 분할 상환 분석을 통한 시간복잡도 O(1) )
        
        </details>
        
        <br>

- 프로그래머스 Hash 문제
    
    <details>
    <summary>주차 요금 계산</summary>

    - 주차 요금 계산
        - 시간 복잡도 = O(a) , a = records.length
        - 공간 복잡도 = O(3a) , a = records.length
        
        ```java
        import java.util.*;
        class Solution {
            public int[] solution(int[] fees, String[] records) {
                 List<Integer> result = new ArrayList<>();
                HashSet<Integer> set = new HashSet<>();
                HashMap<Integer, Stack<Integer>> map = new HashMap<>();
        
                for (int i = 0; i < records.length; i++) {
                    int car_num = Integer.valueOf(records[i].split(" ")[1]);
                    String[] split = records[i].split(" ")[0].split(":");
                    int time = Integer.valueOf(split[0]) * 60 + Integer.valueOf(split[1]);
                    if (map.containsKey(car_num)) {
                        map.get(car_num).push(time);
                    } else {
                        Stack<Integer> stack = new Stack<>();
                        stack.push(time);
                        map.put(car_num, stack);
                    }
                    set.add(car_num);
                }
                ArrayList<Integer> list = new ArrayList<>(set);
                Collections.sort(list);
        
                for (int car_num : list) {
                    Stack<Integer> stack = map.get(car_num);
                    if (stack.size() % 2 != 0) {
                        stack.add(1439);
                    }
                    int total_time = 0;
        
                    while (stack.size() != 0) {
                        total_time += stack.pop() - stack.pop();
                    }
                    System.out.println("total == " + total_time);
                    if (total_time > fees[0]) {
                        double overTime = (double) (total_time - fees[0]) / fees[2];
                        int ceil = (int) Math.ceil(overTime);
                        result.add(fees[1] + ceil * fees[3]);
                    } else {
                        result.add(fees[1]);
                    }
                }
                return result.stream().mapToInt(i -> i).toArray();
            }
        }
        ```
        </details>
        
        <br>

        <details>
        <summary>완주하지 못한 선수 (Level 1)</summary>

        - 완주하지 못한 선수 (Level 1)
            - 시간복잡도 :  O(n) , n = completion.length
            - 공간복잡도 : O(1)
            
            ```java
            import java.util.*;
            class Solution {
                public String solution(String[] participant, String[] completion) {
                    Arrays.sort(participant);
                    Arrays.sort(completion);
            
                    int i = 0;
                    while(true){
                        if(i>completion.length-1){
                            break;
                        }
            
                        if(!participant[i].equals(completion[i]) ){
                            break;
                        }
                        i++;
                    }
                    return participant[i];
                }
            }
            ```
            </details>

            <br>

            <details>
            <summary>전화번호 목록 (Level 2)</summary>

            - 전화번호 목록 (Level 2)
                - 시간복잡도 : O(a(1+b)) , a = phone_book.length, b= phone_book[i].length
                - 공간복잡도 : O(a) , a = phone_book.length
                
                ```java
                package HashMap;
                
                import java.util.HashMap;
                import java.util.Map;
                
                public class Phone_Book {
                
                    class Solution {
                        public boolean solution(String[] phone_book) {
                            Map<String, Integer> map = new HashMap<>();
                
                            for (int i = 0; i < phone_book.length; i++)
                                map.put(phone_book[i], i);
                
                            for (int i = 0; i < phone_book.length; i++)
                                for (int j = 0; j < phone_book[i].length(); j++)
                                    if (map.containsKey(phone_book[i].substring(0, j)))
                                        return false;
                            return true;
                
                        }
                    }
                
                }
                ```
                </details>
                <br>

- 위장 (Level 2)
- 베스트앨범 (Level 3)
    - 문제에 대한 추가 조건이 필요
    - 추가 조건 : 장르별 두곡만 수록한다 )