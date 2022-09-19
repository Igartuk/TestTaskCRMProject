using TestTaskCRMProjectBLL.DTOs;

namespace TestTaskCRMProjectBLL.Interfaces
{
    public  interface IContactService
    {
        public Task<IEnumerable<ContactDTO>> Get();
        public Task<ContactDTO> GetItem(int id);
        public Task Edit(EditContactDTO item);
        public Task Delete(int id);
        public Task Create(CreateContactDTO item);
    }
}
