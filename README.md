# Prueba de concepto para la aplicación salva en React Native

### Android

To use a specific play-service-gcm version, use in your android/app/build.gradle (change 8.1.0 for your version)
``` gradle
...

dependencies {
    ...

    compile project(':react-native-push-notification')
    compile ('com.google.android.gms:play-services-gcm:8.1.0') {
        force = true;
    }
}
```

Matar el proceso con

``` 
adb kill-server
adb start-server
```
Arrancar emulador

` emulator -avd Nexus_4_API_25 ` 


Debug en http://localhost:8081/debugger-ui

### Ver puertos
sudo lsof -PiTCP -sTCP:LISTEN

## Release
``` bash
export MYAPP_RELEASE_STORE_PHRASE=luiscobol
export MYAPP_RELEASE_KEY_PHRASE=luiscobol
cd android && ./gradlew assembleRelease 
android/app/build/outputs/apk/app-release.apk
```