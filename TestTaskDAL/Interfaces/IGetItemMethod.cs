namespace TestTaskCRMProjectDAL.Interfaces
{
    public interface IGetItemMethod<T> where T : class
    {
        public Task<T> GetItem(int id);
    }
}
