import React from 'react';
import ReactDOM from 'react-dom';
const credentials = {
    apiKey: '9b42aa995879ffacf0ab0ac2fa8b84fdfd09dbafcf8697750f130fcc7af5df08',
    username: 'AmLucky',
}
const AfricasTalking = require('africastalking')(credentials);
const sms = AfricasTalking.SMS;
function sendMessage(){
    const options = {
        to: '+2349045341885' ,
        message: 'Buy a Samsung S23 OR Z-flip 4 for affordable prices less than that of an iPhone 13 with clear cut cameras that will make your pictures look like film. Buy now!!!! ',
        //from: 'Oilserv',
    }
    sms.send(options)
    .then((response)=>{
        console.log(response)})
    .catch((err)=>{
        console.log(err)
    });
}
const element = <h1>OilservSMS</h1>
ReactDOM.render(element, document.getElementById('root'));
sendMessage();