import React from 'react'
import {google} from 'googleapis'
import {Oauth2} from google.auth


const oAuth2Client = new Oauth2('23346962997-kg7gpfaj5e38v65ijh85ak3im5s5quqf.apps.googleusercontent.com', 'ezmaTopeIVUHAcUvKa_cBrQm')

oAuth2Client.setCredentials({refresh_token: '1//04L93p80h2cM-CgYIARAAGAQSNwF-L9IrxB5ADxlZziRI4MbYNWahRLapzoZzTkrJaly0YfljjjOq-QpfWPqGohmd5l5DioiY_s8'})

const calendar = google.calendar({version: 'v3', auth:oAuth2Client})



function Calendar() {
  return (
    <div>
      
    </div>
  )
}

export default Calendar
