#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(ReferralHero, NSObject)

RCT_EXTERN_METHOD(fetchReferralUserData: (RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)

@end