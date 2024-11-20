import { Component, OnInit } from '@angular/core';
import { DataapiService } from '../dataapi.service';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {

  member: any = []; //ประกาศตัวแปรอาเรย์ เพื่อรับค่า

  constructor(

    private http: DataapiService,
    public dataapi: HttpClient,
    private nav: NavController,
  ) {

  }

  ngOnInit() {
    this.loadDataMem();
  }




  loadDataMem() {
    this.http.listMember().subscribe({
      next: (res: any) => {
        console.log("เเสดงข้อมูลสำเร็จ");
        this.member = res;
      },
      error: (error: any) => {
        console.log("แสดงข้อมูลไม่สำเร็จ", error)
      }
    })
  }

  edit(datamem: any) {
    this.http.data_detailMen = datamem;
    console.log(datamem);
    this.nav.navigateForward('/edit');
  }


  //สำหรับไปลบข้อมูล
  delMember(id: any) {

    // console.log("ค่าที่กรอก", data);

    this.http.delMember(id).subscribe({

      next: (res: any) => {

        console.log('ลบข้อมูลสำเร็จ', res);

      },

      error: (error: any) => {

        console.log('ไม่สามารถลบข้อมูลได้', error);

      },

    });

    this.loadDataMem(); //เรียกใช้งาน ฟังก์ชัน การดึงข้อมูล

  }


}
