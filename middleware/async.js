//use of async middleware helps up in avoiding repetative try catch block in the controllers.

//here we pass asyncFn as the function that is passed from the routes
const asyncWrapper = (asyncFn) => {
  // here we return an asyncronous function which takes in the parameters request, response and next(to move to next middleware)
  //we use an asyncronous function here because the function takes soe time to fetch data from the thus an await is required
  return async (req, res, next) => {
    try {
      //if we get a valid input we return the awaited asyncFn
      await asyncFn(req, res, next);
    } catch (error) {
      //else we move to the next middleware passing the error as parameter
      next(error);
    }
  };
};
//then we export asyncWrapper to the controller
module.exports = asyncWrapper;
