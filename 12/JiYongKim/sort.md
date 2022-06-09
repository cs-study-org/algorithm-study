# Sort’

## Stable vs not Stable

stable 정렬은 중복된 키 값이 있을 때 이를 순서대로 정렬하는 알고리즘을 뜻한다. 
예를 들어, int arr[5] = { 7, 3, 6, 2, 3 } 과 같이 3값이 두 번 들어 있는 배열이 있다고 하자. 
이것을 어떠한 정렬 알고리즘으로 정렬 했을 때 중복 된 키 값이 처음 순서대로 정렬 되었다면 stable sort 라고 한다.
반대로 어떠한 정렬 알고리즘으로 정렬 했을 때 중복 된 키 값이 처음 순서와 다르다면 not-stable sort 라고 한다.

<img width="741" alt="스크린샷 2022-06-10 오전 5 56 47" src="https://user-images.githubusercontent.com/81874493/172943873-84e0af70-4742-4e5c-aaff-4588498a5554.png">

## in-place vs not in - place

in-place 정렬은 원소들의 개수에 비해 충분히 무시할 만한 저장 공간만을 더 사용하는 정렬 알고리즘을 뜻한다.not in-place 정렬은 원소들의 개수에 비례하여 저장 공간을 더 사용하는 정렬 알고리즘을 뜻한다.

- [선택정렬](https://blog.kakaocdn.net/dn/bKguwV/btq7BF3ZhM3/cIHJV8VUykHeZpuhioKth0/img.gif)
    
    선택정렬은 현재 위치에 들어갈 값을 찾아서 바꾸는 알고리즘 이다.
    
    - 과정
        1. 현재 정렬되지 않은 가장 앞 인덱스를 선택
        2. 현재 인덱스의 다음 인덱스부터 최소값을 찾는다
        3. 최소값과 가장 앞 인덱스의 값과 변경한다
        4. 위의 과정 반복
        
        {7,5,1,4,3} 정렬시
        
        <img width="517" alt="스크린샷 2022-06-10 오전 5 57 41" src="https://user-images.githubusercontent.com/81874493/172943969-3c46daa4-5a25-4bff-a7cf-bc5318bb5bbf.png">


        
    - 특징
        - 하나의 배열에서 값을 변경하는 식으로 동작하기 때문에 공간 복잡도 O(1)이다.
        - swap시 임시 변수 하나 공간 정도가 더 필요하기 때문에 in-place 정렬이다.
        - 탐색은 (n ~ 1),(n ~ 2),(n ~ 3) … 1 번 진행 되므로  시간 복잡도는 O(n^2) 이다.
        - 중복 키 값이 순서대로 바뀌지 않을 수 있기 때문에 not -stable 하다.
            - 예시)  {7, 7, 1} 선택 정렬
    - 코드
        
        ```java
        void selectionSort(int[] list) {
            int indexMin;
        		int temp;
        
            for (int i = 0; i < list.length - 1; i++) {
                indexMin = i;
                for (int j = i + 1; j < list.length; j++) {
                    if (list[j] < list[indexMin]) {
                        indexMin = j;
                    }
                }
                temp = list[indexMin];
                list[indexMin] = list[i];
                list[i] = temp;
            }
        }
        ```
        

- [버블 정렬](https://blog.kakaocdn.net/dn/QHsaE/btq7CSWefxM/t87BtVJscdmlWJu4LKubPK/img.gif)
    
    버블 정렬은 현재 원소와 다음 원소릴 비교하여 교환하는 식의 정렬 알고리즘 이다.
    
    ⇒ 원소가 거품처럼 올라오는 듯 하여 버블 정렬이라는 이름이 붙음
    
    - 과정

        <img width="591" alt="스크린샷 2022-06-10 오전 5 58 01" src="https://user-images.githubusercontent.com/81874493/172944038-b5344bf4-e415-420b-929f-b543ca830d7e.png">
        
        <img width="662" alt="스크린샷 2022-06-10 오전 5 58 08" src="https://user-images.githubusercontent.com/81874493/172944141-6b3a17fa-93f6-4c2b-bba7-a2b6cab3017c.png">

        <img width="655" alt="스크린샷 2022-06-10 오전 5 58 13" src="https://user-images.githubusercontent.com/81874493/172944180-0b83e869-86ba-422d-8686-4097c9d6fc13.png">

        <img width="678" alt="스크린샷 2022-06-10 오전 5 58 20" src="https://user-images.githubusercontent.com/81874493/172944201-cd6f3616-2579-4046-9e98-f7eb023118c9.png">

        
    - 특징
        - 버블 정렬은 하나의 배열에서 값을 변경 하는 식으로 동작하므로 공간 복잡도는 O(1)이다.
        - 선택 정렬과 마찬가지로 swap 시에 필요한 임시 변수 정도의 추가 공간만 있으면 되므로 in-place 정렬이다.
        - 탐색은 (n ~ 1),(n ~ 2),(n ~ 3) … 1 번 진행 되므로  시간 복잡도는 O(n^2) 이다.
        - 버블 정렬은 중복된 키 값의 순서가 정렬 이후에도 유지되므로 stable 정렬이다.
        
    - 코드
        
        ```java
        void bubbleSort(int[] arr) {
            int temp = 0;
        	for(int i = 0; i < arr.length - 1; i++) {
        		for(int j= 1 ; j < arr.length-i; j++) {
        			if(arr[j]<arr[j-1]) {
        				temp = arr[j-1];
        				arr[j-1] = arr[j];
        				arr[j] = temp;
        			}
        		}
        	}
        }
        ```
        

- [삽입 정렬](https://blog.kakaocdn.net/dn/bIjyVs/btq7DTGJzJE/PEek4jtFIF9jQSyEz9cnA0/img.gif)
    
    삽입 정렬은 두번째 원소부터 시작하여 그 앞의 원소들과 비교하여 삽입할 위치를 지정하고, 원소를 뒤로 옮기고 지정 자리에 자료를 삽입하는 정렬 알고리즘 이다.
    
    - 과정
        
        <img width="674" alt="스크린샷 2022-06-10 오전 5 58 29" src="https://user-images.githubusercontent.com/81874493/172944280-fe8d6707-d802-4ba4-9739-208ce978c786.png">

        <img width="664" alt="스크린샷 2022-06-10 오전 5 58 40" src="https://user-images.githubusercontent.com/81874493/172944320-e32aaf4c-5fd5-4774-80c0-c648a1c35b2a.png">

        <img width="600" alt="스크린샷 2022-06-10 오전 5 58 50" src="https://user-images.githubusercontent.com/81874493/172944333-c6ed3b3f-afe4-4664-8882-1be4a50ea76b.png">

        <img width="617" alt="스크린샷 2022-06-10 오전 5 58 58" src="https://user-images.githubusercontent.com/81874493/172944359-27224684-7c2f-493b-a24e-f94b79dd0c7e.png">

        
    
    - 특징
        - 배열 내에서 교환하는 방식이므로 공간복잡도는 O(1) 이다.
        - 임시 변수 정도의 추가 공간만 필요하므로 in-place 정렬이다.
        - 삽입 정렬은 중복된 키 값의 순서가 정렬 후에도 유지되므로 stable 정렬이다.
        - 평균과 최악의 시간 복잡도는 O(n^2) 이다.
        - 선택 정렬이나 버블 정렬에 비해 상대적 빠름
    - 코드
        
        ```java
        void insertionSort(int[] arr)
        {
        
           for(int index = 1 ; index < arr.length ; index++){
        
              int temp = arr[index];
              int lastIndex = index - 1;
        
              while( (aux >= 0) && ( arr[lastIndex] > temp ) ) {
        
                 arr[lastIndex + 1] = arr[lastIndex];
                 lastIndex--;
              }
              arr[lastIndex + 1] = temp;
           }
        }
        ```
        

- [병합 정렬](https://blog.kakaocdn.net/dn/Ey9jN/btq7Ee461B4/KczCXqoUkQ9daqDM2Odb6K/img.gif)
병합 정렬은 분할 정복의 대표적인 예로,
    
    n개의 데이터를 가진 배열을 오름 차순으로 정렬하기 위해 병합정렬 사용시
    
    아래와 같은 3단계 과정을 거치게 된다.
    
    - 과정
        1. Divide(분할) : n개의 원소를 갖는 배열을 n/2 개의 원소를 갖는 작은 배열 2개로 나눈다.
        2. Conquer(정복) : 각 작은 배열을 정렬한다.
        3. Combine(병합) : 정렬된 작은 배열들을 병합한다.
        
        <img width="644" alt="스크린샷 2022-06-10 오전 5 59 03" src="https://user-images.githubusercontent.com/81874493/172944421-fa54655d-64bc-4372-b033-9ae7897287e0.png">

    - 특징
        - 병합 정렬은 분할한 작은 배열을 위한 저장공간이 따로 필요하기 때문에
            
            n개의 원소를 n/2 개씩 나누어 병합 정렬의 공간 복잡도는 O(n) 이다.
            
            ⇒ 따라서 not-in place 정렬이다.
            
        - 시간 복잡도는 O(nlogn) 이다.
        - 병합 정렬은 중복된 키 값의 순서가 정렬 후에도 유지되기에 stable 정렬이다.
    
    - 코드
        
        ```java
        public class MergeSort {
        
            public static void mergeSort(int[] arr) {
                sort(arr, 0, arr.length);
            }
        
            private static void sort(int[] arr, int low, int high) {
                if (high - low < 2) {
                    return;
                }
        
                int mid = (low + high) / 2;
                sort(arr, 0, mid);
                sort(arr, mid, high);
                merge(arr, low, mid, high);
            }
        
            private static void merge(int[] arr, int low, int mid, int high) {
                int[] temp = new int[high - low];
                int t = 0, l = low, h = mid;
        
                while (l < mid && h < high) {
                    if (arr[l] < arr[h]) {
                        temp[t++] = arr[l++];
                    } else {
                        temp[t++] = arr[h++];
                    }
                }
        
                while (l < mid) {
                    temp[t++] = arr[l++];
                }
        
                while (h < high) {
                    temp[t++] = arr[h++];
                }
        
                for (int i = low; i < high; i++) {
                    arr[i] = temp[i - low];
                }
            }
        }
        ```
        

- [퀵 정렬](https://blog.kakaocdn.net/dn/tBBW4/btq7EzBbhg8/kSIpggnLpcinwhgjL1FMR1/img.gif)
퀵 정렬은 병합 정렬과 비슷하게 분할정복(Divide and Conquer) 알고리즘 이다.
    
    평균적 매우 빠른 수행 속도를 자랑하는 정렬 방법 이다.
    
    - 과정
        1. **리스트 안에 있는 한 요소를 선택한다. 이렇게 고른 원소를 pivot(피벗) 이라고 한다.**
        2. **pivot을 기준으로 pivot보다 작은 요소들은 모두 pivot의 왼쪽으로 옮기고 pivot보다 큰 요소들은 모두 pivot의 오른쪽으로 옮긴다.**
        3. **pivot을 제외한 왼쪽 리스트와 오른쪽 리스트를 다시 정렬한다.**
            
            **3-1) 분할된 왼쪽 리스트와 오른쪽 리스트도 다시 pivot을 정하고 pivot을 기준으로 2개의 부분리스트로 나눈다.**
            
            **3-2) 재귀를 사용하여 부분 리스트들이 더이상 분할이 불가능 할 때까지 반복한다.**
            
            <img width="687" alt="스크린샷 2022-06-10 오전 5 59 16" src="https://user-images.githubusercontent.com/81874493/172944458-c7b80a81-b692-415d-901b-0570c44ec3b5.png">

            <img width="627" alt="스크린샷 2022-06-10 오전 5 59 21" src="https://user-images.githubusercontent.com/81874493/172944503-76d12d61-1cf5-4ee7-93bd-54792438f9b3.png">

            <img width="613" alt="스크린샷 2022-06-10 오전 5 59 30" src="https://user-images.githubusercontent.com/81874493/172944528-6dd9f3e8-e7e4-4adb-9aa6-9c23a7072a34.png">

            <img width="648" alt="스크린샷 2022-06-10 오전 5 59 36" src="https://user-images.githubusercontent.com/81874493/172944550-d4454856-fd6c-4f45-92e7-1f309596f1f0.png">

            <img width="631" alt="스크린샷 2022-06-10 오전 5 59 45" src="https://user-images.githubusercontent.com/81874493/172944581-e537d834-11a4-4641-bc9d-2dd7b2d13453.png">

            <img width="624" alt="스크린샷 2022-06-10 오전 5 59 50" src="https://user-images.githubusercontent.com/81874493/172944606-f457edb6-66e3-44f0-8a1e-ffbef2eb41e6.png">

            
    - 특징
        - 퀵정렬은 재귀적으로 정의되므로 재귀 호출에 따른 스택이 사용된다. 이때 스택의 깊이는 n개의 원소에 대해 logn에 비례하므로 공간복잡도는 O(nlogn)이다.
            
            ⇒ 따라서 in-place 정렬이라고 하기 힘들지만, 실용적으로는 상대적으로 작은 메모리만을 사용하므로 **흔히 in-place 정렬**이라고 기술하기도 한다.
            
        - 퀵정렬은 **최악의 경우** pivot이 배열 내에서 가장 작은 값 또는 가장 큰 값으로 설정된다면 원소 n개에 대해서 n번, (n-1)번, (n-2)번...1번 의 비교가 필요하므로 **시간 복잡도가** **O(n^2)** 된다.
        - 하지만 **평균 시간 복잡도는 O(nlogn)**으로 매우 빠르다.
        ⇒  pivot 값이 적절히 설정된다면 그 속도가 매우 빠르다. 따라서 pivot값을 잘 설정하는 것이 중요하다.
        - 퀵 정렬은 중복된 키값이 순서대로 바뀌지 않을 수 있어 **not-stable**
            
            ⇒  {7,7,1}을 오름차순으로 퀵정렬의 경우
            
    - 코드
        
        ```java
        public void quickSort(int[] arr, int left, int right) {
            int i, j, pivot, tmp;
            if (left < right) {
                i = left;   j = right;
                pivot = arr[(left+right)/2];
        
                while (i < j) {
                    while (arr[j] > pivot) j--;
                    // 이 부분에서 arr[j-1]에 접근해서 익셉션 발생가능함.
                    while (i < j && arr[i] < pivot) i++;
        
                    tmp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = tmp;
                }
        
                quickSort(arr, left, i - 1);
                quickSort(arr, i + 1, right);
            }
        }
        ```
        
- [힙 정렬](https://blog.kakaocdn.net/dn/cg3RAx/btq7Fhtx0B6/vR7HDXUHBHLwqXUxTu9ax0/img.gif)
    - 과정
        
        힙 정렬의 과정은 힙에서 삭제를 구현할 때와 동일하다
        
        1. 주어진 배열을 heapify 하여 배열을 업데이트 하고
        2. 힙에서 삭제를 반복하여 배열에 가장 뒷 인덱스부터 차례로 구성한다.
        
        <img width="626" alt="스크린샷 2022-06-10 오전 6 00 02" src="https://user-images.githubusercontent.com/81874493/172944623-d0787da3-9c16-4a00-b5ff-81c45097c506.png">

    - 특징
        - Heap sort는 추가적인 메모리를 사용하지 않고 하나의 array로 sorting을 하기 때문에 in-place알고리즘이다. 반면에, unstable 하다.
        - 시간복잡도는 O(nlgn)이다.
            
            ⇒ 시간 복잡도는 데이터를 넣을 때도 O(lgN)이고 뺄 때도 O(lgN)이라 고른 성능을 보인다.
            
            ⇒  N개의 데이터를 모두 빼면 정렬이 되기 때문에 힙 정렬의 시간 복잡도는 O(NlgN)이 된다.
            
    - 코드
        
        ```java
        public class Heap
        {
        	private int[] element; //element[0] contains length
        	private static final int ROOTLOC = 1;
        	private static final int DEFAULT = 10;
        
        	public Heap(int size) {
        		if(size>DEFAULT) {element = new int[size+1]; element[0] = 0;}
        		else {element = new int[DEFAULT+1]; element[0] = 0;}
        	}
        
        	public void add(int newnum) {
        
        		if(element.length <= element[0] + 1) {
        			int[] elementTemp = new int[element[0]*2];
        			for(int x = 0; x < element[0]; x++) {
        				elementTemp[x] = element[x];
        			}
        			element = elementTemp;
        		}
        		element[++element[0]] = newnum;
        		upheap();
        	}
        
        	public int extractRoot() {
        		int extracted = element[1];
        		element[1] = element[element[0]--];
        		downheap();
        		return extracted;
        	}
        
        	public void upheap() {
        		int locmark = element[0];
        		while(locmark >= 1 && element[locmark/2] > element[locmark]) {
        			swap(locmark/2, locmark);
        			locmark /= 2;
        		}
        	}
        
        	public void downheap() {
        		int locmark = 1;
        		while(locmark * 2 <= element[0])
        		{
        			if(locmark * 2 + 1 <= element[0]) {
        				int small = smaller(locmark*2, locmark*2+1);
        				swap(locmark,small);
        				locmark = small;
        			}
        			else {
        				swap(locmark, locmark * 2);
        				locmark *= 2;
        			}
        		}
        	}
        
        	public void swap(int a, int b) {
        		int temp = element[a];
        		element[a] = element[b];
        		element[b] = temp;
        	}
        
        	public int smaller(int a, int b) {
        		return element[a] < element[b] ? a : b;
        	}
        }
        ```
        
- 셸 정렬
