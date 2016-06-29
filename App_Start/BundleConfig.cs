using System.Web;
using System.Web.Optimization;

namespace RDLCReport
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));



            bundles.Add(new StyleBundle("~/sass/css").Include(
           "~/sass/*.css"
           ));


            bundles.Add(new ScriptBundle("~/bundles/angularjs")
                .Include("~/Scripts/angular.js",
                 "~/Scripts/angular-cookies.js",
                "~/Scripts/angular-translate.js",
                "~/Scripts/angular-translate-loader-url.js",
                "~/Scripts/angular-translate-loader-static-files.js",
                 "~/Scripts/angular-translate-loader-static-files.min.js",
                "~/Scripts/app/customerCtrl.js"
                ));
            //bundles.Add(new ScriptBundle("~/bundles/appjs").Include(
            //         "~/Scripts/app/customerCtrl.js"));

            #region Foundation Bundles
          
            bundles.Add(Foundation.Scripts());
            #endregion
        }
    }
}
