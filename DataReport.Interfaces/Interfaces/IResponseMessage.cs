using System;
using System.Net;

namespace DataReport.Interfaces.Interfaces
{
    public interface IResponseMessage
    {
        bool IsValid { get; set; }
        HttpStatusCode StatusCode { get; set; }
        dynamic ResponseData { get; set; }

        Exception Exception { get; set; }
    }
}
