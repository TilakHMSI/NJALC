import { HomePage as MainPage_HomePage } from './MainPage/HomePage.component';
import { LoginScreen as LoginScreen_LoginScreen } from './LoginScreen/LoginScreen.component';
import { HomePage as Home_HomePage } from './Home/HomePage.component';
import { Default as Home_Default_Default } from './Home/Default/Default.component';
import { WarningmessageGrey as WarningmessageGrey_WarningmessageGrey } from './WarningmessageGrey/WarningmessageGrey.component';
import { WarningmessageRed as WarningmessageRed_WarningmessageRed } from './WarningmessageRed/WarningmessageRed.component';

export const title = "";

export const magicGenCmpsHash = {               WarningmessageGrey_WarningmessageGrey:WarningmessageGrey_WarningmessageGrey,
              WarningmessageRed_WarningmessageRed:WarningmessageRed_WarningmessageRed,
                      MainPage_HomePage:MainPage_HomePage,
              LoginScreen_LoginScreen:LoginScreen_LoginScreen,
              Home_HomePage:Home_HomePage,
              Home_Default_Default:Home_Default_Default,
       
};

export const magicGenComponents = [
	WarningmessageGrey_WarningmessageGrey,
	WarningmessageRed_WarningmessageRed,
	MainPage_HomePage,
	LoginScreen_LoginScreen,
	Home_HomePage,
	Home_Default_Default 
];


export const LazyLoadModulesMap = {};