const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const axios = require('axios');
const APIFeatures = require('../utils/apiFeatures');

exports.getAllHits = catchAsync(async (req, res, next) => {
  if (!req.params.category) {
    return next(new AppError('Please provide a category.', 400));
  }

  const response = await axios.get(
    `https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=${req.params.category}`
  );

  if (!response.data.hits) {
    return next(new AppError('Fetching hits failed.', 404));
  }
  const hits = response.data.hits;

  //new instance of APIFeature class, handle sort, paginate on array. scalable class that can adding more methods and chain them.
  const features = new APIFeatures(hits, req.query).sort().paginate();

  res.status(200).json({
    status: 'success',
    data: features.data,
  });
});
