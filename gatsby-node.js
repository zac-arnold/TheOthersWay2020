const path = require("path")

exports.onCreatepage = async ({ page, actions }) => {
  const { Createpage } = actions

  // page.matchPath is a special key that is used for matching pages 
  // only on the client.
  console.log("Page - ", page.path)
  if (page.path.match(/^\/lineup/)){
    // Update the page
    createPage({
      path: "/lineup",
      matchPath: "/lineup/*",
      component: path.resolve(`src/pages/lineup.jsx`),
    })
  }
}