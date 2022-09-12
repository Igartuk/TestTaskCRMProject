using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TestTaskCRMProjectDAL.Models.Entities;

namespace TestTaskCRMProjectDAL.Interfaces
{
    public interface IContactRepository :
            IGetListMethod<Contact>,
            IGetItemMethod<Contact>,
            IEditMethod<Contact>,
            ICreateMethod<Contact>,
            IDeleteMethod<Contact>
    {
    }
}
