using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataReport.Interfaces.Interfaces;

namespace DataReport.Map
{
    public class CommitFiveMap : ICommitFiveMap
    {
        private ICommitFiveService _service;

        public CommitFiveMap(ICommitFiveService service)
        {
            _service = service;
        }

        public IResponseMessage GetDataByColumns(string[] columns)
        {
            IResponseMessage response = _service.GetDataByColumns(columns);
            return response;

        }
    }
}
