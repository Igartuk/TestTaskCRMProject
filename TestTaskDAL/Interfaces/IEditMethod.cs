namespace TestTaskCRMProjectDAL.Interfaces
{
    public interface IEditMethod<T> where T : class
    {
        public Task Edit(T item);
    }
}
