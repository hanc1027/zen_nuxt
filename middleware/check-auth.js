export default function (context) {
    // console.log("[Middleware] Just Check-Auth");
    context.store.dispatch("initAuth", context.req);
}