import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  providers: [PostService]
})
export class PostComponent implements OnInit {
  public titulo: string;
  public posts: Array<Post>;
  public total: number;
  constructor(private _postService: PostService) 
  {
    this.titulo="Publicaciones";
  }

  ngOnInit() {
    this.getListado();
  }
  getListado()
  {
    this._postService.listar().subscribe
    (
      response=>
      {
        this.posts =response;
      },
      error=>
      {
        console.log("error en la carga");
      }
    );
  }
}
