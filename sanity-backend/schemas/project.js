export default {
  name: 'project',
  title: 'Projects',
  type: 'document',
  icon: () => `💻`,
  fields: [
    {
      name: 'name',
      title: 'Project Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'ghLink',
      title: 'GitHub Link',
      type: 'url',
    },
    {
      name: 'liveLink',
      title: 'Live Link',
      type: 'url',
    },
    {
      name: 'publishedAt',
      tile: 'Published At',
      type: 'datetime',
    },
    {
      name: 'modifiedAt',
      tile: 'Modified At',
      type: 'datetime',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      option: {
        hotspot: true,
      },
    },
    {
      name: 'imageAlt',
      title: 'Image Alt',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    },
  ],
};
