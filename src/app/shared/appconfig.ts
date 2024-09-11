import { InjectionToken } from "@angular/core";
export interface AppConfig{
    experimenatilService:boolean
}
export const APP_CONFIG=new InjectionToken<AppConfig>('app.config',{
    providedIn:'root',
    factory:()=>({
        experimenatilService:true  
    })
})