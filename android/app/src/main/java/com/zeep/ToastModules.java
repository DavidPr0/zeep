package com.zeep;

import android.widget.Toast;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.HashMap;
import java.util.Map;

public class ToastModules extends ReactContextBaseJavaModule {
  private ReactApplicationContext context;
  public ToastModules(ReactApplicationContext reactApplicationContext) {
    super(reactApplicationContext);
    context = reactApplicationContext;
  }

  @Override
  public String getName() {
    return "ToastModules";
  }

  @ReactMethod
  public void show(String message) {
    Toast toast = Toast.makeText(getReactApplicationContext(), message, Toast.LENGTH_LONG);
    toast.show();
  }

  // @Override
  // public Map<String, Object> getConstants() {
  //   final Map<String, Object> constants = new HashMap<String, Object>();

  //   constants.put('APP_NAME', context.getString{R.string.app_name});
  //   constants.put('ENV', BuildConfig.ENV);
  //   constants.put('BASE_URL', BuildConfig.BASE_URL);
  //   return constants;
  // }
}
