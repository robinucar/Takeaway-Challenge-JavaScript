const dotenv = require('dotenv')
dotenv.config()
console.log(dotenv)

class SendText {
    constructor(){
        this.accountSid = process.env.TWILIO_ACCOUNT_SID
        this.authToken = process.env.TWILIO_AUTH_TOKEN
    }
    send() {
        const client = require('twilio')(this.accountSid, this.authToken)
        const dt = new Date()
        dt.setHours(dt.getHours() + 1)
        client.messages.create({
            to: process.env.MY_NUMBER,
            from: '+17608914228',
            body: `Thank you! Your order was placed and will be delivered before ${dt}:`

        }).then((message) => console.log(message.sid))
    }
 
}

module.exports = SendText
const c = new SendText()
c.send()