package com.referralherosdk;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;

public class ReferralHero extends ReactContextBaseJavaModule {

  public ReferralHero(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  public String getName() {
    return "ReferralHero";
  }

  @ReactMethod
  public void fetchReferralUserData(Promise promise) {
    try {
      // Import your existing JavaScript function's logic here.
      String data = fetchReferralUserData();
      promise.resolve(data);
    } catch (Exception e) {
      promise.reject("API_ERROR", e.getMessage());
    }
  }

  // Add any other native methods you need here.
}
