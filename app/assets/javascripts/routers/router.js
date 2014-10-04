KavaReviews.Routers.AppRouter = Backbone.Router.extend({
    initialize: function(options) {
        this.$root = options.$root;
    },
    routes: {
        "": "storiesIndex",
    },
    storiesIndex: function() {
        var storiesIndex = new KavaReviews.Views.StoriesIndex({
            collection: KavaReviews.stories
        });
        KavaReviews.stories.fetch();
        this.swapView(storiesIndex.render());
    },
    swapView: function(view) {
        this.current && this.current.remove();
        this.current = view;
        this.$root.html(view.$el);
    }
});
