KavaReviews.Views.ReviewsIndex = Backbone.CompositeView.extend({
    initialize: function() {
        this.listenTo(this.collection, 'add', this.addReviewView);
    },
    addReviewView: function(review) {
        var reviewView = new KavaReviews.Views.ReviewsIndexItem({
            model: review
        });
        this.addSubview('#review-list', reviewView);
    },
    template: JST['reviews/index'],
    render: function() {
        this.$el.html(this.template());
        this.attachSubviews();
        return this;
    }
});
