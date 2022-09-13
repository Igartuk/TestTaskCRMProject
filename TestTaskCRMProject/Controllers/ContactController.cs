using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TestTaskCRMProjectBLL.DTOs;
using TestTaskCRMProjectBLL.Interfaces;

namespace TestTaskCRMProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private IContactService _contactService;
        public ContactController(IContactService contactService)
        {
            _contactService = contactService;
        }
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await _contactService.Get());
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var contact = await _contactService.GetItem(id);
            if (contact == null)
            {
              return NotFound();
            } else 
                {
                 return Ok(contact);
                }      
        }
        [HttpPost]
        public async Task<IActionResult> Create(CreateContactDTO createContactDTO)
        {
            if (!ModelState.IsValid)
            {
                return NotFound();
            }
            await _contactService.Create(createContactDTO);
            return Ok(_contactService.Get());
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _contactService.Delete(id);
            return Ok(await _contactService.Get());
        }
        [HttpPut]
        public async Task<IActionResult> Edit(EditContactDTO editContactDTO)
        {
            await _contactService.Edit(editContactDTO);
            return Ok(await _contactService.Get());
        }
    }
}
