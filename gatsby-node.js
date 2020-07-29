const path = require("path")
const data = require("./src/assets/data/lineupdata.json")

exports.createPages = ({ boundActionCreators }) => {
  const { createPage } = boundActionCreators;
 
  // Your component that should be rendered for every item in JSON.
 const IndividualArtist = path.resolve(`src/IndividualArtist.jsx`);

  // Create pages for each JSON entry.
  data.forEach(({ page }) => {
    const path = page;

    createPage({
      path,
      component: IndividualArtist,

      // Send additional data to page from JSON (or query inside template)
      context: {
        path
      }
    });
  });
};