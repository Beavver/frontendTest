<?php
/**
 * Created by PhpStorm.
 * User: Pavel Averyanov
 * Date: 04.08.2017
 * Time: 16:28
 * sing like nobody's listening
 * dance like nobody's watching
 */
header('Content-Type: application/json');
if (mt_rand(0,1)==0) {
    $success = true;
    $result = "Спасибо за обращение, ваша заявка принята";
}
else {
    $success = false;
    $result = "Что-то пошло не так, обратитесь по указанным на сайте телефонам";
}
echo json_encode(
    array(
        "message" => $result,
        "status" => $success
    )
);