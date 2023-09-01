import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css'],
})
export class AnnouncementsComponent {
  AnnounceArray: any[] = [];

  title: string = '';
  description: string = '';
  publish_date: string = '';
  course: number = 0; // Initialize with a default course ID
  department: number = 0; // Initialize with a default department ID

  currentannouncementID = '';

  constructor(private http: HttpClient) {
    this.getAllAnnounce();
  }

  saveRecords() {
    let bodyData = {
      title: this.title,
      description: this.description,
      publish_date: this.publish_date,
      course: this.course, // Include course ID
      department: this.department, // Include department ID
    };

    this.http.post('http://127.0.0.1:8000/announcements/create', bodyData).subscribe((res: any) => {
      console.log('Getting the ID', res);
      alert('Announcement Registered Successfully');
      this.getAllAnnounce();
      this.title = '';
      this.description = '';
      this.publish_date = '';
      this.course = 0; // Reset course ID after submission
      this.department = 0; // Reset department ID after submission
    });
  }

  getAllAnnounce() {
    this.http.get('http://127.0.0.1:8000/announcements').subscribe((res: any) => {
      console.log(res);
      this.AnnounceArray = res;
    });
  }

  setUpdate(data: any) {
    this.title = data.title;
    this.description = data.description;
    this.publish_date = data.publish_date;
    this.course = data.course; // Populate course ID
    this.department = data.department; // Populate department ID
    this.currentannouncementID = data.announcement_id;
  }

  UpdateRecords() {
    let bodyData = {
      title: this.title,
      description: this.description,
      publish_date: this.publish_date,
      course: this.course, // Include course ID
      department: this.department, // Include department ID
    };

    this.http.put(`http://127.0.0.1:8000/announcements/update/${this.currentannouncementID}`, bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      alert('Announcement Registered Updated');
      this.title = '';
      this.description = '';
      this.publish_date = '';
      this.course = 0; // Reset course ID after update
      this.department = 0; // Reset department ID after update
      this.getAllAnnounce();
    });
  }

  setDelete(data: any) {
    this.http.delete(`http://127.0.0.1:8000/announcements/delete/${data.announcement_id}`).subscribe((resultData: any) => {
      console.log(resultData);
      alert('Announcement Deleted');
      this.getAllAnnounce();
    });
  }
}
