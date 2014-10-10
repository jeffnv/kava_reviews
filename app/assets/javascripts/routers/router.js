KavaReviews.Routers.AppRouter = Backbone.Router.extend({
    initialize: function(options) {
        this.$root = options.$root;
    },
    routes: {
        "": "storiesIndex",
        "reviews": "reviewsIndex"
    },
    reviewsIndex: function() {
        this._renderIndex(
            KavaReviews.Views.ReviewsIndex,
            KavaReviews.Collections.reviews
        );
    },
    storiesIndex: function() {
        this._renderIndex(
            KavaReviews.Views.StoriesIndex,
            KavaReviews.Collections.stories
        );
    },
    _renderIndex: function(indexConstructor, collection) {
        var indexView = new indexConstructor({
            collection: collection
        });
        collection.fetch();
        this.swapView(indexView.render());
    },
    swapView: function(view) {
        this.current && this.current.remove();
        this.current = view;
        this.$root.html(view.$el);
    }
});
