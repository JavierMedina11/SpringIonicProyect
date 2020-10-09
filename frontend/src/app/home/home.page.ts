import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Travel } from '../models/travel';
import { TravelsService } from '../services/travels.service';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  travels: Travel[];
  travelForm: FormGroup;

  constructor(private travelservice: TravelsService,public fb: FormBuilder, private router: Router) {
    this.travelForm = this.fb.group({
      name: ['', Validators.required],
      descripcion: ['', Validators.required],
      subname: ['', Validators.required],
      descripcion2: ['', Validators.required],
  });
  }
  
  sliderConfig = {
    centeredSlides: true,
    loop: true,
    spaceBetween: -40
  };
  
  ionViewWillEnter(){
    this.getAllTravels();
  }

   getRandomArbitrary(min, max) {
     let n = Math.floor(Math.random() * (max - min)) + min;
    return n;
  }

  onFormSubmit() {
    if (!this.travelForm.valid) {
      return false;
    } else {
      let travel = {
        id: null,
        name: this.travelForm.value.name,
        descripcion: this.travelForm.value.descripcion,
        img1: this.travelForm.value.img1,
        img2: this.travelForm.value.img2,
        img3: this.travelForm.value.img3,
        subname: this.travelForm.value.subname,
        descripcion2: this.travelForm.value.descripcion2,
      }
      this.travelservice.addTravel(travel)
        .subscribe((res) => {
          this.closePopUp2();
          this.getAllTravels();
        });
    }
  }

  viewList(){
    let list = document.getElementById("listItems");
    list.classList.add("animate__animated");
    list.classList.add("animate__bounceInUp");
    list.style.visibility = "visible";
  }

  getAllTravels(){
    this.travelservice.getTravels().subscribe( travels => {
      this.travels = travels;
      for (let index = 0; index < travels.length; index++) {
        if(travels[index].img1==null){
          travels[index].img1 = "null"+this.getRandomArbitrary(1, 7);
        }
      }
    });
  }

  goTravelInfo(id: number, data1:string, data2: string, data3: string){
    let list = document.getElementById("listItems");
    list.classList.remove("animate__animated");
    list.classList.remove("animate__bounceInUp");
    list.style.visibility = "hidden";
    this.travelservice.setCurrentTravelId(id);
    this.travelservice.setCurrentTravelImg1(data1);
    this.travelservice.setCurrentTravelImg2(data2);
    this.travelservice.setCurrentTravelImg3(data3);
    this.router.navigateByUrl("/travel-info");

  }

  openPopUp() {
    let content = document.getElementById("container");
    let homeOp = document.getElementById("homeOp");
    let homeContent = document.getElementById("homeContent");
    let listItems = document.getElementById("listItems");
    let popup = document.getElementById("popCont");
    popup.classList.add("active");
    content.classList.add("prueba");
    homeOp.classList.add("prueba");
    homeContent.classList.add("prueba");
    listItems.classList.add("prueba");
    popup.style.transition  = "all .5s";
  }

  closePopUp2() {
    let content = document.getElementById("container");
    let homeOp = document.getElementById("homeOp");
    let homeContent = document.getElementById("homeContent");
    let listItems = document.getElementById("listItems");
    let popup = document.getElementById("popCont");
    content.classList.remove("prueba");
    homeOp.classList.remove("prueba");
    homeContent.classList.remove("prueba");
    listItems.classList.remove("prueba");
    popup.classList.remove("active");
  }

}
