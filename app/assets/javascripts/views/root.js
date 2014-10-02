KavaReviews.Views.Root = Backbone.View.extend({
  template: JST["root"],
  render: function() {
    this.$el.html(this.template());
    return this;
  }
});
