using DataReport.Interfaces.Interfaces;

namespace DataReport.Service.Services
{
    public class CommitFiveService : ICommitFiveService
    {
        private ICommitFiveRepository _repository;
        public CommitFiveService(ICommitFiveRepository repository)
        {
            _repository = repository;
        }

        public IResponseMessage GetDataByColumns(string[] columns)
        {
            return _repository.GetDataByColumns(columns);
        }
    }
}
