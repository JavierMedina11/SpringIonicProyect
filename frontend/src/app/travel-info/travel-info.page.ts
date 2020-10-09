import { Component, OnInit, ViewChild } from '@angular/core';
import { Travel } from '../models/travel';
import { TravelsService } from '../services/travels.service';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-travel-info',
  templateUrl: './travel-info.page.html',
  styleUrls: ['./travel-info.page.scss'],
})

export class TravelInfoPage implements OnInit {ç

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

  // @ViewChild(IonSlides) slides: IonSlides;

  ngOnInit() {
    this.getDataTravel()
  }

  ionViewWillEnter() {
    setTimeout(function() {
      const curtain = document.getElementById("curtain");
      curtain.classList.add('active');
    }, 50);
    setTimeout(function() {
      const travelinfo = document.getElementById("travelInfoContainer");
      travelinfo.classList.add('animate__fadeIn');
      travelinfo.style.visibility = "visible";
    }, 1250);
    setTimeout(function() {
      const home = document.getElementById("home");
      home.classList.add('animate__animated');
      home.classList.add('animate__fadeIn');
      home.style.visibility = "visible";
    }, 1550);
    setTimeout(function() {
      const home = document.getElementById("home");
      home.classList.remove('animate__fadeIn');
      home.classList.add('animate__heartBeat');
      home.classList.add('animate__infinite');
    }, 1800);
    setTimeout(function() {
      const h2sl = document.getElementById("h2sl");
      h2sl.classList.add('animate__fadeIn');
      h2sl.style.visibility = "visible";
    }, 1850);
    setTimeout(function() {
      const h1sl = document.getElementById("h1sl");
      h1sl.classList.add('animate__fadeIn');
      h1sl.style.visibility = "visible";
    }, 2000);
    setTimeout(function() {
      const psl = document.getElementById("psl");
      psl.classList.add('animate__fadeIn');
      psl.style.visibility = "visible";
    }, 2150);
    setTimeout(function() {
      const clouds = document.getElementById("clouds");
      clouds.classList.add('animate__fadeInUp');
      clouds.style.visibility = "visible";
    }, 2550);
    setTimeout(function() {
      const swipeUps = document.getElementById("swipeUps");
      swipeUps.classList.add('animate__fadeInUp');
      swipeUps.style.visibility = "visible";
    }, 2700);
  }

  
  goHome(){
    this.router.navigateByUrl("/home");
  }
  


  sliderConfig = {
    autoplay: true,
    speed: 1000,
    delay: 3500,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    }
  };

  getAllTravels(){
    this.travelservice.getTravels().subscribe( travels => {
      this.travels = travels;
      console.log(travels);
    });
  }

  getRandomArbitrary(min, max) {
  return  Math.floor(Math.random() * (max - min)) + min;
 }

  getDataTravel(){
    let id = this.travelservice.getCurrentTravelId();
    this.travelservice.getTravelId(id).subscribe( travels2 => {
      this.travels = Array.of(travels2);
        if(travels2.img1==null && travels2.img2==null && travels2.img3==null){
          travels2.img1 = "null"+this.getRandomArbitrary(1, 7);
          travels2.img2 = "null"+this.getRandomArbitrary(1, 7);
          travels2.img3 = "null"+this.getRandomArbitrary(1, 7);
        }
    });
  }

  deleteTravel(id: number){
    let ionBody = document.getElementById("travelInfoContainer");
    let ionBody2 = document.getElementById("moreContent");
    this.travelservice.deleteTravel(id).subscribe( () => {
      this.router.navigateByUrl("/home");
      this.getAllTravels();
      ionBody.classList.remove("prueba");
      ionBody2.classList.remove("prueba");
      console.log("Se ha borrado el registro con el id " + id);
    });
  };

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
      this.travelservice.updateTravel(travel)
        .subscribe((res) => {
          this.closePopUp();
          this.router.navigateByUrl("/home");
        });
    }
  }

  TransitionPagePanUp(ev) {
    console.log("swipe");
    let e = document.getElementById("cloudContent");
    e.style.transition  = "all 1s";
    e.style.transform = "translateY(-100%)";
    setTimeout(function() {
      const home = document.getElementById("back");
      home.classList.add('animate__animated');
      home.classList.add('animate__fadeIn');
      home.style.visibility = "visible";
    }, 1000);
    setTimeout(function() {
      const home = document.getElementById("back");
      home.classList.remove('animate__fadeIn');
      home.classList.add('animate__bounce');
      home.classList.add('animate__infinite');
    }, 1250);
    setTimeout(function() {
      const delet = document.getElementById("delete");
      delet.classList.add('animate__animated');
      delet.classList.add('animate__fadeIn');
      delet.style.visibility = "visible";
    }, 1150);
    setTimeout(function() {
      const ch1 = document.getElementById("ch1");
      ch1.classList.add('animate__animated');
      ch1.classList.add('animate__fadeIn');
      ch1.style.visibility = "visible";
    }, 1300);
    setTimeout(function() {
      const cpds = document.getElementById("cpds");
      cpds.classList.add('animate__animated');
      cpds.classList.add('animate__fadeIn');
      cpds.style.visibility = "visible";
    }, 1450);
    setTimeout(function() {
      const update = document.getElementById("update");
      update.classList.add('animate__animated');
      update.classList.add('animate__fadeIn');
      update.style.visibility = "visible";
    }, 1600);
  }

  TransitionPageBack() {
    console.log("swipe");
    let e = document.getElementById("cloudContent");
    e.style.transition  = "all 1s";
    e.style.transform = "translateY(0)";
  }

  openPopUp() {
    let ionBody = document.getElementById("travelInfoContainer");
    let ionBody2 = document.getElementById("moreContent");
    let popup = document.getElementById("popup");
    popup.classList.add("active");
    popup.style.transition  = "all .5s";
    ionBody.classList.add("prueba");
    ionBody2.classList.add("prueba");
  }

  closePopUp() {
    let ionBody = document.getElementById("travelInfoContainer");
    let ionBody2 = document.getElementById("moreContent");
    let popup = document.getElementById("popup");
    popup.classList.remove("active");
    ionBody.classList.remove("prueba");
    ionBody2.classList.remove("prueba");
  }

  openPopUp5() {
    let ionBody = document.getElementById("travelInfoContainer");
    let ionBody2 = document.getElementById("moreContent");
    let popup = document.getElementById("popup5");
    popup.classList.add("active");
    popup.style.transition  = "all .5s";
    ionBody.classList.add("prueba");
    ionBody2.classList.add("prueba");
  }

  closePopUp5() {
    let ionBody = document.getElementById("travelInfoContainer");
    let ionBody2 = document.getElementById("moreContent");
    let popup = document.getElementById("popup5");
    popup.classList.remove("active");
    ionBody.classList.remove("prueba");
    ionBody2.classList.remove("prueba");
  }
}
