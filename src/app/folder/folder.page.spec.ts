import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { Folder } from './folder.page';

describe('FolderPage', () => {
  let component: Folder;
  let fixture: ComponentFixture<Folder>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Folder ],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(Folder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
