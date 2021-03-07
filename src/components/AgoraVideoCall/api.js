import axios from 'axios';
import { SERVER_API_URL } from '../../agora.config.js';


export const generateToken = async(cname, uid, attendee) => {
  const url = `${SERVER_API_URL}/api/token?cname=${cname}&uid=${uid}&attendee=${attendee}`;
  const response = await axios.get(url);
  return response.data;

}

export const startRecording = async (cname, uid, ctype, token) => {
  const url = `${SERVER_API_URL}/api/start?cname=${cname}&uid=${uid}&ctype=${ctype}&token=${token}`;
  const response = await axios.get(url);
  return response;
}


export const stopRecording = async (cname, uid, resid, sid) => {
  const url = `${SERVER_API_URL}/api/stop?cname=${cname}&uid=${uid}&resid=${resid}&sid=${sid}`;
  const response = await axios.get(url);
  return response; 
}