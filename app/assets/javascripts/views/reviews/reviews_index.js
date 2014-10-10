KavaReviews.Views.ReviewsIndex = Backbone.View.extend({
    template: JST['reviews/index'],
    render: function() {
        this.$el.html(this.template());
        return this;
    }
});
