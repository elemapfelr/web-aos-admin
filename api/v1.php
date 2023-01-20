<?php
try {
    // 전송된 Body
    $body = file_get_contents('php://input');
    echo $body;
} catch (exception $e) {
    echo "exception:" . $e->getMessage();
}
