window.KavaReviews = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    initialize: function() {
        var $root = $('#main');
        new KavaReviews.Routers.AppRouter({
            $root: $root,
        });
        Backbone.history.start();
        KavaReviews.addNavbar();
        KavaReviews.addSidebar();
    },
    addSidebar: function() {
        var $sidebar = $('#sidebar');
        var sidebarView = new KavaReviews.Views.Sidebar();
        $sidebar.html(sidebarView.render().$el);
    },
    addNavbar: function() {
        var $navbar = $('#navbar');
        var navbarView = new KavaReviews.Views.Navbar();
        $navbar.html(navbarView.render().$el);
        //navbar
    }

};

$(document).ready(function() {
    KavaReviews.initialize();
});
