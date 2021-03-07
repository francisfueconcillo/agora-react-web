# Agora-React for Web

Based on [OpenAgoraWeb-React](https://github.com/AgoraIO-Community/OpenAgoraWeb-React)


With enhancements on:

- Token generated and retrieved from a backend API 
- [Applied Best Practices](https://docs.agora.io/en/Video/multi_user_video_web?platform=Web)
- Recording feature [Agora-Recorder](https://github.com/francisfueconcillo/agora-recorder) (also the backend API)
## Prerequisites
- Agora Account
- Agora SDK Web v3.4.0
- React ^16.8.0

## Running Locally
- Install dependencies
```
npm i
```
- Run in development mode
```
npm run start
```
- Set `AGORA_APP_ID` and `SERVER_API_URL` Backend API URL at `src/agora.config.js`
```
export const AGORA_APP_ID = 'change this' // set your app id here
export const SERVER_API_URL = 'http://localhost:9000'
```
## Token Generations
- Token Generation is done by a backend API to protect the APP_CERT from being exposed in front-end
[See generateToken() in Backend API](https://github.com/francisfueconcillo/agora-recorder/blob/master/src/agora.js#L105)
- Token expiry is configurable from the Backend API

## Best Practices
[Reference](https://docs.agora.io/en/Video/multi_user_video_web?platform=Web)

See `src/components/AgoraVideoCall/index.js`
1. Enable dual-stream mode
```
...
this.client.enableDualStream(() => console.log("Dual-stream mode enabled")); 
...
```
2. Set the remote video stream type
```
...
this.client.setClientRole('audience', () => console.log("Client is audience."));
this.client.setRemoteVideoStreamType(this.localStream, 1);
...
```
3.  Set the video profile for the low-quality stream
```
...
this.localStream.setLowStreamParameter(this.getLowVideoProfile($.videoProfile));
...
```

4. Publish and subscribe to a stream
```
...
this.client.publish(this.localStream, err => {
  console.log("Publish local stream error: " + err);
})
...
rt.client.subscribe(stream, function (err) {
  console.log("Subscribe stream failed", err)
})
```
## Recording
- An additional icon is added on the Agora canvass for Recording function.
- NOTE: At least 2 people should be on channel to be able to record.
- Clicking on the Record Icon twice will stop the recorder.
[See Agora-Recorder](https://github.com/francisfueconcillo/agora-recorder)

