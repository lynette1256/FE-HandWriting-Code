<script type="text/javascript">
	// 图片个数
    var num = document.getElementsByTagName('img').length;
    // 图片数组
    var img = document.getElementsByTagName("img");
    var n = 0; //存储图片加载到的位置，避免每次都从第一张图片开始遍历

   	lazyload(); //页面载入完毕加载可视区域内的图片

    // 监听onscroll事件
    window.onscroll = lazyload;
    
    重点是几个数值作比较，判断当前图片进入了视窗位置
    offsetTop 当前图片距离顶部距离
    scrollTop 滚动条距离顶部距离
    clientHeight 当前可见区域高度
    Document.documentElement 是一个会返回文档对象（document）的根元素的只读属性
    
    function lazyload() { //监听页面滚动事件
        var seeHeight = document.documentElement.clientHeight; //可见区域高度
        var scrollTop = 
            document.documentElement.scrollTop || document.body.scrollTop; 
            //滚动条距离顶部高度
        for (var i = n; i < num; i++) {
            if (img[i].offsetTop < seeHeight + scrollTop) {
                if (img[i].getAttribute("src") == "default.jpg") {
                    img[i].src = img[i].getAttribute("data-src");
                }
                n = i + 1;
            }
        }
    }	
</script>
