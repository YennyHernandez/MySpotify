import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { TracksPageComponent } from './tracks-page.component';
import { TracksModule } from '@modules/tracks/tracks.module';

describe('TracksPageComponent', () => {
  let component: TracksPageComponent;
  let fixture: ComponentFixture<TracksPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, TracksModule],
      declarations: [ TracksPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TracksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
