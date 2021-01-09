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

const classesAndHooksBasePath = '/classes-hooks/';
const dataFetching = '/datafetching/';
let classesAndHooksId = 1;
let dataFetchingId = 1;

const COURSES = {
    basic: classesAndHooksBasePath,
    advanced: dataFetching, 
};

const withTestProps = p => Component => props => <Component {...props} {...p} />

const Route = ({ path = '', component = null, exact = false, course = null }) => ({
    path: `${COURSES[course]}${path}`, component, exact, course,
});

const RouteBasic = (options) => Route({ ...options, course: 'basic', path: `${classesAndHooksId++}` });
const RouteBasicClassesDemo = (options) => Route({ ...options, course: 'basic', path: `demo-classes` });
const RouteBasicHooksDemo = (options) => Route({ ...options, course: 'basic', path: `demo-hooks` });
const RouteAdvanced = (options) => Route({ ...options, course: 'advanced', path: `${dataFetchingId++}` });
const RouteAdvancedDemo = (options) => Route({ ...options, course: 'advanced', path: 'demo-fetching' });

export default [
    RouteBasicClassesDemo({ component: withTestProps({ max: 5, min: 0 })(ClassesBase) }),
    RouteBasicHooksDemo({ component: withTestProps({ min: 0, max: 5 })(HooksBase) }),
    RouteBasic({ component: BasicSetState }),
    RouteBasic({ component: SetStateAsync }),
    RouteBasic({ component: SetStateWithFunction }),
    RouteBasic({ component: SetStateWithFunctionAsync }),
    RouteBasic({ component: SetStateWithFunctionValidation }),
    RouteBasic({ component: SetStateWithFunctionPropsValidation }),
    RouteBasic({ component: SetStateWithCallback }),
    RouteBasic({ component: UseStateBasic }),
    RouteBasic({ component: UseStateWithFunction }),
    RouteBasic({ component: UseStateWithFunctionValidation }),
    RouteBasic({ component: UseStateAsync }),
    RouteBasic({ component: UseEffectBasic }),
    RouteBasic({ component: UseEffectAdvanced }),
    RouteBasic({ component: CustomHook }),
    RouteBasic({ component: UseRef }),
    RouteAdvancedDemo({ component: DataFetchingDemo }),
    RouteAdvanced({ component: BasicFetch }),
    RouteAdvanced({ component: ManagingFetchStates }),
    RouteAdvanced({ component: UseFetch }),
    RouteAdvanced({ component: ReducerUserFetch }),
];
// .map(r => {
//     console.log(r);
//     return r;
// });