import { http, HttpResponse } from 'msw';

const models = [
  {
    id: '1',
    name: 'GPT-4',
    description: 'Advanced language model by OpenAI',
    version: '4.0',
    status: 'active',
    createdAt: '2023-10-01T10:00:00Z',
    tags: ['NLP', 'text-generation'],
  },
  {
    id: '2',
    name: 'DALL·E',
    description: 'Text-to-image model',
    version: '2.0',
    status: 'inactive',
    createdAt: '2022-08-12T12:30:00Z',
    tags: ['image', 'generation'],
  },
];

export const handlers = [
  http.get('/models', () => {
    return HttpResponse.json(models);
  }),

  http.get('/models/:id', ({ params }) => {
    const { id } = params;
    const model = models.find((m) => m.id === id);
    if (!model) {
      return HttpResponse.json({ message: 'Model not found' }, { status: 404 });
    }
    return HttpResponse.json(model);
  }),
];
