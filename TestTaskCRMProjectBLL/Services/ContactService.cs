using AutoMapper;
using TestTaskCRMProjectBLL.DTOs;
using TestTaskCRMProjectBLL.Interfaces;
using TestTaskCRMProjectDAL.Interfaces;
using TestTaskCRMProjectDAL.Models.Entities;

namespace TestTaskCRMProjectBLL.Services
{
    public class ContactService : IContactService

    {
        private IMapper _mapper;
        private IContactRepository _contactRepository;
        public ContactService(
            IContactRepository contactRepository,
            IMapper mapper)
        {
            _mapper = mapper;
            _contactRepository = contactRepository;
        }
        public async Task<IEnumerable<ContactDTO>> Get()
        {
            var contacts = await _contactRepository.Get();
            var contactDTOs = _mapper.Map<IEnumerable<ContactDTO>>(contacts);
            return contactDTOs;
        }
        public async Task<ContactDTO> GetItem(int id)
        {
            var contact = await _contactRepository.GetItem(id);
            var contactDTO = _mapper.Map<ContactDTO>(contact);
            return contactDTO;
        }
        public async Task Edit(EditContactDTO editContactDTO)
        {
            var contact = _mapper.Map<Contact>(editContactDTO);
            await _contactRepository.Edit(contact);
        }
        public async Task Delete(int id)
        {
            await _contactRepository.Delete(id);
        }
        public async Task Create(CreateContactDTO createContactDTO)
        {
            var contact = _mapper.Map<Contact>(createContactDTO);
            await _contactRepository.Create(contact);
        }

    }
}
