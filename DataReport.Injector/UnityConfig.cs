using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataReport.Common;
using DataReport.Interfaces.Interfaces;
using DataReport.Map;
using DataReport.Model;
using DataReport.Repository;
using DataReport.Service;
using DataReport.Service.Services;
using Microsoft.Practices.Unity;
using Unity.Mvc4;

namespace DataReport.Injector
{
    public static class UnityConfig
    {
        private static UnityContainer container;

        public static UnityContainer Container { get { return container; } }

        public static IUnityContainer BuildUnityContainer()
        {

            RegisterAllComponents();

            return container;
        }
        public static UnityDependencyResolver RegisterComponents()
        {
            RegisterAllComponents();

            return new UnityDependencyResolver(container);

        }

        public static void RegisterAllComponents()
        {
            container = new UnityContainer();

            container.RegisterType<IReportContext, SingletonEntities>();

            #region Maps
            
            container.RegisterType<ISingletonMap, SingletonMap>();

            #endregion

            #region Services
            container.RegisterType<ISingletonService, SingletonService>();
            
            #endregion

            #region Repositories
            container.RegisterType<ISingletonRepository, SingletonRepository>();
            #endregion

            #region Commons
            container.RegisterType<IResponseMessage, ResponseMessage>();
            #endregion
        }

        public static T ResolveDependencyNotMvc<T>()
        {
            if (container == null)
            {
                container = new UnityContainer();
                RegisterAllComponents();
            }
            return container.Resolve<T>();
        }
        public static T ResolveDependency<T>()
        {
            if (container == null)
            {
                container = new UnityContainer();
                RegisterComponents();
            }
            return container.Resolve<T>();
        }
    }
}
