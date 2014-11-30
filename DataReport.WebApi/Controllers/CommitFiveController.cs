using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using DataReport.Interfaces.Interfaces;

namespace DataReport.WebApi.Controllers
{
    public class CommitFiveController : ApiController
    {
        private ICommitFiveMap _commitFiveMap;
        public CommitFiveController(ICommitFiveMap commitFiveMap)
        {
            _commitFiveMap = commitFiveMap;
        }


        [AcceptVerbs("POST")]
        public IHttpActionResult Post(MyViewModel columns)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                var response = _commitFiveMap.GetDataByColumns(columns.Columns);
                return Ok(response);
            }
            catch (Exception ex)
            {
                throw new HttpResponseException(HttpStatusCode.BadRequest);

            }            
        }
    }
}
