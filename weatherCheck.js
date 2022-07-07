function cityTemp(){
        //現在の天気を取得する場所の名前
        let cityName = document.getElementById("cityName").value;
        let appId = "b9fe709e03077a65dc1be1671e49a647";
    
        console.log(cityName);
        if(cityName === "hamamatsu"){
            console.log("aaa");
        }
        const requestUrl = "https://api.openweathermap.org/data/2.5/weather?APPID=" + appId + "&lang=ja&units=metric&q=" + cityName + ",jp;";
    
        //Ajax通信用のオブジェクトを作成
        let xhr = new XMLHttpRequest();
    
        //通信方式とURLを設定
        xhr.open("GET",requestUrl);
    
        //通信を実行する
        xhr.send();
    
        //通信ステータスが変わったら実行される関数
        xhr.onreadystatechange = function(){
            //通信が完了
            if(xhr.readyState == 4){
                ShowTodaysWeather(xhr.responseText);
            }
        }
    
        /**
         * 今日の天気を表示する
         */
        function ShowTodaysWeather(response){
    
            let obj = JSON.parse(response);
    
            let weather = obj.weather[0].description;
            let city = obj.name;
            let temp = obj.main.temp;
    
            console.log("現在の" + city + "の天気は" + weather);
            console.log("気温は" + temp + "度です。");
            cityTxt.innerHTML = city　+ "\n" + weather;
            // weatherTxt.innerHTML = weather;
            tempTxt.innerHTML = temp;
        }
    
}