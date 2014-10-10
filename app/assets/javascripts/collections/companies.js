KavaReviews.Collections.Companies = Backbone.Collection.extend({
  url: 'api/companies',

  model: KavaReviews.Models.Company

});

KavaReviews.Collections.companies = new KavaReviews.Collections.Companies();
