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
        public IHttpActionResult Get(string column)
        {
            try
            {
                var response = _singletonMap.GetDataByColumns(new string[]{"Id"});
                return Ok(response);
            }
            catch (Exception)
            {
                return null;
            }
        }
        [System.Web.Http.AcceptVerbs("GET", "POST")]
        public IHttpActionResult Post(MyViewModel columns)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                var response = _singletonMap.GetDataByColumns(columns.Columns);
                return Ok(response);
            }
            catch (Exception ex)
            {
                throw new HttpResponseException(HttpStatusCode.BadRequest);

            }            
        }
    }

    public class MyViewModel
    {
        public string[] Columns { get; set; }
    }
}
