using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Dynamic;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using DataReport.Common;
using DataReport.Interfaces.Interfaces;
using DataReport.Model;

namespace DataReport.Repository
{
    public class CommitFiveRepository : BaseCommitFiveRepository, ICommitFiveRepository
    {
        public CommitFiveRepository(ICommitFiveContext context)
            : base(context)
        {

        }

        public IResponseMessage GetDataByColumns(string[] columns)
        {
            IResponseMessage response = new ResponseMessage();
            try
            {
                
                var data = Context.College.Select(string.Format("new ({0})", string.Join(", ", columns))).Take(100);
                response.ResponseData = data;
                response.IsValid = true;
                response.StatusCode = HttpStatusCode.OK;
            }
            catch(Exception ex)
            {
                response.IsValid = false;
                response.StatusCode = HttpStatusCode.InternalServerError;
                response.Exception = ex;
            }
            

            return response;
        }
    }
}
