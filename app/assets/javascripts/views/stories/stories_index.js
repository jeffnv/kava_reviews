KavaReviews.Views.StoriesIndex = Backbone.CompositeView.extend({
    initialize: function() {
        this.listenTo(this.collection, 'add', this.addStoryView);
        var newStoryView = new KavaReviews.Views.NewStory({
            collection: this.collection
        });
        this.addSubview('#new-story', newStoryView);
        this.collection.each(this.addStoryView.bind(this));
    },
    template: JST['stories/index'],
    addStoryView: function(story) {
        var storyView = new KavaReviews.Views.StoriesIndexItem({
            model: story
        });
        this.addSubview('#story-list', storyView);
    },
    render: function() {
        this.$el.html(this.template());
        this.attachSubviews();
        return this;
    }

});
