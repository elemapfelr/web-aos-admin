<?php

$root = $_SERVER["DOCUMENT_ROOT"];
include $root . "/route.php";
include $root . '/json.lib.php';
include $root . '/curl.lib.php';

try {
    // 전송된 Body
    $body = file_get_contents('php://input');
    echo $body;
} catch (exception $e) {
    echo "exception:" . $e->getMessage();
}
