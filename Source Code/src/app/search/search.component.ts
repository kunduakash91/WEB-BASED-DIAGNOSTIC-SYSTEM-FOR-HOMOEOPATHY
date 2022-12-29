import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { Router } from '@angular/router';
import { Medicine } from '../model/Medicine';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  email = localStorage.getItem('emailId');
  public medList: Medicine[] = [];
  public medicine: Medicine = new Medicine;
  public text: string ="";

  constructor(public dashboard: DashboardComponent, private router:Router) { 
  }
  ngOnInit(): void {
    this.medList=[];
    //1
    this.medicine.title = 'Gelsemium Sempervirens';
    this.medicine.imageUrl= 'https://www.shophealthy.in/image/cache/sellers/4006/willmar-schwabe-india-gelsemium-sempervirens-6-ch-30ml-for-neuralgia-general-weakness-trembling-han-5859-1000x1000.jpeg';
    this.medicine.description='';
    this.medicine.symptomsSet = ['Muscle Soreness','Paralysis','Weakness'];
    this.medList.push(this.medicine);

    //2
    this.medicine = new Medicine;
    this.medicine.title = 'Allen A92';
    this.medicine.imageUrl= 'https://static.oxinis.com/healthmug/image/product/7611-2-1000.webp';
    this.medicine.description='';
    this.medicine.symptomsSet = ['Pain In Kidney Area','Constipation'];
    this.medList.push(this.medicine);

    //3
    this.medicine = new Medicine;
    this.medicine.title = 'Cactus Grandiflorus';
    this.medicine.imageUrl= 'https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/cropped/lqlzjq1m6gxwyrtximfp.jpg';
    this.medicine.description='';
    this.medicine.symptomsSet = ['Heart Attack','Chest Pain'];
    this.medList.push(this.medicine);

    //4
    this.medicine = new Medicine;
    this.medicine.title = 'Lycopodium Clavatum';
    this.medicine.imageUrl= 'https://assets.lybrate.com/img/otc/product/sbl-lycopodium-clavatum-mother-tincture-q-0';
    this.medicine.description='';
    this.medicine.symptomsSet = ['Abdominal pain','Fever','Pain In Liver Area'];
    this.medList.push(this.medicine);

    //5
    this.medicine = new Medicine;
    this.medicine.title = 'Allen Livia Liver Tonic';
    this.medicine.imageUrl= 'https://5.imimg.com/data5/SELLER/Default/2021/2/ZA/YB/GU/98679111/allen-livia-liver-tonic-500x500.jpeg';
    this.medicine.description='';
    this.medicine.symptomsSet = ['Pain In Liver Area','Swollen glands'];
    this.medList.push(this.medicine);

    //6
    this.medicine = new Medicine;
    this.medicine.title = 'Schwabe Alpha DP Tablets';
    this.medicine.imageUrl= 'https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/cropped/gte1bflrtkcinn8xspa1.jpg';
    this.medicine.description='';
    this.medicine.symptomsSet = ['Diarhhea','Indigestion'];
    this.medList.push(this.medicine);

    //7
    this.medicine = new Medicine;
    this.medicine.title = 'Adel 1 apo-DOLOR drops';
    this.medicine.imageUrl= 'https://rukminim1.flixcart.com/image/416/416/kdvzwcw0/homeopathy/e/v/z/na-20-1-apo-dolor-adel-original-imafup6hgqh9khbd.jpeg?q=70';
    this.medicine.description='';
    this.medicine.symptomsSet = ['Headache','Weakness','Diabetes'];
    this.medList.push(this.medicine);

    //8
    this.medicine = new Medicine;
    this.medicine.title = 'Dr.Reckeweg R8 Syrup';
    this.medicine.imageUrl= 'https://cdn.shopify.com/s/files/1/0010/3746/7714/products/hex102_95f19603-49a6-41b7-b3ee-4f745f71648d.jpg?v=1571713333';
    this.medicine.description='';
    this.medicine.symptomsSet = ['Cough','Cold','Asthma'];
    this.medList.push(this.medicine);

    //9
    this.medicine = new Medicine;
    this.medicine.title = 'Hevert Germany Gastro Intestinal Relief Tablets';
    this.medicine.imageUrl= 'https://homeomart.net/wp-content/uploads/2017/09/hevert-gastro-germany-intestinal-relief-tablets.jpg';
    this.medicine.description='';
    this.medicine.symptomsSet = ['Indigestion','Vomiting','Abdominal pain'];
    this.medList.push(this.medicine);

    //10
    this.medicine = new Medicine;
    this.medicine.title = 'Schwabe Nisikind globules';
    this.medicine.imageUrl= 'https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/cropped/leriy79gjpei1rtmjjpu.jpg';
    this.medicine.description='';
    this.medicine.symptomsSet = ['Cold','Cough','Fever','Weakness'];
    this.medList.push(this.medicine);

    for(let i=0; i<this.medList.length;i++){
      if(DashboardComponent.searchMed!=this.medList[i].title){
        this.medList.splice(i,1);
        i--;
      }
    }
    DashboardComponent.searchMed="";
    this.text="";
  }

  startVoiceService() {
  }

  search(): void {
    DashboardComponent.searchMed=this.text;
    this.ngOnInit();
  }

  logout(): void{
    localStorage.clear();
    this.router.navigate(['landing']);
  }
}
