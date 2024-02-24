import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowBlogComponent } from './follow-blog.component';

describe('FollowBlogComponent', () => {
  let component: FollowBlogComponent;
  let fixture: ComponentFixture<FollowBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FollowBlogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FollowBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
