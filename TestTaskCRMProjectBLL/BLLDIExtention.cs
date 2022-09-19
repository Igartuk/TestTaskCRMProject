using Microsoft.Extensions.DependencyInjection;
using TestTaskCRMProjectBLL.Interfaces;
using TestTaskCRMProjectBLL.Services;
using TestTaskCRMProjectDAL;

namespace TestTaskCRMProjectBLL
{
    public static class BLLDIExtention
    {
        public static void RegisterDependencies(this IServiceCollection services)
        {
            services.RegisterDalDependencies();
            services.AddScoped<IContactService, ContactService>();
            services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
        }
    }
}
