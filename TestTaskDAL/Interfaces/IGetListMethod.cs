namespace TestTaskCRMProjectDAL.Interfaces
{
    public interface IGetListMethod<T> where T : class
    {
        public Task<IEnumerable<T>> Get();
    }
}
