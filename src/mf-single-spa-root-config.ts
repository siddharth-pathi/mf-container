import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

// registerApplication({
//   name: "@mfngNav",
//   app: () => System.import("@mfngNav"),
//   activeWhen: () => true
// });

// registerApplication({
//   name: "@mf-ng",
//   app: () => System.import("@mf-ng"),
//   activeWhen: location => location.pathname === '/home'
// });

// start({
//   urlRerouteOnly: true,
// });

const routes = constructRoutes(
  document.querySelector("#single-spa-layout") as HTMLTemplateElement
);

console.log('routes : ', routes);

const applications = constructApplications({
  routes,
  loadApp({ name }) {
    // @ts-ignore
    return System.import(name);
  },
});

console.log('applications : ', applications);
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start();