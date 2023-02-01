<?php
function curl_request($url, $method, $header, $body)
{
    $ch = curl_init();                                 //curl 초기화
    curl_setopt($ch, CURLOPT_URL, $url);               //URL 지정하기
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);    //요청 결과를 문자열로 반환
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 60);      //connection timeout 10초
    //curl_setopt($ch, CURLOPT_TIMEOUT, 10);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);   //원격 서버의 인증서가 유효한지 검사 안함
    //curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);   //원격 서버의 인증서가 유효한지 검사 안함
    curl_setopt($ch, CURLOPT_SSLVERSION, 1);   // HTTPS 접속
    
    if($method != "GET"){
        curl_setopt($ch, CURLOPT_POST, true);              //true시 post 전송
        curl_setopt($ch, CURLOPT_POSTFIELDS, $body);       //POST data
    }

    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $method);
    
    curl_setopt($ch, CURLOPT_HEADER, 1);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
    
    $response = curl_exec($ch);

    $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $header_size = curl_getinfo($ch, CURLINFO_HEADER_SIZE);

    curl_close($ch);
    
    $resHeaders = substr($response, 0, $header_size);
    $resBody = substr($response, $header_size);
    
    if($http_code == "200"){
        return $resBody;
        //return '<pre>' . var_export($header_arr, true) . '</pre>';
    }
    else{
        return "{\"httpcode\":".$http_code.",\"error\":".$response."}";
    }
}
