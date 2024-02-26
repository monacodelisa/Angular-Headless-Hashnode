import { ComponentFixture, TestBed } from '@angular/core/testing';
import PostDetailsComponent from './post-details.component';
import { BlogService } from '../../services/blog.service';
import { Observable, of } from 'rxjs';
import { Post } from '../../models/post';

class MockBlogService {
  getSinglePost(slug: string): Observable<Post> {
    return of(mockPost as Post);
  }
}

describe('PostDetailComponent', () => {
  let component: PostDetailsComponent;
  let fixture: ComponentFixture<PostDetailsComponent>;
  let blogService: BlogService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostDetailsComponent],
      providers: [
        { provide: BlogService, useClass: MockBlogService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetailsComponent);
    component = fixture.componentInstance;
    blogService = TestBed.inject(BlogService);
    component.slug = 'test-slug';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch a single post on init', () => {
    const spy = spyOn(blogService, 'getSinglePost').and.callThrough();
    component.ngOnInit();
    expect(spy).toHaveBeenCalledWith('test-slug');
  });

  it('should have a defined observable post$', () => {
    component.ngOnInit();
    component.post$.subscribe((post) => {
      expect(post).toBeDefined();
      expect(post.id).toEqual('65cb82d27994f52be32832f6');
      expect(post.title).toEqual('Test Post');
    });
  });
});

const mockPost = {
  id: '65cb82d27994f52be32832f6',
  slug: 'how-to-use-angular-headless-hashnode',
  title: 'Test Post',
  readTimeInMinutes: 3,
  tags: [
    {
      name: 'headless cms',
      __typename: 'Tag',
    }
  ],
  author: {
    name: '{{ MonaCodeLisa }}',
    profilePicture:
      'https://cdn.hashnode.com/res/hashnode/image/upload/v1675157398687/VEx3KEW8M.png',
    socialMediaLinks: {
      twitter: 'https://twitter.com/monacodelisa',
      youtube: 'https://www.youtube.com/@MonaCodeLisa_'
    }
  },
  coverImage: {
    url: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1707836059939/3a19bc4b-4361-4b35-ad6e-eeec50371a96.jpeg'
  },
  content: {
    html: '<p>Test html</p>'
  },
  publishedAt: '2024-02-13T14:55:14.543Z',
};
