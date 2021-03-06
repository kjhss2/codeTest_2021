# 소개

아이티그라운드 코딩 과제입니다.<br/>
아래 코딩 과제 구현 내용을 만족하는 코드를 작성하시고 Pull Request 를 해주세요.<br/>

# 진행 방법
  (1) https://github.com/itgroundCorp/codeTest_2021.git checkout<br/>
  (2) checkout 받은 디렉토리 이동<br/>
  (3) npm install<br/>
  (4) <b>코딩 과제 구현 내용</b>을 참조하여 코드를 구현해 주세요.<br/>
  (5) commit<br/>
  (6) /testPR push<br/>

# 코딩 과제 구현 내용

1. react를 사용하여 코드 작성

2. 라우터를 이용한 페이지 관리 : 아래 2개의 페이지를 구현해 주세요.
    - [로그인] 페이지
    - [나의 카드] 페이지

3. 페이지 구현(UI 구현)
```
  (1) 로그인 페이지(웹 접근 시 첫 화면)
  
    - 아이디 / 패스워드 입력창 구현
    
    - 로그인 처리는 하드코딩으로 진행(별도 API 통신 하지 않음)
    
    - 아이디 / 패스워드를 입력한 뒤 로그인 성공 시 [나의 카드] 페이지로 이동
  
  (2) [나의 카드] 페이지
  
    - 나의 카드 페이지는 로그인한 사용자가 보유한 카드 목록을 조회하는 페이지 입니다.
    
    - 보유한 카드 목록을 자유롭게 UI를 구성하여 표현해 주세요.
    
    - /src/dummy/dummy_data.js 파일 my_cards_data 객체 데이터를 사용하여 목록을 출력합니다.
      ※dummy_data.js 파일의 주석 부분에 객체 정보가 포함 되어 있습니다.
    
    - 로그아웃 : 로그아웃 버튼 클릭 시 [로그인 페이지]로 이동합니다.
```

4. UI는 반응형으로 구현(Width)
```
  App : 320px ~ 767px

  Tablet : 768px ~ 1199px

  Web : 1200px 이상
```

5. redux를 사용한 react 상태 관리

6. 브라우저 새로고침 시 로그인 상태가 유지 되도록 구현

7. 로그아웃 시 로그인 상태가 해제 되도록 구현
 
# 유의 사항
  - 필요한 npm lib 는 추가 하시길 바랍니다. 단 package.json 추가 필수
  - Pull Request 납부 기한을 지켜주세요. (코딩 과제 테스트 시작 후 24시간 내)
  - 제출하신 코드를 담당자가 checkout 하여 실행 및 채점하니 테스트 및 누락 파일이 없도록 commit 해 주세요.
  - 위 코딩 과제 구현 내용을 다 만족하지 못하더라도 제출해 주세요. (부분 채점 반영)
