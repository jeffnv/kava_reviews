KavaReviews.Views.Navbar = Backbone.View.extend({
  template: JST["bars/navbar"],
  render: function(){
    this.$el.html(this.template());
    return this;
  }
});
