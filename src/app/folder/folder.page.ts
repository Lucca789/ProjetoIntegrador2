import { Component, OnInit } from '@angular/core';
import { Folders, FolderService } from 'src/services/Folders.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class Folder implements OnInit {
folder: Folders [];

  constructor(private service:FolderService) { }

  ngOnInit() {
    this.service.getAll().subscribe(Response =>{
      this.folder = Response;
    })
  }  
}
