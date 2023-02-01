<?php

function apiroute()
{

    // $headers = apache_request_headers();

    // //보내는 헤더가 없으면 헤더 default
    // $header = isset($headers["customHeader"]) ? $headers["customHeader"] : "{\"customHeader\" :\"null\"}";

    $body = file_get_contents('php://input');

    $method = $_SERVER["REQUEST_METHOD"];
    $scheme = $_SERVER["REQUEST_SCHEME"];
    $scheme = "https";
    $host = $_SERVER["HTTP_HOST"];
    $path = str_replace(".php", "", $_SERVER["PHP_SELF"]);
    $param = $_SERVER["QUERY_STRING"] != "" ? "?" . $_SERVER["QUERY_STRING"] : "";
    $fullurl = $scheme . "://" . $host . $path . $param;

    $scriptname = str_replace(".php", "", $_SERVER["SCRIPT_NAME"]);
    $subresource = str_replace($scriptname, "", $path);
    $pathexplode = explode('/', $subresource, 3);

    $group = $pathexplode[1];
    $code = $pathexplode[2];

    // $req_headers = apache_request_headers();
    // $requester = str_replace("https://".$host, '', $req_headers["Referer"]);
    $req_headers = array_change_key_case(apache_request_headers());

    // array_change_key_case($req_headers);
    // var_dump(array_change_key_case($req_headers));

    $requester = str_replace("https://" . $host, '', $req_headers["referer"]);

    // $info["header"] = $header;
    $info["body"] = $body;
    $info["method"] = $method;
    $info["scheme"] = $scheme;
    $info["host"] = $host;
    $info["path"] = $path;
    $info["param"] = $param;
    $info["fullurl"] = $fullurl;
    $info["group"] = $group;
    $info["code"] = $code;
    // $info["referer"] = $requester;

    return $info;
}
