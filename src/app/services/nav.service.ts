import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Event, Router, RouterEvent } from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  activeLink: BehaviorSubject<any> = new BehaviorSubject<any>({});
  links: any[] = [
    {
      href: "/admin/wallets",
      name: "Wallets",
      icon: "../../../assets/svgs/wallets.svg"
    },
    {
      href: "/admin/ledgers",
      name: "Ledgers",
      icon: "../../../assets/svgs/ledgers.svg"
    },
    {
      href: "/admin/apis",
      name: "API's",
      icon: "../../../assets/svgs/apis.svg"
    },
    {
      href: "/admin/pay",
      name: "Pay ins & Payouts",
      icon: "../../../assets/svgs/pay.svg"
    },
    {
      href: "/admin/email-settings",
      name: "Email Settings",
      icon: "../../../assets/svgs/email-settings.svg"
    },
    {
      href: "/admin/urls",
      name: "URLs",
      icon: "../../../assets/svgs/urls.svg"
    }
  ]

  constructor(private router: Router) {
    this.router.events.pipe(filter((e: any) => {
      return e?.routerEvent?.type === 1;
    })).subscribe(() => {
      const parsedUrl = new URL(window.location.href);
      // console.log(parsedUrl.pathname);
      // console.log(this.links.find(l => l.href === parsedUrl.pathname));
      this.activeLink.next(this.links.find(l => l.href === parsedUrl.pathname));
    })
  }

  getLinks() {
    return [
      ...this.links
    ]
  }

  getActiveLink() {
    return this.activeLink.getValue();
  }
}
