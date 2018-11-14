// 动态加载header和footer
ajax({ url: "http://localhost:3000/header.html", type: "get" })
    .then(res => {
        // console.log(res);
        var header = document.getElementsByTagName("header")[0]
            .innerHTML = res;
    });

ajax({ url: "http://localhost:3000/footer.html", type: "get" })
    .then(res => {
        var footer = document.getElementsByTagName("footer")[0]
            .innerHTML = res;
    });