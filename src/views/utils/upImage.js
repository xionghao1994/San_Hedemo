
var upImage={
    completeRes:"",
    failedRes:"",
    init(file,completeRes,failedRes){
        upImage.completeRes=completeRes;
        upImage.failedRes=failedRes;
        this.UpladFile(file);
    },
     //上传文件方法
    UpladFile(file) {
        var xhr;
         var fileObj = file; // js 获取文件对象
         var url = 'https://fileupload.profacty.cn/api/attachment/upload?type=xindai-360'; // 接收上传文件的后台地址

         var form = new FormData(); // FormData 对象
         form.append("file", fileObj); // 文件对象

         xhr = new XMLHttpRequest();  // XMLHttpRequest 对象
         xhr.open("post", url, true); //post方式，url为服务器请求地址，true 该参数规定请求是否异步处理。
         xhr.onload = this.uploadComplete; //请求完成
         xhr.onerror = this.uploadFailed; //请求失败
         xhr.send(form); //开始上传，发送form数据
     },

     //上传成功响应
    uploadComplete(evt) {
         //服务断接收完文件返回的结果
         upImage.completeRes&&upImage.completeRes(evt);
     },
     //上传失败
    uploadFailed(evt) {
        upImage.failedRes&&upImage.failedRes(evt);
    }




}


export {  
    upImage  
} 