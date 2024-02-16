import { ComponentFixture, TestBed } from '@angular/core/testing';
import PostDetailComponent from './post-detail.component';
import { BlogService } from '../../services/blog.service';
import { Observable, of } from 'rxjs';
import { Post } from '../../types/post.type';

class MockBlogService {
  getSinglePost(slug: string): Observable<Post> {
    return of(mockPost as Post);
  }
}

describe('PostDetailComponent', () => {
  let component: PostDetailComponent;
  let fixture: ComponentFixture<PostDetailComponent>;
  let blogService: BlogService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostDetailComponent],
      providers: [
        { provide: BlogService, useClass: MockBlogService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetailComponent);
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
    html: '<p>Are you eager to create your own Hashnode-powered blog using <strong><em>Angular Headless Hashnode</em></strong> but unsure where to begin? Fear not! In this step-by-step guide, I\'ll walk you through the process of forking the project, deploying it on Netlify, and customizing it to match your Hashnode blog. Let\'s make the journey from forking to deployment as seamless as possible!</p>\n<h3 id="heading-forking-the-project"><strong>Forking the Project</strong></h3>\n<ol>\n<li><p><strong>Visit the Repository</strong>: Head over to the <a target="_blank" href="https://github.com/monacodelisa/Angular-Headless-Hashnode">Angular Headless Hashnode repository on GitHub</a>.</p>\n</li>\n<li><p><strong>Fork the Project</strong>: Click on the "Fork" button in the top right corner. This creates a copy of the project in your GitHub account.</p>\n</li>\n<li><p><strong>Update GraphQL URL</strong>: Point the query to your blog\'s</p>\n</li>\n</ol>\n<h3 id="heading-project-status-angular-v16-and-netlify-deployment"><strong>Project Status: Angular v16 and Netlify Deployment</strong></h3>\n<p><strong>Current Project State: Angular v16 Compatibility with Netlify</strong></p>\n<p>As of now, the <em>Angular Headless Hashnode</em> Project is at an exciting juncture, with Angular v16 being the first version compatible with Netlify deployment. This is a significant step in the project\'s evolution, showcasing its commitment to user-friendly experiences. When deploying your blog on Netlify, keep in mind that this functionality is specifically tailored to the v16 release.</p>\n<p><strong>Post Limitation: Retrieving the First Ten Posts</strong></p>\n<p>Additionally, at this early stage, the project has a limitation where only the first ten posts from your Hashnode blog are retrieved. This restriction is a temporary aspect of the current implementation. As the project continues to grow and evolve, more features are actively being implemented to enhance functionality, scalability, and compatibility with different Angular versions.</p>\n<h3 id="heading-deploying-on-netlify-angular-v16"><strong>Deploying on Netlify (angular-v16)</strong></h3>\n<ol>\n<li><p><strong>Netlify Account Setup</strong>: If you don\'t have a Netlify account, sign up for one. It\'s free and straightforward.</p>\n</li>\n<li><p><strong>Create a New Site</strong>: Once logged into Netlify, click on the "New site from Git" button. Select your forked repository.</p>\n<p> Netlify automatically detects your project settings and starts the build process.</p>\n</li>\n<li><p><strong>Adjust Settings</strong>: While your project is building, navigate to the "Settings" tab on Netlify. Here, you can customize your site name, domain, and other deployment settings.</p>\n</li>\n<li><p><strong>Deploy Your Site</strong>: Click on the "Deploy site" button, and within moments, your Angular Headless Hashnode blog will be live!</p>\n</li>\n</ol>\n<h3 id="heading-your-angular-headless-hashnode-blog-is-live"><strong>Your Angular Headless Hashnode Blog is Live!</strong></h3>\n<p>Congratulations! Your Angular Headless Hashnode blog is now live on Netlify. It\'s incredibly easy to set up, and with each new version, the process remains consistent. Feel free to explore more features and functionalities as you continue to build and customize your blog.</p>\n<p>This guide aims to make the process of using the Angular Headless Hashnode Project effortless for users. Whether you\'re a seasoned developer or new to the world of Angular, this project provides a user-friendly pathway to create and deploy your Hashnode-powered blog. Enjoy the journey of expressing yourself through your blog, and happy coding! 🚀</p>\n<h3 id="heading-scaling-with-future-versions"><strong>Scaling with Future Versions</strong></h3>\n<p><strong>Stay Updated</strong>: as the <em>Angular Headless Hashnode</em> Project evolves! It\'s an open-source initiative where developers actively enhance compatibility, address limitations, and introduce features. As you explore Angular v16 and Netlify, anticipate continuous improvements. Want something faster? <a target="_blank" href="https://github.com/monacodelisa/Angular-Headless-Hashnode">Contribute</a>! Your input shapes the future of this dynamic project.</p>\n'
  },
  publishedAt: '2024-02-13T14:55:14.543Z',
};
