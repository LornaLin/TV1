function random() {
    //確認用alert("執行")
    //產生亂數
    var i = Math.floor(Math.random() * 5 + 1);
    //確認用 alert(i);
    //判斷i並做出相對應指令的語法
    switch (i) { 
    case 1://i = 1的時候
        location.href =
        'https://www.google.com.tw';
        break;

    case 2://i = 2的時候
        location.href = 'http://www.isha.org.tw/';
        break;

    case 3://i = 3的時候
        location.href = 'https://www.google.com.tw/search?q=css%E5%BE%AE%E8%BB%9F%E6%AD%A3%E9%BB%91%E9%AB%94&oq=css%E5%BE%AE%E8%BB%9F&aqs=chrome.1.69i57j0.4791j0j7&sourceid=chrome&ie=UTF-8';
        break;

    case 4://i = 4的時候
        location.href = 'https://www.youtube.com/watch?v=FPBxTpCT8KU';
        break;

    default:// 其他(i=5)
        location.href = 'http://hornydragon.blogspot.com/';
        break;

    }
}