# react-native-introduction
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

## Release en android

Hay que configurar la ruta del keystore en gradle
```
cd android && ./gradlew assembleRelease
android/app/build/outputs/apk/app-release.apk
``` 
