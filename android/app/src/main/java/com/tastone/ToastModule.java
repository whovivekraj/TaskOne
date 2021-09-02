package com.tastone;

import android.widget.Toast;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class ToastModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;
    ToastModule(ReactApplicationContext context) {
        super(context);
        reactContext=context;
    }
    @ReactMethod
    public void show(String msg) {
        Toast.makeText(reactContext, "Hi"+msg, Toast.LENGTH_SHORT).show();
    }
    @NonNull
    @Override
    public String getName() {
        return "ToastModule";
    }
}
