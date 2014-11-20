using System;
using System.Net;
using DataReport.Interfaces.Interfaces;

namespace DataReport.Common
{
    public class ResponseMessage : IResponseMessage
    {
        public HttpStatusCode StatusCode { get; set; }
        public bool IsValid { get; set; }
        public dynamic ResponseData { get; set; }
        public Exception Exception { get; set; }

        public ResponseMessage()
        {
            IsValid = false;
            StatusCode = HttpStatusCode.OK;
        }
    }
}
