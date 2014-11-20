using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Core.Objects.DataClasses;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using DataReport.Common;
using DataReport.Interfaces.Interfaces;
using DataReport.Model;
using System.Linq.Dynamic;
using System.Data.Linq;

namespace DataReport.Repository
{
    public class SingletonRepository : BaseRepository, ISingletonRepository
    {

        public SingletonRepository(IReportContext context)
            : base(context)
        {

        }

        public IResponseMessage GetDataByColumns(List<string> columns)
        {
            IResponseMessage response = new ResponseMessage();
            try
            {
                //var data = Context.Singletons.Select("new ({0})", string.Join(",", columns));
                var data = Context.Singletons.Select(string.Format("new ({0})", string.Join(", ", columns)));
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
