# NODEJS

참고
---
|-|
|-|
|[-](https://odada.me/246)|





NODE.JS
---
>NODE.JS란
```
Chrome V8 JavaScript 엔진으로 빌드된 JavaScript 런타임
Javascript 를 실행 시킬 수 있도록 하는 오픈소스 서버 환경
Java를 개발하기 위해 JRE(JVM) 를 설치하는 것과 같은 원리

cf)
Chrome V8 JavaScript 엔진
 - 구글에서 제작한 자바스크립트 엔진
 - 여기서 자바스크립트 엔진이란 자바스크립트 코드를 실행하는 프로그램 또는 인터프리터를 뜻한다.

JavaScript 런타임
 - 런타임은 프로그래밍 언어가 구동되는 환경을 말한다.
 - 즉, JavaScript 언어가 구동되는 환경.
```

>NODE.JS 특징
```
 무료이다.
 OS 에 종속적이지 않다.
 비동기 프로그래밍을 사용한다.
 단일 스레드(single-threaded)
 non-blocking
```

>NODE.JS 설치
```
1 nodejs 검색
2 LTS 클릭
3 설치
```

---

<p align="center"><img  width=800px  src="./IMG/1.png" /></p>
<p align="center"><img  width=800px src="./IMG/2.png" /></p>
<p align="center"><img  width=800px src="./IMG/3.png" /></p>

---




NVM
---
>NVM이란
```
nvm 은 node version manager 의 약자로 다양한 버전의 node.js 를 설치하고 관리하는 기능을 제공합니다
하나의 pc 에서 각기 다른 node.js 버전을 사용하는 프로젝트들을 관리해야 할 때 node.js 버전을 간편히 바꾸기 위해 nvm을 사용합니다.
```

>NVM 설치
```

```

---

<p align="center"><img  width=800px  src="./IMG/4.png" /></p>
<p align="center"><img  width=800px  src="./IMG/5.png" /></p>
<p align="center"><img  width=800px  src="./IMG/6.png" /></p>
<p align="center"><img  width=800px  src="./IMG/7.png" /></p>
<p align="center"><img  width=800px  src="./IMG/8.png" /></p>
<p align="center"><img  width=800px  src="./IMG/9.png" /></p>
<p align="center"><img  width=800px  src="./IMG/10.png" /></p>


---

>NVM 기본명령어
```
- ---
- nvm --help //도움말
- nvm ls // 설치된 node 확인
- node --version // node 버전 확인
- nvm install 12.14.1 // node 설치
- nvm uninstall 12.21.0 //node 버전 삭제
```

NPM
---
> NPM이란
```
Node Package Manager
Node Package : Node.js 환경에서 사용가능한 모듈(라이브러리)를 의미
Node.js 환경에서 사용 가능한 패키지를 다운 받을 수 있게 하는 도구
Node.js 를 설치하면 자동으로 설치된다.
다운 받아진 모듈들은 ./node_modules 에 설치된다
npm install [모듈명] 로  다운받아 사용가능
```

> NPM사용하기 <br>
>> npm init -y <br>

---

<p align="center"><img  width=800px  src="./IMG/11.png" /></p>

---

```
npm init -y 명령어는 Node.js 프로젝트를 시작할 때 사용하는 명령어입니다.
여기서 -y 옵션은 "yes"를 의미하며, 사용자의 대화형 입력 없이 기본 설정으로 새로운 package.json 파일을 생성하도록 합니다.

package.json 이란
  package.json 파일은 Node.js 프로젝트의 핵심 설정 파일입니다. 이 파일은 프로젝트의 메타데이터와 함께 의존성 관리, 스크립트 정의 등 다양한 정보를 포함합니다.
  주로 npm (Node Package Manager)을 통해 패키지를 관리하고 프로젝트를 초기화할 때 자동으로 생성됩니다.

  //주요 역할과 내용
  [프로젝트 정보 포함]
  이름 (name): 프로젝트의 이름을 정의합니다.
  버전 (version): 현재 프로젝트의 버전을 관리합니다.
  설명 (description): 프로젝트에 대한 간단한 설명을 제공합니다.

  [의존성 관리]  
    의존성 (dependencies): 프로젝트에서 필요로 하는 외부 패키지들의 목록을 정의합니다. 예를 들어, lodash, react, express 등.
    개발 의존성 (devDependencies): 개발 과정에서만 필요한 패키지들의 목록을 정의합니다. 예를 들어, 테스트 라이브러리 (jest), 번들러 (parcel),
    코드 스타일링 도구 (eslint) 등.
  [스크립트 정의]
    스크립트 (scripts): 프로젝트에서 사용할 수 있는 명령어들을 정의합니다. 주로 빌드, 테스트, 시작과 같은 작업을 자동화할 목적으로 사용됩니다.
    예를 들어, start, build, test 등의 스크립트를 정의할 수 있습니다.
  [기타 설정]
    저자 (author): 프로젝트의 저자 또는 제작자를 나타냅니다.
    라이센스 (license): 프로젝트의 라이센스 정보를 정의합니다.
    저장소 (repository): 프로젝트의 소스 코드 저장소 URL을 지정할 수 있습니다.
```

>> package.json 기본 예시코드
```
{
  "name": "your-project-name",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```
---

>> npm install parcel-bundler -D

---

<p align="center"><img  width=800px height:300px  src="./IMG/12.png" /></p>
<p align="center"><img  width=800px height:300px  src="./IMG/13.png" /></p>
<p align="center"><img  width=800px height:300px  src="./IMG/14.png" /></p>
<p align="center"><img  width=800px height:300px  src="./IMG/15.png" /></p>

---

```
npm install parcel-bundler -D 명령어는 현재 프로젝트에 parcel-bundler를 개발 시에 사용할 패키지로 설치하겠다는 뜻입니다.

Parcel은 웹 애플리케이션을 위한 빠르고 간편한 번들러(bundler)입니다.
주로 정적 자원들(HTML, CSS, JavaScript 등)을 하나의 번들로 묶어서 브라우저가 이해할 수 있는 형태로 변환해주는 도구입니다.
고도화된 개발을 하기 위해 로컬 서버를 돌릴 수 있도록 도와주는 모듈입니다.

"번들(bundle)"은 웹 개발에서 여러 개의 파일을 하나로 묶는 과정이나 그 결과물을 의미합니다.
보통 웹 애플리케이션에서는 HTML, CSS, JavaScript와 같은 여러 종류의 파일들이 각각 분리되어 있지만,
이들을 하나의 파일로 묶어서 브라우저에서 처리할 수 있도록 합니다.


npm install   : npm을 사용하여 패키지를 설치하는 명령어입니다.
parcel-bundler: 설치할 패키지의 이름입니다. 이 경우에는 parcel-bundler라는 이름의 패키지를 설치하겠다는 뜻입니다.
                parcel-bundler는 Parcel이라는 웹 애플리케이션 번들러입니다.
-D 또는 --save-dev: 이 옵션은 패키지를 개발 종속성으로 설치하겠다는 의미입니다.
                    개발 종속성은 개발 시에만 필요한 패키지로, 실제 배포 환경에서는 필요하지 않을 수 있습니다.
                    예를 들어, 테스트 도구나 번들러와 같은 개발용 도구들이 여기에 포함됩니다.

```
---

<p align="center"><img  width=800px  src="./IMG/16.png" /></p>
<p align="center"><img  width=800px  src="./IMG/17.png" /></p>

---

---

>> node-modules 폴더 생성
```
node_modules 폴더 지우고
터미널에서 npm install
정보 확인- 새로 다시 node-modules 폴더 생성!
```
---

VSCODE 사용하기
---

---

<p align="center"><img  width=800px  src="./IMG/18.png" /></p>
<p align="center"><img  width=800px  src="./IMG/19.png" /></p>
<p align="center"><img  width=800px  src="./IMG/20.png" /></p>
<p align="center"><img  width=800px  src="./IMG/21.png" /></p>
<p align="center"><img  width=800px  src="./IMG/22.png" /></p>

---



```
npx parcel index.html
 이 명령어는 index.html 파일을 엔트리 포인트로 하여 Parcel 개발 서버를 실행합니다.
 Parcel은 자동으로 의존성을 해석하고, 번들링된 파일들을 메모리에 저장하여 브라우저에 제공합니다.

npx parcel build index.html
 이 명령어는 index.html 파일을 엔트리 포인트로 하여 Parcel을 사용하여 번들링을 수행하고,
 최종 결과물을 dist 폴더 등의 지정된 경로에 저장합니다.


```
---

>의존성추가(lodash.js)<br>

---

<p align="center"><img  width=800px  src="./IMG/23.png" /></p>
<p align="center"><img  width=800px  src="./IMG/24.png" /></p>
<p align="center"><img  width=800px  src="./IMG/25.png" /></p>
<p align="center"><img  width=800px  src="./IMG/26.png" /></p>

---




github PUSH(.gitignore)
---

> .gitignore 이용 node_modules 제외 PUSH<br>

---

<p align="center"><img  width=800px  src="./IMG/27.png" /></p>
<p align="center"><img  width=800px  src="./IMG/28.png" /></p>
<p align="center"><img  width=800px  src="./IMG/29.png" /></p>
<p align="center"><img  width=800px  src="./IMG/30.png" /></p>
<p align="center"><img  width=800px  src="./IMG/31.png" /></p>
<p align="center"><img  width=800px  src="./IMG/32.png" /></p>
<p align="center"><img  width=800px  src="./IMG/33.png" /></p>


---







