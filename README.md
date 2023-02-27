## Line Liff (Next.js)

This is an example application that demonstrates how to use Line Liff with Next.js. Line Liff is a platform for developing and distributing web apps that can be embedded in Line messages.
ofile information, and send a message to a Line chat.

This example app allows users to log in to their Line account, view their Line profile information, and send a message to a Line chat.

### Getting Started

To get started with this example app, follow these steps:

1. Clone this repository: `git clone https://github.com/BadEnd777/LineLiff-NextJS.git` or [download](https://github.com/BadEnd777/LineLiff-NextJS/archive/refs/heads/main.zip)
2. Install dependencies: `npm install`
3. Create a new Line Liff application in the Line Developer Console. You'll need to provide a name for your application and a URL where your app will be hosted. Make sure to select the "Web app" platform when creating your app.
4. Copy the LIFF ID for your new Line Liff application. You'll need to add this ID to the liff.init() function call in the `next.config.js` file.
5. Run the app: `npm run dev`
6. Open your browser and go to http://localhost:3000. You should see the homepage of the example app.

### Technologies Used

- [Next.js](https://nextjs.org/) - a React-based framework for building server-side rendered web apps.
- [React](https://reactjs.org/) - a JavaScript library for building user interfaces.
- [Line Liff](https://developers.line.biz/en/docs/liff/overview/) - a platform for developing and distributing web apps that can be embedded in Line messages.
- [Line Login](https://developers.line.biz/en/docs/line-login/overview/) - a service that allows users to log in to your app using their Line accounts.
- [Line Messaging API](https://developers.line.biz/en/docs/messaging-api/overview/) - a service that allows you to send messages to Line users.
- [Node.js](https://nodejs.org/en/) - a JavaScript runtime environment.

### License

This example app is licensed under the MIT License. See the [MIT License](https://opensource.org/licenses/MIT) for more information.