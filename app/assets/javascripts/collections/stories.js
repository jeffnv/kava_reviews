KavaReviews.Collections.Stories = Backbone.Collection.extend({
    url: "api/stories",
    model: KavaReviews.Models.Story
});
KavaReviews.stories = new KavaReviews.Collections.Stories();
