import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.css']
})
export class RicercaComponent {
  query: string;
  title = 'first-routed-app';
  obsCW: Observable<Object>;
  results: any;

  constructor(private http: HttpClient) {}

  Token = '8db500fac7d0bc78a5615c92ddbfde5a';

  submit(query: HTMLInputElement): void {
    if (!query.value) {
      return;
    }
    this.query = query.value;

    this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.query}&appid=${this.Token}&units=metric&lang=it`).subscribe(data => {
      this.results = data;
    });
  }

  getWeatherImage(icon: string): string {
    const group1 = ['01d', '02d', '03d', '01n', '02n', '03n'];
    const group2 = ['04d', '04n', '09d', '09n', '10d', '10n', '11d', '11n', '13d', '13n', '50d', '50n'];

    if (group1.includes(icon)) {
      return 'https://png.pngtree.com/png-clipart/20220306/original/pngtree-a-man-who-sweats-outdoors-in-the-summer-png-image_7402501.png';
    } else if (group2.includes(icon)) {
      return 'https://img.freepik.com/vetores-premium/casal-de-amor-feliz-caminhando-ao-ar-livre-no-inverno-homem-e-mulher-passeando-na-rua-de-maos-dadas-pessoas-romanticas-namorando-em-clima-frio-ilustracao-em-vetor-grafico-plana-isolada-no-fundo-branco_198278-20147.jpg';
    } else {
      return `http://openweathermap.org/img/wn/${icon}@4x.png`; // Default weather icon
    }
  }

  getDressAdvice(icon: string): string {
    const group1 = ['01d', '02d', '03d', '01n', '02n', '03n'];
    const group2 = ['04d', '04n', '09d', '09n', '10d', '10n', '11d', '11n', '13d', '13n', '50d', '50n'];

    if (group1.includes(icon)) {
      return 'VESTITI LEGGERO!!!';
    } else if (group2.includes(icon)) {
      return 'VESTITI PESANTE!!!';
    } else {
      return '';
    }
  }
}
