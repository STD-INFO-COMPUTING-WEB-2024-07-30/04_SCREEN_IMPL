# 이벤트처리


|-|
|-|
|[참고]()|


## 자바스크립트 이벤트 종류
---
> 마우스 이벤트 (Mouse Events)
```
  click: 사용자가 요소를 클릭했을 때 발생
  dblclick: 사용자가 요소를 더블 클릭했을 때 발생
  mousedown: 마우스 버튼을 눌렀을 때 발생
  mouseup: 마우스 버튼을 뗄 때 발생
  mousemove: 마우스가 움직일 때 발생
  mouseenter: 마우스 포인터가 요소 위에 진입할 때 발생
  mouseleave: 마우스 포인터가 요소에서 벗어날 때 발생
```
> 키보드 이벤트 (Keyboard Events)
```
  keydown: 키를 눌렀을 때 발생
  keyup: 키에서 손을 뗄 때 발생
  keypress: 키를 눌렀을 때 발생 (deprecated, 주로 keydown과 keyup 사용)
```
> 폼 이벤트 (Form Events)
```
  submit: 폼 제출 시 발생
  change: 폼의 요소 값이 변경되었을 때 발생
  focus: 요소에 포커스가 갈 때 발생
  blur: 요소에서 포커스가 벗어날 때 발생
  input: 입력 필드에 값이 입력될 때 발생
```
> 윈도우 이벤트 (Window Events)
```
  load: 페이지가 로드될 때 발생
  resize: 창 크기가 변경될 때 발생
  scroll: 사용자가 페이지를 스크롤할 때 발생
  unload: 페이지가 닫히거나 새로 고침될 때 발생
```
> 드래그 이벤트 (Drag Events)
```
  dragstart: 드래그가 시작될 때 발생
  drag: 드래그하는 동안 발생
  dragend: 드래그가 끝났을 때 발생
  dragover: 드래그 중 요소 위로 마우스를 가져갈 때 발생
  drop: 드래그된 요소가 놓일 때 발생
```
> 터치 이벤트 (Touch Events)
```
  touchstart: 화면을 터치할 때 발생
  touchmove: 터치가 이동할 때 발생
  touchend: 터치가 끝났을 때 발생
```




## 1. 마우스 클릭 이벤트 (click)
---
> CODE
```
<!DOCTYPE html>
<html>
<body>

<button id="myButton">Click Me</button>

<script>
document.getElementById("myButton").addEventListener("click", function() {
    alert("Button clicked!");
});
</script>

</body>
</html>
```

## 2. 키보드 입력 이벤트 (keydown)
---
> CODE
```
<!DOCTYPE html>
<html>
<body>

<input type="text" id="myInput" placeholder="Type something...">

<script>
document.getElementById("myInput").addEventListener("keydown", function(event) {
    console.log("Key pressed: " + event.key);
});
</script>

</body>
</html>

```

## 3. 폼 제출 이벤트 (submit)
---
> CODE
```
<!DOCTYPE html>
<html>
<body>

<form id="myForm">
    <input type="text" placeholder="Enter your name">
    <button type="submit">Submit</button>
</form>

<script>
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();  // 기본 제출 동작 방지
    alert("Form submitted!");
});
</script>

</body>
</html>

```

## 4. 마우스 이동 이벤트 (mousemove)
---
> CODE
```
<!DOCTYPE html>
<html>
<body>

<div style="height:300px; background-color:lightgrey;" id="mouseArea">Move your mouse here!</div>
<p id="coordinates"></p>

<script>
document.getElementById("mouseArea").addEventListener("mousemove", function(event) {
    document.getElementById("coordinates").innerHTML = "X: " + event.clientX + " Y: " + event.clientY;
});
</script>

</body>
</html>

```

## 5. 윈도우 로드 이벤트 (load)
---
> CODE
```
<!DOCTYPE html>
<html>
<body>

<h1>Page Loading Example</h1>

<script>
window.addEventListener("load", function() {
    alert("Page fully loaded!");
});
</script>

</body>
</html>

```

## 6. 스크롤 이벤트 (scroll) 
---
> CODE
```
<!DOCTYPE html>
<html>
<body style="height:1500px;">

<h1>Scroll Down!</h1>
<p id="scrollPos"></p>

<script>
window.addEventListener("scroll", function() {
    document.getElementById("scrollPos").innerHTML = "Scroll position: " + window.scrollY;
});
</script>

</body>
</html>

```
 
## 7. 드래그 앤 드롭 이벤트 (drag & drop)
---
> CODE
```
<!DOCTYPE html>
<html>
<body>

<div id="dragItem" draggable="true" style="width:100px; height:100px; background-color:blue;"></div>
<div id="dropArea" style="width:200px; height:200px; background-color:lightgrey; margin-top:20px;">Drop here</div>

<script>
let dragItem = document.getElementById("dragItem");

dragItem.addEventListener("dragstart", function(event) {
    event.dataTransfer.setData("text", event.target.id);
});

document.getElementById("dropArea").addEventListener("dragover", function(event) {
    event.preventDefault();  // 기본 드롭 방지
});

document.getElementById("dropArea").addEventListener("drop", function(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("text");
    let draggedItem = document.getElementById(data);
    event.target.appendChild(draggedItem);
});
</script>

</body>
</html>

```


