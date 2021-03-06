import React from "react";
import * as Cookies from "js-cookie";
import AgoraRTC from 'agora-rtc-sdk'

import "./meeting.css";
import AgoraVideoCall from "../../components/AgoraVideoCall";
import { AGORA_APP_ID  } from "../../agora.config";

import { generateToken } from '../../components/AgoraVideoCall/api';
class Meeting extends React.Component {
  constructor(props) {
    super(props);
    this.videoProfile = Cookies.get("videoProfile").split(",")[0] || "480p_4";
    this.channel = Cookies.get("channel") || "test";
    this.transcode = Cookies.get("transcode") || "vp9";
    this.attendeeMode = Cookies.get("attendeeMode") || "video";
    this.baseMode = Cookies.get("baseMode") || "rtc";
    this.appId = AGORA_APP_ID;
    this.token = Cookies.get("token");
    this.uid = Cookies.get("uid");
    
    if (!this.appId) {
      return alert("Get App ID first!");
    }
  }

  render() {
    return (
      <div className="wrapper meeting">
        <div className="ag-header">
          <div className="ag-header-lead">
            <img
              className="header-logo"
              src={require("../../assets/images/ag-logo.png")}
              alt=""
            />
            <span>Agora-React</span>
          </div>
          <div className="ag-header-msg">
            UserID:&nbsp;<span id="uid">{this.uid}</span> |
            Channel:&nbsp;<span id="room-name">{this.channel}</span> | 
            Type:&nbsp;<span id="attendee-mode">{this.baseMode}</span>

          </div>
        </div>
        <div className="ag-main">
          <div className="ag-container">
            <AgoraVideoCall
              videoProfile={this.videoProfile}
              channel={this.channel}
              transcode={this.transcode}
              attendeeMode={this.attendeeMode}
              baseMode={this.baseMode}
              appId={this.appId}
              token={this.token}
              uid={this.uid}
            />
          </div>
        </div>
        <div className="ag-footer">
          <a className="ag-href" href="https://www.agora.io">
            <span>Powered By Agora</span>
          </a>
          <span>ReactJS Version: {React.version} | Agora SDK version: {AgoraRTC.VERSION}</span>
        </div>
      </div>
    );
  }
}

export default Meeting;
