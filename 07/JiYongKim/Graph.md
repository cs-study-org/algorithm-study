## 그래프란?

그래프란 ,수학자 오일러가 만든 “그래프 이론” 의 개념을 기초로 구성된 자료구조

## 그래프의 용어

![스크린샷 2022-03-30 오후 8.39.10.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6807d0d0-481b-4783-9e3b-067efa08b8b5/스크린샷_2022-03-30_오후_8.39.10.png)

- 파란색 동그라미 : 정점 ( Vertex )
- 검정색 실선 : 간선 ( Edge )

## 그래프의 종류

- 방향 그래프
    
    ![스크린샷 2022-03-30 오후 8.41.07.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/31b9f2e7-7688-4360-b421-08f7614b50b6/스크린샷_2022-03-30_오후_8.41.07.png)
    
    - 방향 그래프는 간선의 방향이 존재하는 그래프
    - ex)
        - SNS 팔로우
            - 5명의 유저 팔로우 관계에서 A → B → D 관계로 팔로우 하고 있다
                
                ⇒ A는 B를 통해 D를 건너 볼 수 있다.
                
            
            즉 방향 그래프는 간선이 추가되면 
            
            - 한쪽 정점에서 다른 정점으로 이동은 가능 (A → B)
            - 하지만 반대로의 이동은 불가능 ( B → A)
            
- 무방향 그래프
    
    ![스크린샷 2022-03-30 오후 8.46.16.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/92962061-0b53-4e0f-a095-b433e2f3693b/스크린샷_2022-03-30_오후_8.46.16.png)
    
    - 무방향 그래프는 간선의 방향이 없어 서로간 왕복이 가능한 그래프
    

## 그래프의 구현 방식

그래프의 구현 방식에는 2가지 방식으로 나뉜다.

- 인접 리스트 기반 그래프
    - 인접 리스트 기반 그래프는 연결 리스트 배열을 만들고 다음과 같이 표현한다.
    
    ![스크린샷 2022-03-30 오후 8.49.41.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/075656d4-c5c5-42c5-b1e6-ad19706a592d/스크린샷_2022-03-30_오후_8.49.41.png)
    
- 인접 행렬 기반 그래프
    - 인접 행렬 기반 그래프는 이차원 배열을 만들고
        - 연결된 곳은 1
        - 연결되지 않은 곳은 -1
            
            ⇒ 같이 표현한다.
            
    
    ![스크린샷 2022-03-30 오후 8.49.56.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f0c78c2d-5e7b-4754-9d8e-cf79003c0dff/스크린샷_2022-03-30_오후_8.49.56.png)
    

즉 그래프를 가지고 위의 2가지 방식으로 표현이 가능하다.

### 번외)

[https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=demonic3540&logNo=221227400125](https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=demonic3540&logNo=221227400125)

### ADT(Abstract Data Type) 란??

ADT의 정의 : **순수하게 기능이 무엇인지를 나열한 것을 가리켜 '추상 자료형' 혹은 ADT라고 한다.**

### ADT의 사용 사례

C언어    

- 구조체를 통해 사용자 정의 자료형이 정의된다. 지갑의 예를 들어보자.
    
    ![https://mblogthumb-phinf.pstatic.net/MjAxODAzMTJfMzcg/MDAxNTIwODUzNzI1NTA1.0cB6D2CC6cz4LJEVL4v6p3pPK80L4DNndbCN7KUQINwg.dh8cvREwEIIXAd65WjiZ0FIhmAJluWodIQ4HwPAfNEgg.PNG.demonic3540/image.png?type=w800](https://mblogthumb-phinf.pstatic.net/MjAxODAzMTJfMzcg/MDAxNTIwODUzNzI1NTA1.0cB6D2CC6cz4LJEVL4v6p3pPK80L4DNndbCN7KUQINwg.dh8cvREwEIIXAd65WjiZ0FIhmAJluWodIQ4HwPAfNEgg.PNG.demonic3540/image.png?type=w800)
    

- 위의 구조체 정의를 통해 Wallet 자료형을 정의하고 속성으로 500원 동전, 1000원 지폐가 몇 개 담겨 있느냐를 표현하였다.(그러나 Wallet자료형에는 돈을 빼는 것, 돈을 넣는 것 이라는 기능이 있을 수 있다.)
    
    ![https://mblogthumb-phinf.pstatic.net/MjAxODAzMTJfMjU4/MDAxNTIwODUzODQ2MDQy.hpFuhI-mGb_SXqqxAVVEDLHY0T1bw5q_3fo0NTnRH3og.dT_ktwEIxxLDXowFMcG9vv7X5NwRV8IP8WmszwmsTYUg.PNG.demonic3540/image.png?type=w800](https://mblogthumb-phinf.pstatic.net/MjAxODAzMTJfMjU4/MDAxNTIwODUzODQ2MDQy.hpFuhI-mGb_SXqqxAVVEDLHY0T1bw5q_3fo0NTnRH3og.dT_ktwEIxxLDXowFMcG9vv7X5NwRV8IP8WmszwmsTYUg.PNG.demonic3540/image.png?type=w800)
    
    ⇒ 이 기능들을 담고 있는 함수가 구조체 아래의 두 함수이다.
    

**결론)**

자료구조(연결리스트, 스택, 큐 등)의 ADT는

- data를 담을 저장소를 만드는 것과
- data를 다루는 함수들을 정의하는 것을
    
    ⇒ 포함하는 개념인 것이다.
    

**즉, 특정 자료형과 그 자료형을 바탕으로 하는 기능들(함수들)의 집합을 ADT라고 하는 것!**