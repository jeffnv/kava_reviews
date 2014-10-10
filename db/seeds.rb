u1 = User.create!(
  :name => "jeff",
  :email => "jeffnv@gmail.com",
  :password => "asdfasdf"
)
c1 = Company.create!(
  :name => 'Bula Kava House',
  :url => "http://www.bulakavahouse.com",
  :lat => "123",
  :long => "68",
  :addr => "123 Division, Portland, Oregon"
)
c2 = Company.create!(
  :name => 'Nakava - Nakamal At Home',
  :url => "http://www.nakava.com",
  :lat => "123",
  :long => "68",
  :addr => "Boca Raton, Florida"
)

p1 = c1.products.create!(
  :name => 'Nambawan',
  :url => "http://www.bulakavahouse.com/nambawan",
  :price => 30
)
p2 = c2.products.create!(
  :name => 'Black Sand',
  :url => "http://www.nakava.com/black_sand",
  :price => 30
)

r1 = p1.reviews.create!(
  :body => 'one of the best kavas around',
  :title => 'great!!!',
  :score => 9,
  :author_id => u1.id,
)
r2 = p2.reviews.create!(
  :body => 'the kava that got me hooked, super strong',
  :title => 'love it!!!',
  :score => 10,
  :author_id => u1.id,
)


