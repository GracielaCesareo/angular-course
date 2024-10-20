import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent {
  public newAppointmentTitle: string = '';
  public newAppointemntDate: Date = new Date();

  public appointments: Appointment[] = []

  public addNewAppointment(): void {
    if(this.newAppointmentTitle.length && this.newAppointemntDate) {

      let newAppointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointemntDate
      }

      this.appointments.push(newAppointment);
      console.log(this.appointments)
      this.resetForm();

    }
  }

  public resetForm(): void {
    this.newAppointmentTitle = '';
    this.newAppointemntDate = new Date();
  }

}
