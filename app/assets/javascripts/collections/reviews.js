KavaReviews.Collections.Reviews = Backbone.Collection.extend({
  url: 'api/reviews',
  model: KavaReviews.Models.Review
});

KavaReviews.Collections.reviews = new KavaReviews.Collections.Reviews(); 

