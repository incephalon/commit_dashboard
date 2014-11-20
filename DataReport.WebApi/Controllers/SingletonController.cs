using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using DataReport.Interfaces.Interfaces;
using DataReport.Model;

namespace DataReport.WebApi.Controllers
{
    public class SingletonController : ApiController
    {
        private ISingletonMap _singletonMap;
        public SingletonController(ISingletonMap singletonMap)
        {
            _singletonMap = singletonMap;
        }


        // GET: Singleton
        [ResponseType(typeof(singleton))]
        public IHttpActionResult Get()
        {
            try
            {
                var response = _singletonMap.GetDataByColumns(new List<string> { "Id", "YEAR" });
                return Ok(response);
            }
            catch (Exception)
            {

                return null;
            }


        }
    }
}
