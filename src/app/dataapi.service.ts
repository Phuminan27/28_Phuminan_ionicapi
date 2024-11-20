import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataapiService {

  constructor(
    public http: HttpClient,
  ) { }

  // ประกาศตัวแปรฟังก์ชั่นสำหรับดึงข้อมูลจาก API
  data_detailMen: any = [];

  // ฟังก์ชันการเพิ่มข้อมูลที่ส่งไปยัง API
  addData(data: any) {
    return this.http.post('http://localhost/PSC/api/insert.php', data);
  }

  //ฟังชันดึงข้อมูลมาจาก API
  listMember() {
    return this.http.get('http://localhost/PSC/api/listmember.php')
  }

  //ฟังชันการอก้ไขข้อมูลที่ส่งไปยัง API
  editMember(dataEdit: any) {
    return this.http.put('http://localhost/PSC/api/update.php', dataEdit)
  }


  //สร้างสำหรับการลบ ข้อมูล

  delMember(id: any) {

    // console.log();

    return this.http.delete('http://localhost/PSC/api/delete.php?id=' + id);
  }

}
