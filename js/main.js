$(document).ready(function(){
    //時間カウントアップ処理関数
    function countUp(){
        let hours = $(".hours").text();
        let minutes = $(".minutes").text();
        let seconds = $(".seconds").text();
        let subseconds = $(".subseconds").text();
    
        if(judgeCarry(subseconds, ".subseconds") == 1){
            if(judgeCarry(seconds, ".seconds") == 1){
                if(judgeCarry(minutes, ".minutes") == 1){
                    judgeCarry(hours, ".hours");                 //１０時間以上はカウントせず、０時間に戻る
                }
            }
        }
}

    //時間加算、桁上げ判定関数
    function judgeCarry(num, unit){
        let isCarried;
        num -= 0;                                               //numを数値型に変換
        if(num < 9){
            num += 1;
            $(unit).text(num);
            isCarried = 0;
        }else{
            num = 0
            $(unit).text(num);
            isCarried = 1;
        }
        return isCarried;
    }

    //各ボタン押下時の動作処理関数
    $(".start").click(function(){
        let isCount = true;
        $(".start").prop("disabled",true);
        $(".stop").prop("disabled",false);
        $(".reset").prop("disabled",false);

        var countInterval = setInterval(countUp, 100);

        $(".stop").click(function(){
            isCount = false;
        $(".start").prop("disabled",false);
        $(".stop").prop("disabled",true);
        $(".reset").prop("disabled",false);

            clearInterval(countInterval);
        });

        $(".reset").click(function(){
            if(isCount == false){
                $(".start").prop("disabled",false);
                $(".stop").prop("disabled",true);
                $(".reset").prop("disabled",true);
            }else{
                $(".start").prop("disabled",true);
                $(".stop").prop("disabled",false);
                $(".reset").prop("disabled",false);
            }

            $(".hours").text("0");
            $(".minutes").text("0");
            $(".seconds").text("0");
            $(".subseconds").text("0");
        });
    });
});