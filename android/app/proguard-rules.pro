# Keep Capacitor / WebKit webview classes
-keep class com.getcapacitor.** { *; }
-keep class androidx.webkit.** { *; }

# Keep Android native interfaces
-keepclassmembers class * {
    @android.webkit.JavascriptInterface <methods>;
}
