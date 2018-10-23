import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {IntroComponent} from './intro/intro.component';
import {LikesComponent} from './likes/likes.component';
import {SearchComponent} from './search/search.component';
import {UserRoutingModule} from './user-routing.module';
import {UserPageComponent} from './user-page/user-page.component';
import {FeedComponent} from './feed/feed.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ContainerPostComponent} from './user-page/container-post/container-post.component';
import {CommentsComponent} from './comments/comments.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import { UserInfoSideComponent } from './user-info-side/user-info-side.component';
import { UserFollowsSideComponent } from './user-follows-side/user-follows-side.component';
import { UserGallerySideComponent } from './user-gallery-side/user-gallery-side.component';
import { LoginComponent } from '../security/login/login.component';
import { RegistrationComponent } from '../security/registration/registration.component';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule, MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {MatDialogModule} from '@angular/material';
import {UserComponent} from './user.component';
import { UserPlacesComponent } from './user-places/user-places.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {TranslateModule} from '@ngx-translate/core';
import {DialogChangeBackgroundImageComponent} from './intro/dialog-change-background-image/dialog-change-background-image.component';
import {GooglePlaceModule} from 'ngx-google-places-autocomplete';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    UserRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatToolbarModule,
    HttpClientModule,
    MatDialogModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatSelectModule,
    MatDatepickerModule,
    TranslateModule,
    GooglePlaceModule
  ],
  declarations: [
    UserComponent,
    FooterComponent,
    HeaderComponent,
    IntroComponent,
    SearchComponent,
    UserPageComponent,
    FeedComponent,
    ContainerPostComponent,
    LikesComponent,
    CommentsComponent,
    UserInfoSideComponent,
    UserFollowsSideComponent,
    UserGallerySideComponent,
    UserPlacesComponent,
    SettingsPageComponent,
    UserPlacesComponent,
    DialogChangeBackgroundImageComponent
  ]
})
export class UserModule {
}