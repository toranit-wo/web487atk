<?php
$params = json_decode(file_get_contents('php://input'));
    $menu = ['home','Link รับทรัพย์','บทความ','ติดต่อเรา']
    $data = [];
    for ($i=0; $i < count($menu); $i++) { 
        $data = [
            'id' => count($data),
            'name' => $menu[$i];
        ]
    }

echo json_encode(['data'=>$data]);
?>