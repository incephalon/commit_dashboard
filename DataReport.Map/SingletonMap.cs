using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataReport.Interfaces.Interfaces;
using DataReport.Model;
using DataReport.Service;
using DataReport.Service.Services;

namespace DataReport.Map
{
    public class SingletonMap : ISingletonMap
    {
        private ISingletonService _service;

        public SingletonMap(ISingletonService service)
        {
            _service = service;
        }

        public IResponseMessage GetDataByColumns(List<string> columns)
        {
            IResponseMessage response = _service.GetDataByColumns(columns);
            return response;

        }
    }
}
