$(function(){
    // 変数dis : 初期値250
    var dis = 250;

    // アイコンをクリック
    $("button").click(function(){

        // bodyの子要素のmargin-leftをそれぞれ変数disの値だけ増やす
        $("body").children().animate({"margin-left": "+=" + dis + "px"}, 200);

        // disに-1を掛ける
        dis *= -1;
    });
});

$(function(){
    // スクロールの方向−１の時には左、1の時には右
    var dir = -1;

    // スクロールのインターバル(何秒毎にスクロールさせるか。3000ミリ秒に設定)
    var interval = 3000;

    // スクロールのスピード(700ミリ秒に設定)
    var duration = 700;

    // タイマー用の変数
    var timer;

    // リストの順番を変更(3番目を一番最初にする)
    $("#slide ul").prepend($("#slide li:last-child"));

    // リストの位置を変更(画像１枚分ずらす)
    $("#slide ul").css("left, -1000"); 

    // 3000ミリ秒 (変数intervalの値)毎にslideTimer()関数を実行
    timer = setInterval(slideTimer, interval);

    // slideTimer()関数
    function slideTimer(){
        // スクロール方向の判断
        if(dir == -1){
        // 画像１枚分左へスクロール
            $("#slide ul").animate({"left" : "-=1000px"}, 
            duration, function(){
            // リストの順番を変更
            $(this).append($("#slide li:first-child"));

            // リストの位置を変更
            $(this).css("left", -1000);
            });
        }else{
            // 画像１枚分右へスクロール
            $("slide ul").animate({"left" : "+=1000px" },
            duration, function(){
                // リストの順番を変更
                $(this).prepend($("#slide li:last-child"));

                // リストの位置を変更
                $(this).css("left", -1000);

                // 左方向へリセット
                dir = -1;
            });
        }    
    }
    // 前へ戻るボタン
    $("#prevBtn").click(function(){
        
        // スクロール方向の切り替え(右)
        dir = 1;

        //タイマーを停止して再スタート
        clearInterval(timer);
        timer = setInterval(slideTimer, interval);

        // 初回の関数実行
        slideTimer();
    });

    // 次へ進むボタン
    $("#nextBtn").click(function(){

        // スクロール方向の切り替え(左)
        dir = -1;

        // タイマーを停止して再スタート
        clearInterval(timer);
        timer = setInterval(slideTimer, interval);

        // 初回の関数実行
        slideTimer();
    });
});
        