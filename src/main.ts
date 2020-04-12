import { enableProdMode } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { AppModule } from './app/app.module'
import { environment } from './environments/environment'
import Amplify, { Auth } from 'aws-amplify';
Amplify.configure({
  Auth: {
/*    // REQUIRED - Amazon Cognito Identity Pool ID
    identityPoolId: 'XX-XXXX-X:XXXXXXXX-XXXX-1234-abcd-1234567890ab',*/
    // REQUIRED - Amazon Cognito Region
    region: 'eu-west-1',
    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: 'eu-west-1_LHJ9EYsuJ',
    // OPTIONAL - Amazon Cognito Web Client ID
    userPoolWebClientId: '70ajdoa2ccvck729ai69dofevt',
  }
});

if (environment.production) {
  enableProdMode()
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err))
