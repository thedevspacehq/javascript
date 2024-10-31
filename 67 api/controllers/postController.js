const postController = {
  // The create action
  create: async function (req, res) {
    const { title, content } = req.body;
    console.log(
      "Creating a new post with title:",
      title,
      "and content:",
      content
    );

    res.json({ message: "Post created." });
  },

  // The read action
  read: async function (req, res) {
    console.log(`Retrieving post with ID: ${req.params.id}`);
    res.json({
      post: {
        id: req.params.id,
        title: "Sample Post",
        content: "This is the content for the sample post.",
      },
    });
  },

  // The update action
  update: async function (req, res) {
    const { title, content } = req.body;
    console.log("Updating post with ID:", req.params.id);
    console.log("New title:", title, "New content:", content);

    res.json({ message: "Post updated." });
  },

  // The delete action
  delete: async function (req, res) {
    console.log(`Deleting post with ID: ${req.params.id}`);
    res.json({ message: "Post deleted." });
  },

  // List all articles
  list: async function (req, res) {
    console.log("Retrieving a list of posts from the database");
    res.json({
      posts: [
        {
          id: 1,
          title: "Sample Post 1",
          content: "This is the content for sample post 1.",
        },
        {
          id: 2,
          title: "Sample Post 2",
          content: "This is the content for sample post 2.",
        },
      ],
    });
  },
};

export default postController;
