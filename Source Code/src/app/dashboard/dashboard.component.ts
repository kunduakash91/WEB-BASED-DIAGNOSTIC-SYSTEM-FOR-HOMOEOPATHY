import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UploadArray } from '../model/uploadarray';
import { Medicine } from './../model/Medicine';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  //Onsearch passed medicine
  public text1 ="";
  public text ="";
  static searchMed: string;

  //List that has all the symptoms data
  public symptoms: UploadArray[] = [];

  //MedList that has all medicine data
  public medList: Medicine[] = [];

  //Medlist that has all selected data
  public finalMedList: Medicine[] = [];

  //Temp medicine to store medicine data
  public medicine: Medicine;

  //String array that has all the symptoms
  public sample: string[] = ['Paralysis','Pain In Kidney Area','Heart Attack','Pain In Liver Area','Chest Pain','Asthma','Diarrhea','Diabetes','Constipation','Muscle Soreness','Swollen Gland','Abdominal Pain','Vomiting','Fever','Weakness','Cold','Cough','Headache','Indigestion'];
  public type1: string[] = ['Cold','Cough','Headache','Indigestion'];
  public type2: string[] = ['Vomiting','Fever','Weakness'];
  public type3: string[] = ['Constipation','Muscle Soreness','Swollen Gland','Abdominal Pain'];
  public type4: string[] = ['Chest Pain','Asthma','Diarrhea','Diabetes'];
  public type5: string[] = ['Paralysis','Pain In Kidney Area','Heart Attack','Pain In Liver Area'];

  //String to store added symptoms
  coveredSym : string[] =[];

  email = localStorage.getItem('emailId');
  public mySearch: string | undefined;

  constructor( private router:Router) {
    this.medicine = new Medicine;
   }

  //Make list of symptoms with selected false from list of symptoms
  ngOnInit(): void {
    this.symptoms=[];
    for(let i=0; i<19;i++){
      this.symptoms.push(new UploadArray(this.sample[i],false));
    }
  }

  startVoiceService() {
  }

  //Splice unselected symptoms
  getSymptomsUser(){
    for(let i=0; i<this.symptoms.length; i++){
      if(this.symptoms[i].selected == false){
        this.symptoms.splice(i,1);
        i--;
      }
    }
  };

  //Take data for all the medicines and form array
  medicineListMaker(){
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

  }
  //splice unwanted medicines
  getMedicineUser(){

    for(let i=0; i<this.symptoms.length;i++){
      //console.log(this.symptoms[i]);
      if(this.coveredSym.includes(this.symptoms[i].name)){

      }
      else{

        //Check if present in Type 5 list
          if(this.type5.includes(this.symptoms[i].name)){
            for(let j=0;j<this.medList.length;j++){
              if(this.medList[j].symptomsSet.includes(this.symptoms[i].name)){
                this.finalMedList.push(this.medList[j]);
                for(let k=0;k<this.medList[j].symptomsSet.length;k++){
                  this.coveredSym.push(this.medList[j].symptomsSet[k])
                }
                console.log(this.finalMedList);
                break;
              }
            }
          }

          //Check if present in Type 4 list
          if(this.type4.includes(this.symptoms[i].name)){
            for(let j=0;j<this.medList.length;j++){
              if(this.medList[j].symptomsSet.includes(this.symptoms[i].name)){
                this.finalMedList.push(this.medList[j]);
                for(let k=0;k<this.medList[j].symptomsSet.length;k++){
                  this.coveredSym.push(this.medList[j].symptomsSet[k])
                }
                console.log(this.finalMedList);
                break;
              }
            }
          }

          //Check if present in Type 3 list
          if(this.type3.includes(this.symptoms[i].name)){
            for(let j=0;j<this.medList.length;j++){
              if(this.medList[j].symptomsSet.includes(this.symptoms[i].name)){
                this.finalMedList.push(this.medList[j]);
                for(let k=0;k<this.medList[j].symptomsSet.length;k++){
                  this.coveredSym.push(this.medList[j].symptomsSet[k])
                }
                console.log(this.finalMedList);
                break;
              }
            }
          }

          //Check if present in Type 2 list
          if(this.type2.includes(this.symptoms[i].name)){
            for(let j=0;j<this.medList.length;j++){
              if(this.medList[j].symptomsSet.includes(this.symptoms[i].name)){
                this.finalMedList.push(this.medList[j]);
                for(let k=0;k<this.medList[j].symptomsSet.length;k++){
                  this.coveredSym.push(this.medList[j].symptomsSet[k])
                }
                console.log(this.finalMedList);
                break;
              }
            }
          }

          //check if present in Type1 list
          if(this.type1.includes(this.symptoms[i].name)){
            for(let j=0;j<this.medList.length;j++){
              if(this.medList[j].symptomsSet.includes(this.symptoms[i].name)){
                this.finalMedList.push(this.medList[j]);
                for(let k=0;k<this.medList[j].symptomsSet.length;k++){
                  this.coveredSym.push(this.medList[j].symptomsSet[k])
                }
                console.log(this.finalMedList);
                break;
              }
            }
          }

        }
      
    }
  }

  getMedicines(){
    this.finalMedList=[];
    this.coveredSym=[];
    this.getSymptomsUser();
    this.text1="Medicines Recommended As Per Symptoms: (";
    for(let i=0; i<this.symptoms.length;i++){
      this.text1 = this.text1.concat(this.symptoms[i].name+", ");
      console.log(this.symptoms[i].name);
    }
    this.text1 = this.text1.slice(0,this.text1.length-1);
    this.text1 = this.text1.slice(0,this.text1.length-1);
    this.text1 = this.text1.concat(")");
    this.medicineListMaker();
    this.getMedicineUser();
    this.ngOnInit();
  }

  search(): void {
    DashboardComponent.searchMed = this.text;
    console.log(this.text);
    this.router.navigate(['search']);
  }

  logout(): void{
    localStorage.clear();
    this.router.navigate(['landing']);
  }

}
