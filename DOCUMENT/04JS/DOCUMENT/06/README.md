# DOM(Document Object Model)을 조작


|-|
|-|
|[참고]()|


## 1. 노드 생성 (Creating Nodes)
---

```
DOM에 새로운 요소를 생성할 수 있습니다.

document.createElement(tagName): 주어진 태그 이름의 HTML 요소를 생성합니다.
document.createTextNode(text): 텍스트 노드를 생성합니다.
```

> CODE
```
let newDiv = document.createElement('div');  // 새로운 div 요소 생성
let newText = document.createTextNode('Hello, World!');  // 텍스트 노드 생성
newDiv.appendChild(newText);  // div에 텍스트 노드 추가
document.body.appendChild(newDiv);  // body에 div 요소 추가

```

## 2. 노드 추가 (Appending Nodes)
---

```
생성된 노드를 DOM 트리에 추가합니다.

parentNode.appendChild(childNode): 부모 노드에 자식 노드를 마지막에 추가합니다.
parentNode.insertBefore(newNode, referenceNode): 부모 노드의 자식 중 referenceNode 앞에 newNode를 삽입합니다.
```

> CODE
```
let list = document.getElementById('myList');
let newItem = document.createElement('li');
newItem.textContent = 'New Item';

list.appendChild(newItem);  // 마지막에 항목 추가

// 첫 번째 항목 앞에 새 항목 추가
let firstItem = list.firstElementChild;
list.insertBefore(newItem, firstItem);

```

## 3. 노드 수정 (Modifying Nodes)
---

```
이미 존재하는 요소를 수정합니다.

element.textContent: 요소의 텍스트를 수정합니다.
element.innerHTML: 요소의 HTML을 수정합니다.
element.setAttribute(attribute, value): 요소의 속성을 설정합니다.
element.removeAttribute(attribute): 요소의 속성을 제거합니다.
element.classList.add(className): 클래스 추가.
element.classList.remove(className): 클래스 제거.
```

> CODE
```
let myDiv = document.getElementById('myDiv');

// 텍스트 수정
myDiv.textContent = 'Updated Text';

// HTML 수정
myDiv.innerHTML = '<strong>Updated HTML Content</strong>';

// 속성 수정
myDiv.setAttribute('id', 'newId');

// 클래스 추가 및 제거
myDiv.classList.add('highlight');
myDiv.classList.remove('highlight');

```

## 4. 노드 삭제 (Removing Nodes)
---

```
DOM 트리에서 요소를 제거할 수 있습니다.

parentNode.removeChild(childNode): 부모 노드에서 자식 노드를 제거합니다.
element.remove(): 선택한 요소를 DOM에서 제거합니다.
```

> CODE
```
let list = document.getElementById('myList');
let firstItem = list.firstElementChild;

// 부모 노드에서 첫 번째 항목을 제거
list.removeChild(firstItem);

// 또는 간단하게 요소 자체를 제거
firstItem.remove();

```

## 5. 노드 이동 (Moving Nodes)
---

```
노드를 재배치할 수 있습니다. 노드를 추가하는 방식으로 이미 존재하는 요소를 다른 위치로 이동시킬 수 있습니다.

parentNode.appendChild(node): 노드를 부모의 마지막 자식으로 이동합니다.
parentNode.insertBefore(newNode, referenceNode): 특정 위치로 노드를 이동합니다.
```

> CODE
```
let list = document.getElementById('myList');
let firstItem = list.firstElementChild;
let lastItem = list.lastElementChild;

// 첫 번째 항목을 마지막으로 이동
list.appendChild(firstItem);

// 마지막 항목을 첫 번째로 이동
list.insertBefore(lastItem, list.firstElementChild);

```

## 6. 복제 (Cloning Nodes)
---

```
노드를 복제하여 DOM의 다른 위치에 추가할 수 있습니다.

node.cloneNode(deep): 노드를 복제합니다. deep이 true일 경우 자식 노드까지 모두 복제합니다.
```

> CODE
```
let originalDiv = document.getElementById('originalDiv');
let clonedDiv = originalDiv.cloneNode(true);  // true로 하면 자식 노드까지 복제

document.body.appendChild(clonedDiv);  // 복제된 노드를 body에 추가

```

## 7. 이벤트 연결 (Event Handling)
---

```
노드에 이벤트를 연결할 수 있습니다.

element.addEventListener(event, function): 요소에 이벤트 리스너를 추가합니다.
element.removeEventListener(event, function): 요소에서 이벤트 리스너를 제거합니다.
```

> CODE
```
let button = document.getElementById('myButton');

// 클릭 이벤트 추가
button.addEventListener('click', function() {
    alert('Button Clicked!');
});

// 클릭 이벤트 제거
button.removeEventListener('click', function() {
    alert('Button Clicked!');
});

```

## 8. 노드 탐색 (Navigating Nodes)
---

```
DOM 트리에서 부모, 자식, 형제 노드에 접근할 수 있습니다.

parentNode: 부모 노드를 반환합니다.
childNodes: 자식 노드 목록을 반환합니다.
firstChild: 첫 번째 자식 노드를 반환합니다.
lastChild: 마지막 자식 노드를 반환합니다.
nextSibling: 다음 형제 노드를 반환합니다.
previousSibling: 이전 형제 노드를 반환합니다.
```

> CODE
```
let listItem = document.querySelector('li');

// 부모 노드 탐색
let parent = listItem.parentNode;
console.log(parent);

// 다음 형제 노드 탐색
let nextItem = listItem.nextSibling;
console.log(nextItem);

// 첫 번째 자식 노드 탐색
let firstChild = parent.firstChild;
console.log(firstChild);

```

## 9. 노드 대체 (Replacing Nodes)
---

```
노드를 다른 노드로 대체할 수 있습니다.

parentNode.replaceChild(newNode, oldNode): 부모 노드에서 기존 노드를 새 노드로 대체합니다.
```

> CODE
```
let oldItem = document.getElementById('oldItem');
let newItem = document.createElement('li');
newItem.textContent = 'This is the new item';

// oldItem을 newItem으로 대체
oldItem.parentNode.replaceChild(newItem, oldItem);

```

## 정리
---

```
생성: createElement(), createTextNode()
추가: appendChild(), insertBefore()
수정: textContent, innerHTML, setAttribute(), classList.add()
삭제: removeChild(), remove()
이동: appendChild(), insertBefore()
복제: cloneNode()
탐색: parentNode, childNodes, nextSibling, firstChild
대체: replaceChild()
```
