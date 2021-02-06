export default {
  name: 'courses',
  title: 'Courses',
  type: 'document',
  icon: () => `📘`,
  fields: [
    {
      name: 'status',
      title: 'Status',
      type: 'string',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'text',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'text',
    },
    {
      name: 'length',
      title: 'Length',
      type: 'text',
    },
  ],
};
