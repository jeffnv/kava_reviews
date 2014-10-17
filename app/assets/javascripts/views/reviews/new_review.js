KavaReviews.Views.NewReview = Backbone.View.extend({
    events: {
        "click #new-review-button": "displayNewReviewView",
        "click #cancel-submission": "hideReviewForm",
        "change #company-name": "addNewCompany",
        "change #product-name": "addNewProduct",
        "submit #new-review-form": "createReview"
    },
    addNewCompany: function(event) {
        event.preventDefault();
        var companyIdx = $(event.target).val();
        if (companyIdx == -1) {
            this.$('#new-company-input').removeClass('hidden');
            this.$('#company-select').addClass('hidden');
        }
    },
    addNewProduct: function(event) {
        event.preventDefault();
        var companyIdx = $(event.target).val();
        if (companyIdx == -1) {
            this.$('#new-product-input').removeClass('hidden');
            this.$('#product-select').addClass('hidden');
        }
    },
    hideReviewForm: function(event) {
        event.preventDefault();
        this.$('#new-review-form').addClass('hidden');
        this.$('#new-review-button').removeClass('hidden');
    },
    displayNewReviewView: function(event) {
        event.preventDefault();
        this.$('#new-review-form').removeClass('hidden');
        this.$('#new-review-button').addClass('hidden');
    },
    createReview: function(event) {
        event.preventDefault();
        var attrs = this.$('form').serializeJSON();
        debugger
        //
        // var that = this;
        // var newStory = new KavaReviews.Models.Story();
        // newStory.save(attrs, {
        //     success: function() {
        //         that.collection.add(newStory);
        //     }
        // });
    },
    template: JST['reviews/new'],
    render: function() {
        this.$el.html(this.template());
        return this;
    }
});
