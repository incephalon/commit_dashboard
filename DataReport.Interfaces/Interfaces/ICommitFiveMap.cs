using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataReport.Interfaces.Interfaces
{
    public interface ICommitFiveMap
    {
        IResponseMessage GetDataByColumns(string[] columns);
    }
}
