![image](https://github.com/user-attachments/assets/957d8536-6efc-4279-ac69-da7984b212fa)

## 🪜 올인잡

매년마다 이슈가 되는 취업난 문제, 취준생 84.5%는 취업 정보 수집에 어려움을 느낀다고 합니다.
따라서 대학교 3,4학년 및 사회초년생들을 위한 AI 취업 비서 올인잡 프로젝트를 기획하게 되었습니다.

올인잡은 먼저 개인 맞춤형 열정 온도 서비스를 통해 취준생 본인이 원하는 직무에 필요한 스펙의 역량이 
같은 직무를 목표로 하고 있는 취준생들에 비해 부족한지 또는 충분한지 알 수 있는 서비스를 제공합니다.

또한 공모전, 대외활동, 자격증, 어학 및 인턴에 대한 정보를 종합적으로 확인하고 달력을 통해 관리할 수 있으며
나의 관심 커리어를 통해 원하는 정보를 선택적으로 확인하여 취업준비를 도와주는 플랫폼입니다.

</br>

## 📆 프로젝트 기간

- 2023.08.17 ~ 2024.01.31
  
</br>

## 🧱 아키택처
<img src="https://github.com/user-attachments/assets/c75fc9b0-ab97-4c74-9362-0c931252b04e" width="400"/>

* Node.js와 Express를 활용하여 서버 구축
* 깃허브 액션 CI-CD를 통해 Docker Image를 빌드하여 동일한 개발 환경으로 자동화 배포
* Redis를 통해 I/O가 빈번하거나 일회성 데이터를 저장하여 데이터 처리 속도 개선
* 기본 데이터베이스는 RDMS의 Mysql과 ORM인 prisma 사용
* Cheerio를 통해 공모전, 인턴, 자격증, 어학 데이터 크롤링
* 크롤링 데이터는 주기적으로 데이터의 삭제와 저장이 이루어지기 때문에 비관계형 데이터베이스인 Elasticsearch를 통해 저장 및 조작하며, Kibana를 사용하여 데이터를 시각화하고 분석
* passport를 활용하여 소셜로그인 구현

</br>

## ✅ 주요기능
1. 로그인 및 회원가입
* passport 라이브러리를 활용하여 소셜로그인 기능 구현
* 카카오, 구글을 통한 로그인 기능 구현
  
2. 크롤링 및 공공데이터포털을 활용한 데이터 수집
* 공공데이터포털 api를 활용하여 한국산업인력공단의 국가기술자격 시험 정보 활용
* cheerio를 통해 공모전, 대외활동, 어학, 인턴 정보 크롤링

3. 스크랩
* 유저가 원하는 정보 찜하기 기능

4. 달력
* 유저가 등록한 활동내역을 바탕으로 모집일, 마감일 그리고 시작일을 확인 및 관리

5. 활동내역 및 온도계
* 유저 본인 활동내역을 등록하고 관리할 수 있는 기능
* 활동내역에 등록한 정보의 개수를 바탕으로 온도계(0도 ~ 100도) 사이의 점수를 나타내어 유저가 본인의 달성도를 확인 가능
* 온도계의 온도 수치를 통해 유저의 관심분야에 대한 올인잡 서비스에서 자신과 동일한 관심분야를 등록한 유저들간에 자신의 위치가 상위 몇 퍼센트인지 확인 가능

6. 커뮤니티
* 커뮤니티 게시판을 만들어 유저들의 궁금점을 게시판에 올릴 수 있는 기능
* 댓글과 대댓글 기능
  

  
</br>

## 🛠 기술 스택
<p align="center">
<img src="https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white">
<img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge">
<img src="https://img.shields.io/badge/Elastic_Search-005571?style=for-the-badge&logo=elasticsearch&logoColor=white">
<img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white">
<br>
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white">
<img src="https://img.shields.io/badge/redis-%23DD0031.svg?&style=for-the-badge&logo=redis&logoColor=white">
<img src="https://img.shields.io/badge/json%20web%20tokens-323330?style=for-the-badge&logo=json-web-tokens&logoColor=pink">
<br>
<img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white">
<img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white">
<img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white">
<img src="https://img.shields.io/badge/Passport-34E27A?style=for-the-badge&logo=Passport&logoColor=white">

</br>

## 📌 ERD
<img src="https://github.com/user-attachments/assets/19df9c61-9c98-47a8-a901-e051cea486ae" width="600"/>



