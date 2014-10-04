KavaReviews.Views.StoriesIndexItem = Backbone.View.extend({
  tagName: "li",
  template: JST['stories/index_item'],
  render: function(){
    this.$el.html(this.template({story: this.model}));
    return this;
  }
});
