KavaReviews.Views.Sidebar = Backbone.View.extend({
  template: JST["bars/sidebar"],
  render: function(){
    this.$el.html(this.template());
    return this;
  }
});
