namespace TestTaskCRMProjectDAL.Interfaces
{
    public interface ICreateMethod<T> where T : class
    {
        public Task Create(T item);
    }
}
