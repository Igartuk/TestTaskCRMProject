using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestTaskCRMProjectDAL.Interfaces
{
    public interface IGetListMethod<T> where T : class
    {
        public Task<IEnumerable<T>> Get();
    }
}
