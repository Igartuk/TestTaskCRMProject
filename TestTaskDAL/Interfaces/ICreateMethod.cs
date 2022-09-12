using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestTaskCRMProjectDAL.Interfaces
{
    public interface ICreateMethod<T> where T : class
    {
        public Task Create(T item);
    }
}
