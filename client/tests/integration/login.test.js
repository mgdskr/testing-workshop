// Let's make sure that users can login to the app!
//
// Here's a high level overview of what to do...
// 1. Create a mock user object
// 2. Bring in axios (which will actually be our mock)
//    and mock the post implementation with
//    mockImplementation on the instance
//    (you can get it from axiosMock.__mock.instance.post)
//    You'll want to simulate the response that our backend
//    is giving for the login route. Find that in:
//    /api/src/routes/api/users.js
//    The /api/src/models/user.js file will also be helpful.
// 3. Render the Login form with blank state
// 4. Find the email and password fields and set their
//    node values to the values for your mocked user.
// 5. Simulate a submit on the rendered form
// 6. Use `flushAllPromises` from utils to force all
//    promises to resolve
// 7. Assert that post was called only once on the
//    axios instance and assert that it was called
//    correctly
// 8. Assert that localStorage was called once and
//    was called correctly.
//
// Remember that there are some helpers you can
// get to render the <Login /> with predefined state.
// eslint-disable-next-line no-unused-vars
import Login from '../../src/screens/login'
// Note that this test function is set to be async
// Just a little tip ;-)
test('logs in when the form is submitted', async () => {
})
