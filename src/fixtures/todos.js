import ids from '../libs/id';

export default () => ([
    { id: ids.next().value, title: 'Hook state examples', description: 'Ejemplos para manajer estado en hooks', toggled: false },
    { id: ids.next().value, title: 'Class state examples', description: 'Ejemplos para manajer estado en clases', toggled: false },
    { id: ids.next().value, title: 'Fetching examples', description: 'Ejemplos de data fetching', toggled: false },
    { id: ids.next().value, title: 'Thunks examples', description: 'Ejemplos de thunks en React', toggled: false },
    { id: ids.next().value, title: 'TodosApp', description: 'Crear aplicacion de Todos en React', toggled: false },
]);