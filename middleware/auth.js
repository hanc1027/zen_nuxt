export default function (context) {
    //檢查每一個頁面的token值是否存在
    if (!context.store.getters.isAuthenticated) {
        // context.actions.logout();
        context.redirect("/");
    }
}