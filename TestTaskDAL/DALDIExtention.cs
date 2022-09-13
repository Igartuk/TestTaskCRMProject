using Microsoft.Extensions.DependencyInjection;
using TestTaskCRMProjectDAL.Interfaces;
using TestTaskCRMProjectDAL.Models;
using TestTaskCRMProjectDAL.Repositories;

namespace TestTaskCRMProjectDAL
{
    public static class DALDIExtention
    {
        public static void RegisterDalDependencies(this IServiceCollection services)
        {
            services.AddDbContext<ApplicationContext>();
            services.AddScoped<IContactRepository, ContactRepository>();
        }
    }
}
