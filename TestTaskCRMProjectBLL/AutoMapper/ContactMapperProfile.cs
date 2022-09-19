using AutoMapper;
using TestTaskCRMProjectBLL.DTOs;
using TestTaskCRMProjectDAL.Models.Entities;

namespace TestTaskCRMProjectBLL.AutoMapper
{
    public class ContactMapperProfile : Profile
    {
        public ContactMapperProfile() {
            CreateMap<Contact, ContactDTO>();
            CreateMap<ContactDTO, Contact>();


            CreateMap<Contact, EditContactDTO>();
            CreateMap<EditContactDTO, Contact>();


            CreateMap<Contact, CreateContactDTO>();
            CreateMap<CreateContactDTO, Contact>();
        } 
    }
}
