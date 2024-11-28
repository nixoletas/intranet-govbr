import { AfterViewInit, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'br-weather',
  standalone: true,
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  providers: []
})
export class WeatherComponent implements AfterViewInit {
  isLoading = true;
  
  url = environment.ASSETS_WEATHER;
  weatherData: { 
    time?: string;
    temperature?: number;
    humidity?: number;
    apparentTemperature?: number;
    rain?: number;
    windSpeed?: number;
  } = {};
  
  constructor(private http: HttpClient) {}
  
  ngAfterViewInit(): void {
    this.fetchWeather().subscribe((data) => {
      const current = data.current;
      this.weatherData = {
        time: this.formatDateToBrazilian(current.time),
        temperature: current.temperature_2m,
        humidity: current.relative_humidity_2m,
        apparentTemperature: current.apparent_temperature,
        rain: current.rain,
        windSpeed: current.wind_speed_10m
      };
      this.isLoading = false;
    });
  }
  
  fetchWeather(): Observable<any> {
    return this.http.get(`${this.url}`);
  }
  
  formatDateToBrazilian(dateString: string): string {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');

    const daysOfWeek = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const dayOfWeek = daysOfWeek[date.getDay()];

    return `${day}/${month} (${dayOfWeek})`;
  }
}
