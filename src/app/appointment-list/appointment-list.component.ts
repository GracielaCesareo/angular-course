import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent implements OnInit{
  public newAppointmentTitle: string = '';
  public newAppointmentDate: Date = new Date();

  public appointments: Appointment[] = []

  ngOnInit() {
     this.loadAppointments();
  }

  public addNewAppointment(): void {
    if(this.newAppointmentTitle.length && this.newAppointmentDate) {

      // Model new item
      let newAppointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      }

       // Add item to array
      this.appointments.push(newAppointment);
      localStorage.setItem('appointments', JSON.stringify(this.appointments))
      this.resetForm();

    }
  }

  // Reset form
  public resetForm(): void {
    this.newAppointmentTitle = '';
    this.newAppointmentDate = new Date();
  }

  // Delete item from array
  public deleteAppointment(index: number): void  {
    this.appointments.slice(index, 1)
    localStorage.setItem('appointments', JSON.stringify(this.appointments))
  }

  // Load items array
  public loadAppointments() {
    let savedAppointments = localStorage.getItem('appointments')
    this.appointments = savedAppointments ? JSON.parse(savedAppointments) : []
    return this.appointments
  }

}
