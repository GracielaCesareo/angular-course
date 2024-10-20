import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent {
  public newAppointmentTitle: string = '';
  public newAppointmentDate: Date = new Date();

  public appointments: Appointment[] = []

  public addNewAppointment(): void {
    if(this.newAppointmentTitle.length && this.newAppointmentDate) {

      let newAppointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      }

      this.appointments.push(newAppointment);
      console.log(this.appointments)
      this.resetForm();

    }
  }

  public resetForm(): void {
    this.newAppointmentTitle = '';
    this.newAppointmentDate = new Date();
  }

}
