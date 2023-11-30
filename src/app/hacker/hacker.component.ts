import { Component, OnInit, ViewChild } from '@angular/core';
import { HackerService } from '../hacker.service';
import { StoryModel } from '../storyModel';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-hacker',
  templateUrl: './hacker.component.html',
  styleUrls: ['./hacker.component.scss']
})
export class HackerComponent implements OnInit {
  storyData: StoryModel[] = [];
  displayedColumns: string[] = ['Title', 'NewsArticle'];
  dataSource!:MatTableDataSource<StoryModel>;
  pageSizeOptions = [5, 10, 25, 100];
  pageSize = 5; 
  pageNumber = 1;
  loading=true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private hackerService: HackerService) {}

  ngOnInit(): void {
    this.BindStory();
  }

  BindStory() {
    //Bind Stories
    this.hackerService.getStoryData().subscribe(data => {
      this.storyData = data;
      this.dataSource =new MatTableDataSource<StoryModel>(this.storyData);
      this.dataSource.paginator = this.paginator;
      this.loading=false;
    });
  }
//When page index is changed by data
  onPageChange(event: any) {
    this.pageNumber = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.BindStory();
  }
//Search data on the basis of text provided in input box from UI  
  applyFilter(event: Event) {
    const filterValue=(event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  //Open URL in new browser tab/window
  getComplteURL(url:string): string {
    if(url.startsWith('http')|| url.startsWith('https')){
      return url;
    }
    else
    {
      return '';
    }
  }
}
