# react-native-salva
Breve introduccion a una aplicación con react native. Se ha utilizado el plugin para notificaciones push del siguiente repo:
https://github.com/zo0r/react-native-push-notification

## Instalación

``` 
npm install
react-native link
```

## Arrancar en dispositivo

``` 
react-native run-android
```

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

` android list avd `
` $ANDROID_HOME/emulator/emulator -avd Nexus_4_API_25 -avd Nexus_4_API_25 ` 


Debug en http://localhost:8081/debugger-ui

### ver puertos

sudo lsof -PiTCP -sTCP:LISTEN

## Release
``` bash
export MYAPP_RELEASE_STORE_PHRASE=luiscobol
export MYAPP_RELEASE_KEY_PHRASE=luiscobol
cd android && ./gradlew assembleRelease 
android/app/build/outputs/apk/app-release.apk
```
### Navigation

See https://medium.com/the-react-native-log/thousand-ways-to-navigate-in-react-native-f7a1e311a0e8