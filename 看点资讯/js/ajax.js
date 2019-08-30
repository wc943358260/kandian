function getAjax(url,method,data,successFun,errorFun){
	$.ajax({
		url:baseURL+url,
		method:method,
		data:data,
		success:successFun,
		error:errorFun,
	});
}
