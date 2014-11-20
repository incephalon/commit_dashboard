using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataReport.Model
{
    public class EntityBase
    {
        public virtual long IdentityID()
        {
            return 0;
        }

        public virtual string IdentityID(string dummy = "")
        {
            return "";
        }

        public virtual object[] IdentityID(bool dummy = true)
        {
            return new List<object>().ToArray();
        }
    }
}
