﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataReport.Interfaces.Interfaces
{
    public interface ICommitFiveService
    {
        IResponseMessage GetDataByColumns(string[] columns);
    }
}