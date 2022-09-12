using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TestTaskCRMProjectDAL.Interfaces;
using TestTaskCRMProjectDAL.Models;
using TestTaskCRMProjectDAL.Models.Entities;

namespace TestTaskCRMProjectDAL.Repositories
{
    public class ContactRepository : IContactRepository
    {
        private ApplicationContext _context;
        public ContactRepository(ApplicationContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<Contact>> Get()
        {
            var contacts = _context.Contacts.ToList();
            return contacts;
        }
        public async Task<Contact> GetItem(int id)
        {
            var contact = _context.Contacts.FirstOrDefault(x => x.Id == id);
            return contact;
        }
        public async Task Create(Contact contact)
        {
            if (contact != null)
            {
                await _context.Contacts.AddAsync(contact);
                _context.SaveChanges();
            }
        }
        public async Task Delete(int id)
        {
            var contact = _context.Contacts.FirstOrDefault(x=> x.Id == id);
            _context.Contacts.Remove(contact);
            await _context.SaveChangesAsync();
        }
        public async Task Edit(Contact contact)
        {
            _context.Contacts.Update(contact);
            await _context.SaveChangesAsync();
        }
    }
}
