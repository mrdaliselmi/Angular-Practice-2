import { Component, NgZone, OnInit } from '@angular/core';
import { User, UsersService } from '../users.service';
import * as ChartJs from 'chart.js/auto';
@Component({
  selector: 'app-rh',
  templateUrl: './rh.component.html',
  styleUrls: ['./rh.component.css'],
})
export class RhComponent implements OnInit {
  oddUsers: User[];
  evenUsers: User[];
  chart: any;
  constructor(private userService: UsersService, private ngZone: NgZone) {
    this.oddUsers = this.userService.getOddOrEven(true);
    this.evenUsers = this.userService.getOddOrEven();
  }

  ngOnInit(): void {
    this.createChart();
  }
  addUser(list: User[], newUser: string) {
    this.userService.addUser(list, newUser);
    this.updateChart();
  }

  getData() {
    return [
      { users: 'Workers', count: this.oddUsers.length },
      { users: 'Boss', count: this.evenUsers.length },
    ];
  }
  createChart() {
    const data = this.getData();
    this.ngZone.runOutsideAngular(() => {
      this.chart = new ChartJs.Chart('MyChart', {
        type: 'bar',
        data: {
          labels: data.map((row) => row.users),
          datasets: [
            {
              label: 'Entreprise stats',
              data: data.map((row) => row.count),
            },
          ],
        },
      });
    });
  }

  updateChart() {
    const data = this.getData();
    this.ngZone.run(() => {
      this.chart.data.labels = data.map((row) => row.users);
      this.chart.data.datasets[0].data = data.map((row) => row.count);
      this.chart.update();
    });
  }
}
