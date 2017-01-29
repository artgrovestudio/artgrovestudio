$(document).ready(function () {
	$('').click(function () {
		$.ajax({
			async: false, // Тип запроса. Асинхронний або синхронний.
			cache: true, // Кешування запросів.
			type: "GET", // тип запросу.
			url: "content.php", // Куди ссилаємося.
			data: $('form').serialize(), //	Що передаємо в АЯКС.
			dataType: "html", // "xml", "text", "script", "json", "jsonp" - тип даних, що приймаємо.
			contentType: "aplication/x-www-form-urlencoded", // тип даних, що відсилається на сервер.
			global: true, // використання глобальних АЯКС функцій
			ifModified: false, // 
			processData: true, // 
			timeout: 30000, // Час очікування відповіді від сервера.
			beforeSend: function(XMLHttpReguest) {
				// До відправки запиту.
			},
			success: function(data) {
				// Якщо запит пройшов успішно.
			},
			error: function (XMLHttpReguest, textStatus, errorThrown) {
				// Якщо виникла помилка.
			},
			complete: function(XMLHttpReguest, textStatus) {
				// Буде виконана в будь якому випадку.
			},
			dataFilter: function(data, type) {

			}
		});
	});

	$('').click(function () {
		$.get("content.html",
			"data=content",
			/*(data: content),*/
			function (data, textStatus) {

			},
			"html"
		);
	});

	$('').click(function () {
		$.post("content.html",
			"data=content",
			/*(data: content),*/
			function (data, textStatus) {

			},
			"html"
		);
	});

	$('').click(function () {
		$("").load("content.html",
			"data=content",
			/*(data: content),*/
			function (data, textStatus) {

			},
			"html"
		);
	});

	$("#content").ajaxSuccess(function (event, reguest, setting) {
		// глобальні функції
	});
});