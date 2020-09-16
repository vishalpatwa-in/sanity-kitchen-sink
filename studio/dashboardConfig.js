export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f6252be6fed5c1338e172d7',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-th9a9ifk',
                  apiId: 'f50dae6c-5011-42ec-ad3c-9a946934fea1'
                },
                {
                  buildHookId: '5f6252be6de4500fb2b82707',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-vqkc4njq',
                  apiId: 'e72840b5-665e-4320-b3ba-04abe0fafa3a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vishalpatwa235/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-vqkc4njq.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
