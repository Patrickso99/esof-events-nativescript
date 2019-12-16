const application = require("tns-core-modules/application");
const config = require("./config");
const mapAPI = config.google.map.provideAPIKey || "AIzaSyBFXKbdx5fREiMErwOQg1BUUhkpdcKcxf8";

// Google Maps SDK API KEY
if(application.ios)
{
    // GMSServices = GoogleMapsSDKServices
    GMSServices.provideAPIKey(mapAPI);
}

application.run({ moduleName: "app-root" });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
