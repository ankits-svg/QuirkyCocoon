import { Component, OnInit } from '@angular/core';
import { Announcement } from './announcement.model';
import { AnnouncementService } from './announcement.service';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css'],
})
export class AnnouncementsComponent implements OnInit {
  announcements: Announcement[] = [];
  newAnnouncement: Announcement = new Announcement();

  constructor(private announcementService: AnnouncementService) {}

  ngOnInit(): void {
    this.loadAnnouncements();
  }

  loadAnnouncements(): void {
    this.announcementService.getAnnouncements().subscribe((announcements) => {
      this.announcements = announcements;
    });
  }

  createAnnouncement(): void {
    this.announcementService.createAnnouncement(this.newAnnouncement).subscribe(() => {
      this.loadAnnouncements();
      this.newAnnouncement = new Announcement(); // Clear the form
    });
  }

  deleteAnnouncement(id: number): void {
    this.announcementService.deleteAnnouncement(id).subscribe(() => {
      this.loadAnnouncements();
    });
  }
}
