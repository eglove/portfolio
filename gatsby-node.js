const path = require('path');

async function turnBlogsIntoPages({ graphql, actions }) {
  const BlogTemplate = path.resolve('./src/templates/Blog.js');
  const { data } = await graphql(`
    query {
      postQuery: allSanityPost {
        posts: nodes {
          slug {
            current
          }
        }
      }
    }
  `);
  data.postQuery.posts.forEach((post) => {
    actions.createPage({
      path: `blog/${post.slug.current}`,
      component: BlogTemplate,
      context: {
        slug: post.slug.current,
      },
    });
  });
}

async function turnProjectsIntoPages({ graphql, actions }) {
  const ProjectTemplate = path.resolve('./src/templates/Project.js');
  const { data } = await graphql(`
    query {
      projectQuery: allSanityProject {
        projects: nodes {
          slug {
            current
          }
        }
      }
    }
  `);
  data.projectQuery.projects.forEach((project) => {
    actions.createPage({
      path: `portfolio/${project.slug.current}`,
      component: ProjectTemplate,
      context: {
        slug: project.slug.current,
      },
    });
  });
}

exports.createPages = async (params) => {
  await turnBlogsIntoPages(params);
  await turnProjectsIntoPages(params);
};
