using Microsoft.Extensions.DependencyInjection;
using TestTaskCRMProjectDAL.Models;

namespace TestTaskCRMProjectDAL
{
    public static class DALDIExtention
    {
        public static void RegisterDalDependencies(this IServiceCollection services)
        {
            services.AddDbContext<ApplicationContext>();

        }
    }
}
