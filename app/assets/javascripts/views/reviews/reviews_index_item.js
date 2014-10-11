KavaReviews.Views.ReviewsIndexItem = Backbone.View.extend({
  tagName: "li",
  template: JST['reviews/index_item'],
  render: function(){
    this.$el.html(this.template({review: this.model}));
    return this;
  }
});
