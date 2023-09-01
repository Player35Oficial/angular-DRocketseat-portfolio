import { Component } from '@angular/core';
import {
  faLinkedinIn,
  faGithub,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  faGlobe,
  faEnvelope,
  faBriefcase,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-cards',
  templateUrl: './user-cards.component.html',
  styleUrls: ['./user-cards.component.css'],
})
export class UserCardsComponent {
  faLinkedin = faLinkedinIn;
  faGithub = faGithub;
  faTwitter = faTwitter;
  faGlobe = faGlobe;
  faEnvelope = faEnvelope;
  faBriefcase = faBriefcase;
  faLocationDot = faLocationDot;

  tecnologias = [
    'Javascript',
    'ReactJS',
    'NodeJS',
    'Git',
    'Github',
    'CSS',
    'Angular',
  ];

  experiencias = [
    {
      company: 'Centro Universitário Adventista de São Paulo (UNASP-SP) ',
      period: '2022 - Atualmente',
      position: 'Desenvolvedor Freelance',
    },
    {
      company: 'SENAI "Ary Torres" ',
      period: '2021 - 2023',
      position: 'Jovem Aprendiz',
    },
  ];

  educacao = [
    {
      school: 'Centro Universitário Adventista de São Paulo (UNASP-SP)',
      period: '2022 - 2024',
      course: 'Análise e Desenvolvimento de Sistemas',
    },
    {
      school: 'SENAI "Ary Torres"',
      period: '2021 - 2023',
      course: 'Técnico em Eletroeletrônica',
    },
  ];
}
