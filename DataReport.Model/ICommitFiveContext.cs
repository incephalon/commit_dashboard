using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataReport.Model
{
    public interface ICommitFiveContext : IDisposable
    {
        #region DBSet Properties

        DbSet<campusReference> CampusReference { get; set; }
        DbSet<college> College { get; set; }
        DbSet<mytable> Mytable { get; set; }
        DbSet<noner> Noner { get; set; }
        DbSet<staff> Staff { get; set; }
        DbSet<student> Student { get; set; }
        #endregion


        int SaveChanges();

        IDbSet<T> Set<T>() where T : class;
        int ExecuteSqlCommand(string sql, params object[] parameters);
        void DetectChanges();
        void SetUnchanged(object entity);
        System.Data.Entity.Infrastructure.DbEntityEntry UpdateEntries(object dbEntity, object entity);
        bool IsAttached(object entity);
        
    }
}
