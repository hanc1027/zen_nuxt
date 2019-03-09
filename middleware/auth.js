export default function (context) {
    //檢查每一個頁面的token值是否存在
    // console.log("[Middleware] Just Auth");
    if (!context.store.getters.isAuthenticated) {
        context.redirect("/");
    }
}