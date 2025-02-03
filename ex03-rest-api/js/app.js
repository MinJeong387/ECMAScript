document.addEventListener("DOMContentLoaded", function () {
    const apiUrl = "http://localhost:8088/api/todos"; // API Endpoint URL
    const todoList = document.getElementById("todo-list"); // TODO list element: ul#todo-list
    const newTodoInput = document.getElementById("new-todo"); // New TODO input element: input#new-todo
    const addTodoButton = document.getElementById("add-todo"); // Add TODO button element: button#add-todo


    // 2. 
    // Add TODO to DOM
    //  새로운 todo item을 ul#todo-list에 추가하는 함수
    function addTodoToDOM(todo) {
        // ul#todo-list에 자식 li 노드 추가
        const li = document.createElement("li");

        // 콘텐츠 설정
        li.innerHTML = `
            <span>${todo.title}</span>
            <button onClick="deleteTodo(${todo.id})">Delete</button>
        `;

        // CSS 클래스 설정
        li.className = "todo-item";

        todoList.appendChild(li);
    }

    // 1. 
    // Fetch and display existing TODOs
    //  API로부터 todo list를 가져와서 화면에 표시하는 함수
    function fetchTodos() {
        fetch(apiUrl)   // GET 방식
            .then(response => response.json())
            .then(data => {
                // 기존의 todoList 비우기
                todoList.innerHTML = "";

                console.log("data: ", data);
                data.forEach(todo => {
                    // 아이템을 DOM에 추가
                    addTodoToDOM(todo);
                });
            })
    }



    // Add new TODO
    //  새로운 todo를 추가하는 이벤트 핸들러 연결
    addTodoButton.addEventListener("click", (event) => {
        // #new-todo 입력 상자의 값을 가지고 와서
        // 새 todo item 항목을 만들어서 서버로 전송 (POST)
        const title = newTodoInput.value.trim();
        if (title) {
            // 서버로 전송
            fetch(apiUrl, {
                method: "POST",     // 생성
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: title,
                    completed: false
                })
            })
                .then((response) => response.json())
                .then(todo => {
                    addTodoToDOM(todo);
                    newTodoInput.value = "";
                })
                .catch(error => console.error("Error adding TODO:", error));
        }
        newTodoInput.focus();
    });



    // 3. 
    // Delete TODO
    //  특정 todo를 삭제하는 함수 (삭제 버튼의 클릭 이벤트 핸들러로 사용됨)
    window.deleteTodo = function (id) {
        // Endpoint: http://localhost:3000/todos/{id}
        fetch(`${apiUrl}/${id}`, {         // 서버에 데이터 요청하는 부분. apiUrl = 서버의 기본 주소, /id = 요청하려는 데이터의 고유 식별자인 ID 나타내는 부분
            method: "DELETE"
        })
            .then(() => {
                // 리스트 다시 생성
                fetchTodos();
            })
            .catch(error => console.error("Error deleting TODO: ", error));
    };

    // Initial fetch
    fetchTodos();
});
