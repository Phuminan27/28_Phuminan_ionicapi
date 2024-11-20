<?php
    include('../config.db.php');  // นำไฟล์เชื่อมต่อกับฐานข้อมูลมาใช้
    $table = "CREATE TABLE members(
    id int(6) AUTO_INCREMENT COMMENT 'เลขที่',
    id_stu int(6) COMMENT 'รหัสนักเรียน',
    name varchar(100) COMMENT 'ชื่อ-สกุล',
    nname varchar(100) COMMENT 'ชื่อเล่น',
    age varchar(100) COMMENT 'อายุ',
    phone varchar(100) COMMENT 'เบอร์โทรศัพท์',
    address varchar(255) COMMENT 'ที่อยู่',
    status varchar(30) COMMENT 'สถานะภาพ',
    PRIMARY KEY (id)
    )";

    if($conn->query($table) === TRUE){
        echo "สร้างตารางสำเร็จ";
    }else{
        echo "สร้างตารางไม่สำเร็จ" .$conn->error;
    }
    $conn->close();
?>