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
