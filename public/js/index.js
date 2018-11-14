window.onload = function () {
	ajax({
		url: "http://localhost:3000/index",
		type: "get",
		dataType: "json"//将json字符串自动转为对象
	}).then(res => {
		console.log(res);
		for (var value of res) {
			var notices = value;
			var { title, date, href } = notices;
			var noticeItem = `<li>
								<a href="${href}">${title}</a>
								<span>${date.slice(0, 10)}</span>
							</li>`;
			var moduleList = document.querySelector(
				".content-wrap>div>.content-module>.module-list"
			)
			moduleList.innerHTML += noticeItem;
		}
	})
}