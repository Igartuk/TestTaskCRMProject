using Microsoft.Extensions.DependencyInjection;
using TestTaskCRMProjectDAL;

namespace TestTaskCRMProjectBLL
{
    public static class BLLDIExtention
    {
        public static void RegisterDependencies(this IServiceCollection services)
        {
            services.RegisterDalDependencies();
        }
    }
}
