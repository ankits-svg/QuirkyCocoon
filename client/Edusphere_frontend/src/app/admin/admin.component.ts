import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  name: string = '';
  email: string = '';
  contact_number: string = '';

  constructor(private router: Router ){}

  saveRecords() {
    // You can add your logic to save the admin data here.
    // For now, we'll just display the input data in the console.
    // console.log('Name:', this.name);
    // console.log('Email:', this.email);
    // console.log('Contact Number:', this.contact_number);

    // You can also add logic to send this data to a server if needed.

    if(this.name==='ankit' && this.email==='a@gmail.com' && this.contact_number==='1234567890'){
      this.router.navigate(['/adminhome']);
      alert('Successfully Login!!')
      this.name=''
      this.email=''
      this.contact_number=''
    }else{
      alert('Credential is wrong!!')
      this.name=''
      this.email=''
      this.contact_number=''
    }
  }
}
