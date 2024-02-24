import { Component, OnInit, inject } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-follow-dialog',
  standalone: true,
  imports: [],
  templateUrl: './follow-dialog.component.html',
  styleUrl: './follow-dialog.component.scss'
})
export class FollowDialogComponent implements OnInit {
  modalService: ModalService = inject(ModalService);
  blogService: BlogService = inject(BlogService);

  ngOnInit(): void {
    // to add blog image (favicon) query
  }
}
