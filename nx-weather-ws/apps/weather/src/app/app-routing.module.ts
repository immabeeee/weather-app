import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: "weather",
        loadChildren: () =>
            import("./weather/feature/weather-shell/weather-shell.module").then(
                (module) => module.WeatherShellModule
            ),
    },
    {
        path: '',
        redirectTo: 'weather',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),],
    exports: [RouterModule]
})
export class AppRoutingModule { }
