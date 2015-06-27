using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Microsoft.Azure;
using Twilio;

namespace SMSServer.Controllers
{
    public class SMSController : ApiController
    {

        [HttpPost]
        public void SendMessage(Message message)
        {
            string AccountSid = "ACbc5892a55d03da310a1ab2663804d3d9";
            string AuthToken = "77f97a04db323c03086cd93a363d606a";
            var twilio = new TwilioRestClient(AccountSid, AuthToken);
            var numbers = CloudConfigurationManager.GetSetting("ReminderNumbers").Split(',');
            foreach (var number in numbers)
            {
                var twilioMessage = twilio.SendMessage(message., number, "Do some YOMO!");
                Console.WriteLine(twilioMessage.Sid);
            }
        }
    }
}
