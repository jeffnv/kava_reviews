KavaReviews.Views.NewStory = Backbone.View.extend({
    events: {
        "click #new-story-button": "displayNewStoryView",
        "click #cancel-submission": "hideStoryForm",
        "submit #new-story-form": "createStory"
    },
    hideStoryForm: function(event) {
        event.preventDefault();
        this.$('#new-story-form').addClass('hidden');
        this.$('#new-story-button').removeClass('hidden');
    },
    displayNewStoryView: function(event) {
        event.preventDefault();
        this.$('#new-story-form').removeClass('hidden');
        this.$('#new-story-button').addClass('hidden');
    },
    createStory: function(event) {
        event.preventDefault();
        var attrs = {
            'url': this.$('#url').val(),
            'title': this.$('#title').val(),
            'description': this.$('#description').val(),
        };

        var that = this;
        var newStory = new KavaReviews.Models.Story();
        newStory.save(attrs, {
            success: function() {
                that.collection.add(newStory);
            }
        });
    },
    template: JST['stories/new'],
    render: function() {
        this.$el.html(this.template());
        return this;
    }
});
