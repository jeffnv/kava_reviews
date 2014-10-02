KavaReviews.Routers.AppRouter = Backbone.Router.extend({
    initialize: function(options) {
        this.$root = options.$root;
    },
    routes: {
        "": "root",
    },
    root: function() {
        var rootView = new KavaReviews.Views.Root();
        this.swapView(rootView.render());
    },
    swapView: function(view) {
        this.current && this.current.remove();
        this.current = view;
        this.$root.html(view.$el);
    }
});
