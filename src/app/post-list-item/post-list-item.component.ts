import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postCreated_at: any;
  @Input() postLoveIts: number;

  constructor() { }

  ngOnInit() {
  }

  onLove() {
    this.postLoveIts += 1;
  }

  onDontLove() {
    this.postLoveIts -= 1;
  }

}
