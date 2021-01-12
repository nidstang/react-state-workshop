import ClassesBase from './examples/managing-state-in-classes/demo';
import BasicSetState from './examples/managing-state-in-classes/basic-set-state';
import SetStateAsync from './examples/managing-state-in-classes/set-state-async';
import SetStateWithFunction from './examples/managing-state-in-classes/set-state-with-function';
import SetStateWithFunctionAsync from './examples/managing-state-in-classes/set-state-with-function-async';
import SetStateWithFunctionValidation from './examples/managing-state-in-classes/set-state-with-function-and-validation';
import SetStateWithFunctionPropsValidation from './examples/managing-state-in-classes/set-state-with-function-props-validation';
import SetStateWithCallback from './examples/managing-state-in-classes/set-state-with-callback';
import HooksBase from './examples/managing-state-in-function/demo';
import UseStateBasic from './examples/managing-state-in-function/base-refactored';
import UseStateWithFunction from './examples/managing-state-in-function/useState-with-function';
import UseStateWithFunctionValidation from './examples/managing-state-in-function/useState-with-function-and-validation';
import UseStateAsync from './examples/managing-state-in-function/useState-async';
import UseEffectBasic from './examples/managing-state-in-function/basic-useEffect';
import UseEffectAdvanced from './examples/managing-state-in-function/advanced-useEffect';
import CustomHook from './examples/managing-state-in-function/custom-hook';
import UseRef from './examples/managing-state-in-function/useRef';
import DataFetchingDemo from './examples/datafetching/demo';
import BasicFetch from './examples/datafetching/basic-fetch';
import ManagingFetchStates from './examples/datafetching/managing-fetch-states';
import UseFetch from './examples/datafetching/useFetch';
import ReducerUserFetch from './examples/datafetching/reducer-useFetch';
import TodosApp from './apps/TodosApp';
import TodosAppPractice from './apps/TodosAppPractice';

// practices
import LocalStorageClasses from './practices/localStorage';
import LocalStorageClassesSolution from './practices/localStorage';
import LocalStorageHookEfect from './practices/localStorage-hook-effect';
import LocalStorageHookEfectSolution from './practices/localStorage-hook-effect-solution';
import LocalStorageCustomHook from './practices/localStorage-custom-hook';
import LocalStorageCustomHookSolution from './practices/localStorage-custom-hook-solution';

const classesAndHooksBasePath = '/classes-hooks/';
const dataFetching = '/datafetching/';
let classesAndHooksId = 1;
let dataFetchingId = 1;
let practicesId = 1;

const COURSES = {
    basic: classesAndHooksBasePath,
    advanced: dataFetching, 
};

const withTestProps = p => Component => props => <Component {...props} {...p} />

const Route = ({ path = '', component = null, exact = false, course = null, name = '' }) => ({
    path: `${COURSES[course]}${path}`, component, exact, course, name,
});

const RouteBasic = (options) => Route({ ...options, course: 'basic', path: `${classesAndHooksId++}` });
const RouteBasicClassesDemo = (options) => Route({ ...options, course: 'basic', path: `demo-classes` });
const RouteBasicHooksDemo = (options) => Route({ ...options, course: 'basic', path: `demo-hooks` });
const RouteAdvanced = (options) => Route({ ...options, course: 'advanced', path: `${dataFetchingId++}` });
const RouteAdvancedDemo = (options) => Route({ ...options, course: 'advanced', path: 'demo-fetching' });
const RouteBasicPractices = options => RouteBasic({ ...options, path: `practices/${practicesId++}`});
const RouteAdvancedPractices = options => RouteAdvanced({ ...options, path: `practices/${practicesId++}`});

export default [
    RouteBasicClassesDemo({ component: withTestProps({ max: 5, min: 0 })(ClassesBase) }),
    RouteBasicHooksDemo({ component: withTestProps({ min: 0, max: 5 })(HooksBase) }),
    RouteBasic({ component: BasicSetState, name: 'Ejemplo basico con this.setState' }),
    RouteBasic({ component: SetStateAsync, name: 'Ejemplo de asincronia con this.setState' }),
    RouteBasic({ component: SetStateWithFunction, name: 'Ejemplo de this.setState con una funcion' }),
    RouteBasic({ component: SetStateWithFunctionAsync, name: 'Ejemplo de asincronia con this.setState y funcion' }),
    RouteBasic({ component: withTestProps({ max: 5 })(SetStateWithFunctionValidation), name: 'Ejemplo de this.setState, funcion y validacion' }),
    RouteBasic({ component: withTestProps({ max: 5 })(SetStateWithFunctionPropsValidation), name: 'Ejemplo de this.setState con prop validation' }),
    RouteBasic({ component: SetStateWithCallback, name: 'Ejemplo de this.setState con after callback' }),
    RouteBasic({ component: UseStateBasic, name: 'Ejemplo basico de useState' }),
    RouteBasic({ component: UseStateWithFunction, name: 'Ejemplo de useState con una funcion' }),
    RouteBasic({ component: withTestProps({ max: 5 })(UseStateWithFunctionValidation), name: 'Ejemplo de useState con funcion y validacion' }),
    RouteBasic({ component: UseStateAsync, name: 'Ejemplo de la asincronia de useState' }),
    RouteBasic({ component: UseEffectBasic, name: 'Ejemplo basico de useEffect' }),
    RouteBasic({ component: UseEffectAdvanced, name: 'Ejemplo de dependencias de useEffect' }),
    RouteBasic({ component: CustomHook, name: 'Ejemplo de custom hooks' }),
    RouteBasic({ component: UseRef, name: 'Ejemplo de useRef' }),
    RouteAdvanced({ component: BasicFetch, name: 'Ejemplo basico de fetch' }),
    RouteAdvanced({ component: ManagingFetchStates, name: 'Ejemplo manejando los estados de fetch' }),
    RouteAdvanced({ component: UseFetch, name: 'Ejemplo de custom hook useFetch' }),
    RouteAdvanced({ component: ReducerUserFetch, name: 'Ejemplo de useFetch con reducer' }),
    RouteAdvanced({ path: '/todosapp', component: TodosApp, name: 'Todos App ejemplos' }),
    RouteAdvanced({ path: '/todosapp-practice', component: TodosAppPractice, name: 'Todos App ejercicio' }),
    RouteBasicPractices({ component: LocalStorageClasses, name: 'Ejercicio de LocalStorage sobre clases' }),
    RouteBasicPractices({ component: LocalStorageClassesSolution, name: 'Ejercicio de LocalStorage sobre clases (solucion)' }),
    RouteBasicPractices({ component: LocalStorageHookEfect, name: 'Ejercicio de LocalStorage sobre hooks' }),
    RouteBasicPractices({ component: LocalStorageHookEfectSolution, name: 'Ejercicio de LocalStorage sobre hooks (solucion)' }),
    RouteBasicPractices({ component: LocalStorageCustomHook, name: 'Ejercicio de LocalStorage en custom hook' }),
    RouteBasicPractices({ component: LocalStorageCustomHookSolution, name: 'Ejercicio de LocalStorage en custom hook (solucion)' }),
];
// .map(r => {
//     console.log(r);
//     return r;
// });