
### 연결 리스트 (Linked List)

- 연결 리스트 ( Linked list )
    
    >⇒ 데이터에 저장되어 있는 다음 데이터의 주소에 의해 연결되는 방식
    
    <br>

    - 특징
        - 데이터의 물리적인 순서와 상관없이 포인터를 사용하여 논리적인 순서대로 연결하는 구조다.
            
            >⇒ **노드**라는 각각의 독립된 공간을 사용해 데이터를 담는다.
            
        - 데이터의 논리적인 순서와 물리적인 순서가 일치하지 않아도 된다.
        - 포인터를 이용해 구현한다.
        - 연결리스트는 자신과 인접해있는 데이터에 접근할 수 있는 자료구조로써, 주로 데이터를 순회할 때 사용한다.
        
        <br>

    - 장점
        - 물리적 순서를 맞추기 위한 오버헤드가 발생하지 않는다.
        - 크기 변경이 유연하고, 효율적으로 메모리를 사용할 수 있다
            
            >⇒ 순차 리스트는 고정적인 크기에 비해 연결리스트는 가변적이기 때문에 순차 리스트의 단점 보완이 가능하다.
            
        <br>

        - 삽입 & 삭제가 용이하다
            
            >⇒ **데이터 추가 삭제에 효율적인 자료구조**
            
            <br>

    - 단점
        - 임의의 즉 랜덤한 데이터에 접근시 오래걸린다.
            
            >⇒ 순차 탐색을 통해서만 접근이 가능하다.
            
        - 포인터를 통해 다음 노드를 참조하므로 추가적인 메모리 공간이 발생한다.
            
            >⇒ 참조 주소를 담을 메모리 공간이 추가 필요하다.
            
            <br>
        
    - 연결 리스트 구조
        - 노드
            
            <img width="192" alt="스크린샷 2022-01-19 오전 3 54 07" src="https://user-images.githubusercontent.com/81874493/150006756-0e4dc423-7a95-47d2-9b7c-ff83e55e2702.png">

            - 연결리스트는 노드라는 객체로 구성된다.
                
                >⇒ 실제 데이터가 저장되는 데이터 공간
                
                >⇒ 다음 주소를 가리키는 주소 공간
                
            
            ```c
            // 노드 구조체
            typedef struct Node{
            	int data;
            	Node *next;
            }Node;
            ```
            
            <br>
        
        - 구조
            
            <img width="563" alt="스크린샷 2022-01-19 오전 3 54 13" src="https://user-images.githubusercontent.com/81874493/150006781-a824e72d-93a7-4f0e-8ac8-200e49cf0424.png">

            - 각 노드는 연속된 공간에 저장되어 있지 않고 메모리의 여러 부분에 분포되어 있다.
            - 각 노드에 다음 노드 주소를 저장하여 다음 노드를 탐색할 수 있다.
                
                >⇒ 다음 주소를 가리켜야 하기 때문에 포인터를 사용해 구현
                
            - 노드가 가리키는 주소가 NULL이면 마지막 노드
            
            <br>

    - 연결리스트 종류
        
        
        - 단순 연결 리스트
            

            <img width="632" alt="스크린샷 2022-01-19 오전 3 54 19" src="https://user-images.githubusercontent.com/81874493/150006794-e9061b03-a8c3-4044-80d6-ab96b37e116f.png">

            - 단순 연결 리스트(Singly Linked List)는 리스트의 가장 기본적인 사진과 같은 형태이며, 테일의 포인터 변수가 NULL을 가리키는게 특징이다.
            - 현재 노드에서 다음 노드로 넘어갈 수 있지만, 현재노드에서 이전 노드로 넘어갈 수 없다.
            
            <br>

            - 삽입
                
                <details>
                <summary> 삽입 </summary>
                
                **○ 삽입**
                
                ① 공백 노드를 생성한다. 포인터 변수가 가리키게 하고, 새 노드의 데이터 필드에 값을 저장한다.
                
                <img width="622" alt="스크린샷 2022-01-19 오전 3 54 28" src="https://user-images.githubusercontent.com/81874493/150006834-ddd7462b-8603-4894-ba7d-56ca294aba36.png">

                ---
                
                ② 새 노드의 링크값을 저장한다. <- 새 노드의 링크 필드에 다음 노드의 주소 값을 저장한다.
                
                <img width="623" alt="스크린샷 2022-01-19 오전 3 54 33" src="https://user-images.githubusercontent.com/81874493/150006861-743f98b9-28d7-4e5d-af94-408a8f6b1870.png">

                ---
                
                ③ 앞 노드와 새 노드를 연결한다. <- 앞 노드의 링크 필드에 새 노드의 주소 값을 저장한다.
                
                <img width="614" alt="스크린샷 2022-01-19 오전 3 54 39" src="https://user-images.githubusercontent.com/81874493/150006874-77cd3c86-52d6-4ef4-b73a-75f0f0b94982.png">

                
            </details>

            - 삭제
                <details>
                <summary> 삭제 </summary>

                **○ 삭제**
                
                ① 삭제할 노드의 앞 노드를 찾는다.
                
                <img width="614" alt="스크린샷 2022-01-19 오전 3 54 46" src="https://user-images.githubusercontent.com/81874493/150006940-8f24680e-8b7a-4c13-a322-b531d1caa2ed.png">

                ---
                
                ② 삭제할 노드의 앞 노드와 삭제한 노드의 다음 노드를 연결한다. <- 앞 노드에 삭제할 노드의 링크 필드값을 저장한다.
                
                <img width="614" alt="스크린샷 2022-01-19 오전 3 54 51" src="https://user-images.githubusercontent.com/81874493/150006964-d5e708a9-8d64-4f31-be2c-eef1abb1999a.png">

                </details>

            <br>
            
        - 이중 연결 리스트
            
            <img width="632" alt="스크린샷 2022-01-19 오전 3 54 56" src="https://user-images.githubusercontent.com/81874493/150007008-47ec5abb-9269-41de-8949-de6067ebdd5b.png">

            - Doubly linked list의 핵심은 노드와 노드가 서로 연결되어 있다는 점 이다.
            - 그림을 보면 단순 연결 리스트(linked list)와는 다르게 노드가 이전 노드(previous)와 다음 노드(next)로 구성되어 있다.
            
            - 단순 연결리스트 대비 장단점
                - 장점: 연속적인 탐색&액세스가 이루어져야 하는 경우 탐색 시간 절감
                - 단점: 포인터를 위한 공간이 2배로 사용됨
            
            - 삽입
                <details>
                <summary> 삽입 </summary>
                
                **○ 삽입**
                ① 공백 노드를 생성한다. 포인터 변수가 가리키게 하고, 새 노드의 데이터 필드에 값을 저장한다.
                
                <img width="620" alt="스크린샷 2022-01-19 오전 3 55 08" src="https://user-images.githubusercontent.com/81874493/150007083-2fcdd57c-056b-4e32-8d6d-dc259d90c054.png">

                ---
                
                ② 새 노드의 링크값을 저장한다.
                
                - > 새 노드의 왼쪽 링크 필드에 앞 노드의 주소 값, 오른쪽 링크 필드에 다음 노드의 주소 값을 저장한다.
                
                <img width="604" alt="스크린샷 2022-01-19 오전 3 55 16" src="https://user-images.githubusercontent.com/81874493/150007096-edea4329-41e9-4ff9-833d-cb3e64b1919a.png">

                ---
                
                ③ 앞 노드와 새 노드, 새 노드와 다음 노드를 연결한다.
                
                - > 앞 노드의 오른쪽 링크 필드에 새 노드의 주소 값, 다음 노드의 왼쪽 링크 필드에 새 노드의 주소 값을 저장한다.
                
                <img width="623" alt="스크린샷 2022-01-19 오전 3 55 21" src="https://user-images.githubusercontent.com/81874493/150007108-8260bb51-006c-4b2a-861e-282d599a27f8.png">

                </div> 
                </details>
                
            <br>

            - 삭제
                <details>
                <summary> 삭제 </summary>
                **○ 삭제**
                
                ① 삭제할 노드를 찾는다.
                

                ![Uploading 스크린샷 2022-01-19 오전 3.55.27.png…]()

                ---
                
                ② 삭제할 노드의 앞 노드와 삭제한 노드의 다음 노드를 연결한다.
                
                - > 앞 노드의 오른쪽 링크 필드에 삭제할 노드의 오른쪽 링크 필드값을 저장한다.
                - > 다음 노드의 왼쪽 링크 필드에 삭제할 노드의 왼쪽 링크 필드값을 저장한다.
                
                <img width="605" alt="스크린샷 2022-01-19 오전 3 55 32" src="https://user-images.githubusercontent.com/81874493/150007159-433fe0fb-a0c2-4898-8b7a-b2df2805f72c.png">

            </div> 
            </details>
            
        <br>

        - 원형 연결 리스트
            
            <img width="619" alt="스크린샷 2022-01-19 오전 3 55 37" src="https://user-images.githubusercontent.com/81874493/150007177-61ca86a3-10ff-4aa4-abbc-696a3a04e4f9.png">

            - 단순 연결 리스트에서 마지막 노드가 리스트의 첫 번째 노드를 가리키게 하여 리스트의 구조를 원형으로 만든 리스트 이다.
            - 마지막 노드와 첫 노드를 **O(1)** 시간에 방문할 수 있는 장점
            
            

            - 삽입
                

                <details>
                <summary> 삽입 </summary>
                **○ 삽입**
                
                ① 공백 노드를 생성한다. 포인터 변수가 가리키게 하고, 새 노드의 데이터 필드에 값을 저장한다.
                
                <img width="610" alt="스크린샷 2022-01-19 오전 3 55 46" src="https://user-images.githubusercontent.com/81874493/150007211-03f955af-1ff9-4ea5-83c2-14fc76b84030.png">

                ---
                
                ② 새 노드의 링크값을 저장한다. <- 새 노드의 링크 필드에 다음 노드의 주소 값을 저장한다.
                
                <img width="611" alt="스크린샷 2022-01-19 오전 3 55 52" src="https://user-images.githubusercontent.com/81874493/150007239-e3c96990-07fb-4622-9cea-dd0ef2e447a9.png">

                ---
                
                ③ 앞 노드와 새 노드를 연결한다. <- 앞 노드의 링크 필드에 새 노드의 주소 값을 저장한다.
                
                <img width="625" alt="스크린샷 2022-01-19 오전 3 55 58" src="https://user-images.githubusercontent.com/81874493/150007258-7309c563-9b85-4b2a-aa77-02f732f10f39.png">

                </div> 
                </details>
            

            - 삭제
                
                <details>
                <summary> 삭제 </summary>

                **○ 삭제**
                
                ① 삭제할 노드의 앞 노드를 찾는다.
                
                <img width="612" alt="스크린샷 2022-01-19 오전 3 56 07" src="https://user-images.githubusercontent.com/81874493/150007288-e4dd5a8d-9629-475f-bcc0-b9edd86527bb.png">

                ---
                
                ② 삭제할 노드의 앞 노드와 삭제한 노드의 다음 노드를 연결한다. <- 앞 노드에 삭제할 노드의 링크 필드값을 저장한다.
                
                <img width="617" alt="스크린샷 2022-01-19 오전 3 56 12" src="https://user-images.githubusercontent.com/81874493/150007298-a1ff759c-2510-46f9-a268-357fdab943df.png">

                </div> 
                </details>
        
        <br>
        
        - 이중 순환 연결 리스트
            
            <img width="614" alt="스크린샷 2022-01-19 오전 3 56 16" src="https://user-images.githubusercontent.com/81874493/150007330-f8f80e12-ea0c-4101-bfa8-6c6fad5b7d1c.png">

            - 원형 연결 리스트의 특성과, 이중 연결 리스트를 결합한 구조
            - 삽입
                 
                <details>
                <summary> 삽입 </summary>
                **○ 삽입**
                
                ① 공백 노드를 생성한다. 포인터 변수가 가리키게 하고, 새 노드의 데이터 필드에 값을 저장한다.
                
                <img width="628" alt="스크린샷 2022-01-19 오전 3 56 24" src="https://user-images.githubusercontent.com/81874493/150007343-0cc86255-a87b-423c-848e-5e41b93d02ed.png">

                ---
                
                ② 새 노드의 링크값을 저장한다.
                
                - > 새 노드의 왼쪽 링크 필드에 앞 노드의 주소 값, 오른쪽 링크 필드에 다음 노드의 주소 값을 저장한다.
                
                <img width="604" alt="스크린샷 2022-01-19 오전 3 56 29" src="https://user-images.githubusercontent.com/81874493/150007367-0658e1d6-ad79-45e9-ae7b-68b1f98ec0d1.png">

                ---
                
                ③ 앞 노드와 새 노드, 새 노드와 다음 노드를 연결한다.
                
                - > 앞 노드의 오른쪽 링크 필드에 새 노드의 주소 값, 다음 노드의 왼쪽 링크 필드에 새 노드의 주소 값을 저장한다.
                
                <img width="628" alt="스크린샷 2022-01-19 오전 3 56 33" src="https://user-images.githubusercontent.com/81874493/150007401-55619e12-c2b5-4820-8996-fc34040fe567.png">

                </div> 
                </details>

            - 삭제
                <details>
                <summary> 삭제 </summary>

                **○ 삭제**
                
                ① 삭제할 노드를 찾는다.
                
                <img width="600" alt="스크린샷 2022-01-19 오전 3 56 40" src="https://user-images.githubusercontent.com/81874493/150007422-6ff98c69-4286-4757-a160-7b17296a1cae.png">

                ---
                
                ② 삭제할 노드의 앞 노드와 삭제한 노드의 다음 노드를 연결한다.
                
                - > 앞 노드의 오른쪽 링크 필드에 삭제할 노드의 오른쪽 링크 필드값을 저장한다.
                - > 다음 노드의 왼쪽 링크 필드에 삭제할 노드의 왼쪽 링크 필드값을 저장한다.
                
                <img width="609" alt="스크린샷 2022-01-19 오전 3 56 44" src="https://user-images.githubusercontent.com/81874493/150007437-b174c96e-6e7a-4934-bf35-3a0b7433e556.png">

                </div> 
                </details>
    
    <br>

    - 순차 리스트(배열) vs 연결리스트
        
        <img width="640" alt="스크린샷 2022-01-19 오전 3 56 49" src="https://user-images.githubusercontent.com/81874493/150007470-7f0d3070-ee38-460c-96b0-32b55299234d.png">
        
        <br>
        
        - 탐색에 있어 n개의 노드를 가진 연결리스트 = O(n)
