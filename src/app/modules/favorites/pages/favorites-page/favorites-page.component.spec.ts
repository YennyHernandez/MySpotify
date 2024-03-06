import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavoritesModule } from '@modules/favorites/favorites.module';
import { SharedModule } from '@shared/shared.module';

import { FavoritesPageComponent } from './favorites-page.component';

describe('FavoritesPageComponent', () => {
  let component: FavoritesPageComponent;
  let fixture: ComponentFixture<FavoritesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritesPageComponent],
      imports: [ SharedModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoritesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
