module.exports = {
  layout: "layouts/post.njk",
  tags: ["posts"],
  featuredImage: "img/sea-turtle.jpg",
  permalink: "{{ page.fileSlug }}/index.html",
  eleventyComputed: {
    displayTags: (data) => {
      return data.tags.filter((item) => {
        switch (item) {
          // this list should match the `filter` list in tags.njk
          case "all":
          case "nav":
          case "post":
          case "posts":
            return false;
        }

        return true;
      });
    },
  },
};
