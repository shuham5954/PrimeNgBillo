import { Component } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import {  OnInit, signal } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { Tree } from 'primeng/tree';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.html',
  styleUrl: './admin.scss',
  imports: [DrawerModule, ButtonModule,Tree]
})
export class DrawerSizeDemo {
  temp:any = [
    /* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
        }
    ]
}]
    visible: boolean = false;
     files = signal<TreeNode[]>([]);

    selectedFile!: TreeNode;

    constructor() {}

    ngOnInit() {
        // this.nodeService.getFiles().then((data) => {

            this.files.set(this.temp);
        // });
    }
}