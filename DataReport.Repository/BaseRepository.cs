using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using DataReport.Common;
using DataReport.Interfaces.Interfaces;
using DataReport.Model;
using System.Data.Entity;
using System.Data;

namespace DataReport.Repository
{
    public class BaseRepository
    {
        private IReportContext _context;
        private IResponseMessage _response;

        public IReportContext Context
        {
            get
            {
                return _context;
            }
        }

        public BaseRepository(IReportContext context)
        {
            this._context = context;
        }

        public BaseRepository(IReportContext context, IResponseMessage response)
        {
            this._context = context;
            _response = response;
        }
        public BaseRepository()
        {

        }

        public IResponseMessage All<T>() where T : EntityBase
        {
            IResponseMessage response = new ResponseMessage();
            try
            {
                response.IsValid = true;
                response.ResponseData = this._context.Set<T>().AsQueryable();
                response.StatusCode = HttpStatusCode.OK;
            }
            catch (Exception ex)
            {
                
                response.Exception = ex;
                response.IsValid = false;
                response.StatusCode = HttpStatusCode.InternalServerError;
            }
            return response;
        }

        public IResponseMessage Find<T>(T entity, bool compositeKey = false) where T : EntityBase
        {
            IResponseMessage response = new ResponseMessage();
            T foundEntity = null;
            try
            {
                foundEntity = compositeKey ? _context.Set<T>().Find(entity.IdentityID(compositeKey)) : _context.Set<T>().Find(entity.IdentityID());
                if (foundEntity != null)
                {
                    response.IsValid = true;
                    response.ResponseData = foundEntity;
                    response.StatusCode = HttpStatusCode.OK;
                }
                else
                {
                    response.IsValid = false;
                    response.ResponseData = null;
                    response.StatusCode = HttpStatusCode.NotFound;
                }
            }
            catch (Exception ex)
            {
                
                response.Exception = ex;
                response.IsValid = false;
                response.StatusCode = HttpStatusCode.InternalServerError;
            }
            return response;
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
