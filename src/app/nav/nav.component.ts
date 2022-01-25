import {Component} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {MenuItem} from 'primeng/api';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent {

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches),
            shareReplay()
        );

    constructor(private breakpointObserver: BreakpointObserver) {
    }

    items: MenuItem[] = [];
    menus: MenuItem[] = [];

    ngOnInit() {
        this.items = [
            {label: 'Home', icon: 'pi pi-pw', routerLink: '/'},
            {label: 'About', icon: 'pi pi-pw', routerLink: '/about'},
            {label: 'Contact', icon: 'pi pi-pw', routerLink: '/contact'},
            {
                label: 'File',
                icon: 'pi pi-pw',
                items: [{
                    label: 'New',
                    icon: 'pi pi-fw pi-plus',
                    items: [
                        {label: 'User', icon: 'pi pi-fw pi-user-plus'},
                        {label: 'Filter', icon: 'pi pi-fw pi-filter'}
                    ]
                },
                    {label: 'Open', icon: 'pi pi-fw pi-external-link'},
                    {separator: true},
                    {label: 'Quit', icon: 'pi pi-fw pi-times'}
                ]
            },
            {
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {label: 'Delete', icon: 'pi pi-fw pi-trash'},
                    {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
                ]
            },
            {
                label: 'Help',
                icon: 'pi pi-fw pi-question',
                items: [
                    {
                        label: 'Contents',
                        icon: 'pi pi-pi pi-bars'
                    },
                    {
                        label: 'Search',
                        icon: 'pi pi-pi pi-search',
                        items: [
                            {
                                label: 'Text',
                                items: [
                                    {
                                        label: 'Workspace'
                                    }
                                ]
                            },
                            {
                                label: 'User',
                                icon: 'pi pi-fw pi-file',
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Actions',
                icon: 'pi pi-fw pi-cog',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-fw pi-pencil',
                        items: [
                            {label: 'Save', icon: 'pi pi-fw pi-save'},
                            {label: 'Update', icon: 'pi pi-fw pi-save'},
                        ]
                    },
                    {
                        label: 'Other',
                        icon: 'pi pi-fw pi-tags',
                        items: [
                            {label: 'Delete', icon: 'pi pi-fw pi-minus'}
                        ]
                    }
                ]
            }
        ];

        this.menus = [{
            label: 'File',
            items: [
                {label: 'New', icon: 'pi pi-fw pi-plus'},
                {label: 'Download', icon: 'pi pi-fw pi-download'}
            ]
        },
            {
                label: 'Edit',
                items: [
                    {label: 'Add User', icon: 'pi pi-fw pi-user-plus'},
                    {label: 'Remove User', icon: 'pi pi-fw pi-user-minus'}
                ]
            }];
    }


}
