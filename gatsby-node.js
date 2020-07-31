const path = require("path")

const data = require('./src/assets/data/lineupdata.json')

exports.createPages = ({ actions }) => {
  const { createPage } = actions

  const component = path.resolve('./src/templates/Artist.jsx')
  
  data.artists.forEach(artist => {
    let path = `/lineup/${artist.name}`
    createPage({
      path,
      component,
      context: artist
    })
  });
}

