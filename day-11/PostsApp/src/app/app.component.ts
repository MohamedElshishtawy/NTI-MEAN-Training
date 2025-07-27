import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostServiceService } from './services/post-service.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [PostServiceService]
})
export class AppComponent implements OnInit {
  posts: any[] = [];
  constructor (private postService: PostServiceService) {}
  getPosts() {
    this.postService.getPosts().subscribe({
      next: (result) => {
        this.posts = result;
      }, 
      error: (err) => {
        console.error('Error fetching posts:', err);
      }, 
      complete: () => {
        console.log('Posts fetched successfully');
      }
    })
  }

  ngOnInit(): void {
    this.getPosts();
  }

}
