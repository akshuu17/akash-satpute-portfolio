import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.html',
  styleUrls: ['./certifications.scss']
})
export class CertificationsComponent {

  certifications = [
    {
      title: 'Analyzing Data with Power BI',
      issuer: 'Analytics Vidhya',
      date: 'April 05, 2026',
      link: 'https://courses.analyticsvidhya.com/certificates/2j8nnvrxd3'
    },
    {
      title: 'Introduction to Cloud',
      issuer: 'Analytics Vidhya',
      date: 'April 05, 2026',
      link: 'https://courses.analyticsvidhya.com/certificates/xaied89opg'
    },
    {
      title: 'Introduction to Python',
      issuer: 'Analytics Vidhya',
      date: '	March 29, 2026',
      link: 'https://courses.analyticsvidhya.com/certificates/akghpcxrdp'
    },
    {
      title: 'Excel: From Beginner to Expert',
      issuer: 'Analytics Vidhya',
      date: 'March 29, 2026',
      link: 'https://courses.analyticsvidhya.com/certificates/0ungtm8y71'
    },
    {
      title: 'How to Build an Image Generator Web App with Zero Coding',
      issuer: 'Analytics Vidhya',
      date: 'March 28, 2026',
      link: 'https://courses.analyticsvidhya.com/certificates/6tmiv9lza9'
    },
    {
      title: 'Model Deployment using FastAPI',
      issuer: 'Analytics Vidhya',
      date: 'March 27, 2026',
      link: 'https://courses.analyticsvidhya.com/certificates/g0pkz2kygz'
    },
    {
      title: 'AWS Cloud Architecting',
      issuer: 'AWS Academy',
      date: 'Oct 2025',
      link: 'https://www.credly.com/badges/bb20554c-ca02-41f0-89e2-25dbd0badc99'
    },
    {
      title: 'Google Skill Badges (20+)',
      issuer: 'Google Cloud Skills Boost',
      date: '2023-2026',
      link: 'https://www.skills.google/public_profiles/22953841-228e-4acd-834c-67f1514f9824'
    },
    {
      title: 'Google Analytics Certification',
      issuer: 'Google Skillshop',
      date: ' April 2026',
      link: 'https://skillshop.credential.net/10f31698-8336-48d1-88a7-c4941b79c7c4'
    }
  ];

  // 🔥 ALL BADGES AUTO
  badges = [
    9072201,9072272,10359840,10359919,10360703,
    10361650,10362283,10362889,10363316,10363424,
    10364102,10364766,10365056,10388115,10604849,
    10723530,10723637,10723678,10723780
  ].map((id, i) => ({
    name: `Google Cloud Badge ${i + 1}`,
    link: `https://www.skills.google/public_profiles/22953841-228e-4acd-834c-67f1514f9824/badges/${id}`
  }));

  openLink(url: string) {
    window.open(url, '_blank');
  }
}
