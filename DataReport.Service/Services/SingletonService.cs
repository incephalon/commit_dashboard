using System.Collections.Generic;
using DataReport.Interfaces.Interfaces;
using DataReport.Repository;

namespace DataReport.Service.Services
{
    public class SingletonService : ISingletonService
    {
        private ISingletonRepository _repository;
        public SingletonService(ISingletonRepository repository)
        {
            _repository = repository;
        }

        public IResponseMessage GetDataByColumns(string[] columns)
        {
            return _repository.GetDataByColumns(columns);
        }
    }
}
