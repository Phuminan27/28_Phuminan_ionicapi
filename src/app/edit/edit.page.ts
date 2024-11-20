import { Component, OnInit } from '@angular/core';
import { DataapiService } from '../dataapi.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  member: any = []; //ประกาศมาเพื่อไปรับค่าจาก sevice
  id: any
  id_stu: any;
  name: any;
  nname: any;
  age: any;
  phone: any;
  address: any;
  status: any;

  constructor(public dataapi: DataapiService, private route: Router) { }

  ngOnInit() {
    //สั่งให้ทำงานพร้อมเปิดหน้าPage
    this.member = this.dataapi.data_detailMen;
  }
  editmember() {

    let dataEdit = {

      id: this.member.id,

      id_stu: this.member.id_stu,

      name: this.member.name,

      nname: this.member.nname,

      age: this.member.age,

      phone: this.member.phone,

      address: this.member.address,

      status: this.member.status,
    };

    // console.log("ค่าที่กรอก", data);

    this.dataapi.editMember(dataEdit).subscribe({

      next: (res: any) => {
        console.log('แก้ไขข้อมูลสำเร็จ');
        this.route.navigate(['/home']);
      },

      error: (error: any) => {

        console.log('ไม่สามารถแก้ไขข้อมูลได้', error);
      },
    });

  } 
}
