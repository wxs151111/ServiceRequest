
import soap from 'jquery.soap'

const mutations = {
  SUBMIT (state) {
    console.log('submit')
    soap({
      url: 'http://isupport.cuhk.edu.cn:8080/arsys/services/ARService?server=itsm-app&webService=HPD_HelpDesk_WebService',
      method: 'New_Create_Operation_0',
      envAttributes: { // additional attributes (like namespaces) for the Envelope:
        'xmlns:urn': 'urn:HPD_HelpDesk_WebService'
      },
      namespaceQualifier: 'urn',
      SOAPAction: 'urn:HPD_HelpDesk_WebService/New_Create_Operation_0',
      appendMethodToURL: false,
      data: {
        Phone_Number: 123,
        Description: 321,
        Submitter: 'liangwb',
        Status: 0,
        Short_Description: 321,
        Contact_Company: '香港中文大学',
        Service_Type: 3,
        Incident_Number: 12301,
        Urgency: 4000,
        Impact: 4000,
        Priority: 3,
        Company: '香港中文大学',
        Create_Impacted_Area_from_Customer_s_Location: 0
      },

      success: function (soapResponse) {
        // do stuff with soapResponse
        // if you want to have the response as JSON use soapResponse.toJSON();
        // or soapResponse.toString() to get XML string
        // or soapResponse.toXML() to get XML DOM
        console.log('success:' + soapResponse)
      },
      error: function (SOAPResponse) {
        console.log('error:' + SOAPResponse)
      }
    })
  }
}
export default {
  mutations
}
