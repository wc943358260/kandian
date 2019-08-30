$(function(){
	$('.rightContent').load('./home.html');
	$('.leftContent li').click(function(){
		var title = $(this).text().trim();
		switch(title){
			case '首页':
				$('.rightContent').load('./home.html');
				break;
			case '栏目管理':
				$('.rightContent').load('./category.html');
				break;
			case '资讯管理':
				$('.rightContent').load('./info.html');
				break;
			case '用户管理':
				$('.rightContent').load('./user.html');
				break;
			default:
				break;
		}
	})
})
//删除数组重复项
function uniqueArray(data){  
   data = data || [];  
   var a = {};  
   for (var i=0; i<data.length; i++) {  
       var v = data[i];  
       if (typeof(a[v]) == 'undefined'){  
            a[v] = 1;  
       }  
   };  
   data.length=0;  
   for (var i in a){  
        data[data.length] = i;  
   }  
   return data;  
}  