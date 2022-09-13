using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestTaskCRMProjectBLL.DTOs
{
    public class ContactDTO
    {
        public string Name { get; set; }
        public int MobilePhone { get; set; }
        public string JobTitle { get; set; }
        public DateTime BirthDate { get; set; }
    }
}
