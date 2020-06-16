import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';  
import { catchError, map } from 'rxjs/operators';  
import { PdfUploadService } from  './pdf-upload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-app';
  @ViewChild("fileUpload", {static: false}) fileUpload: ElementRef;files  = [];  
    constructor(private uploadService: PdfUploadService) { }

    uploadFile(file) {  
	    const formData = new FormData();  
	    formData.append('file', file.data);  
	}

	// private uploadFiles() {  
 //    this.fileUpload.nativeElement.value = '';  
 //    this.files.forEach(file => {  
 //      this.uploadFile(file);  
 //    });  
	// }

	onClick() {  
    const fileUpload = this.fileUpload.nativeElement;
    fileUpload.onchange = () => {  
	    for (let index = 0; index < fileUpload.files.length; index++)  
	    {  
	     const file = fileUpload.files[index];  
	     this.files.push({ data: file, inProgress: false, progress: 0});  
	    }  

      // this.uploadFiles();  
    };  
    
    fileUpload.click();  
	}
}