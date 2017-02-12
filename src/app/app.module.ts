/**
 * Created by texpe on 12/02/2017.
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Views

// Components
import { AppComponent } from './app.component';

// Controls
import { Controls } from '../controls';

// Providers
import { Providers } from '../providers';

// Pipes
import { Pipes } from '../pipes';

// Routes
import { ApplicationRoutes } from './routes';

@NgModule({
	declarations: [
		AppComponent,
		Pipes,
		Controls
	],
	imports     : [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule.forRoot(ApplicationRoutes, { useHash: true })
	],
	providers   : [ Providers ],
	bootstrap   : [ AppComponent ]
})
export class AppModule {
}