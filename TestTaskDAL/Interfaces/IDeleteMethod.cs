namespace TestTaskCRMProjectDAL.Interfaces
{
    public interface IDeleteMethod<T> where T : class
    {
        public Task Delete(int id);
    }
}
