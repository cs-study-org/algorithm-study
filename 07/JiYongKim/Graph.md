## 그래프란?

그래프란 ,수학자 오일러가 만든 “그래프 이론” 의 개념을 기초로 구성된 자료구조

## 그래프의 용어

<img width="580" alt="스크린샷 2022-03-31 오전 1 41 52" src="https://user-images.githubusercontent.com/81874493/160887807-f65d9b11-1b54-4bf7-ab0e-f4e098bf103d.png">

- 파란색 동그라미 : 정점 ( Vertex )
- 검정색 실선 : 간선 ( Edge )

## 그래프의 종류

- 방향 그래프
    
    <img width="517" alt="스크린샷 2022-03-31 오전 1 42 01" src="https://user-images.githubusercontent.com/81874493/160887841-ce717f0b-14ac-4f1b-ae50-1d420ceeeb8d.png">

    - 방향 그래프는 간선의 방향이 존재하는 그래프
    - ex)
        - SNS 팔로우
            - 5명의 유저 팔로우 관계에서 A → B → D 관계로 팔로우 하고 있다
                
                ⇒ A는 B를 통해 D를 건너 볼 수 있다.
                
            
            즉 방향 그래프는 간선이 추가되면 
            
            - 한쪽 정점에서 다른 정점으로 이동은 가능 (A → B)
            - 하지만 반대로의 이동은 불가능 ( B → A)
            
- 무방향 그래프
    
    <img width="492" alt="스크린샷 2022-03-31 오전 1 42 06" src="https://user-images.githubusercontent.com/81874493/160887860-9e5cf6ff-be52-4e66-a8b5-f7de8372444c.png">

    - 무방향 그래프는 간선의 방향이 없어 서로간 왕복이 가능한 그래프
    

## 그래프의 구현 방식

그래프의 구현 방식에는 2가지 방식으로 나뉜다.

- 인접 리스트 기반 그래프
    - 인접 리스트 기반 그래프는 연결 리스트 배열을 만들고 다음과 같이 표현한다.
    
    <img width="689" alt="스크린샷 2022-03-31 오전 1 42 12" src="https://user-images.githubusercontent.com/81874493/160887880-26d9a7f6-484e-4ff5-835e-ef2fbe7b200d.png">

- 인접 행렬 기반 그래프
    - 인접 행렬 기반 그래프는 이차원 배열을 만들고
        - 연결된 곳은 1
        - 연결되지 않은 곳은 -1
            
            ⇒ 같이 표현한다.
            
    
    <img width="682" alt="스크린샷 2022-03-31 오전 1 42 18" src="https://user-images.githubusercontent.com/81874493/160887925-c036f1ef-07d5-48c9-831d-a5bddbc375f8.png">


즉 그래프를 가지고 위의 2가지 방식으로 표현이 가능하다.

### 번외)

[https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=demonic3540&logNo=221227400125](https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=demonic3540&logNo=221227400125)

### ADT(Abstract Data Type) 란??

ADT의 정의 : **순수하게 기능이 무엇인지를 나열한 것을 가리켜 '추상 자료형' 혹은 ADT라고 한다.**

### ADT의 사용 사례

C언어    

- 구조체를 통해 사용자 정의 자료형이 정의된다. 지갑의 예를 들어보자.
    

    <img width="585" alt="스크린샷 2022-03-31 오전 1 42 24" src="https://user-images.githubusercontent.com/81874493/160887977-88f3a180-1553-4f90-9f6c-ce099239bb8b.png">


- 위의 구조체 정의를 통해 Wallet 자료형을 정의하고 속성으로 500원 동전, 1000원 지폐가 몇 개 담겨 있느냐를 표현하였다.(그러나 Wallet자료형에는 돈을 빼는 것, 돈을 넣는 것 이라는 기능이 있을 수 있다.)
    

    <img width="685" alt="스크린샷 2022-03-31 오전 1 42 32" src="https://user-images.githubusercontent.com/81874493/160888006-4a6d9a72-23ad-4553-8cf3-ee3172eea914.png">

    ⇒ 이 기능들을 담고 있는 함수가 구조체 아래의 두 함수이다.
    

**결론)**

자료구조(연결리스트, 스택, 큐 등)의 ADT는

- data를 담을 저장소를 만드는 것과
- data를 다루는 함수들을 정의하는 것을
    
    ⇒ 포함하는 개념인 것이다.
    

**즉, 특정 자료형과 그 자료형을 바탕으로 하는 기능들(함수들)의 집합을 ADT라고 하는 것!**
