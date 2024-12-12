let newWin;

        function openWindow() {
            // window.open("https://www.daum.net");
            newWin = window.open("https://www.daum.net", "daum", "width=400, height=400, left=100, top=100");
        }

        function closeWindow() {
            if (newWin !== undefined && !newWin.closed)
                newWin.close();
        }

        function printInner() {
            let message = `현재 윈도우 창의 크기는  ${window.innerWidth} x ${window.innerHeight} 입니다.`;
            alert(message);
        }
