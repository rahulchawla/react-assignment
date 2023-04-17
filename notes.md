react
    - Object Model with fundamental set of following
        - Hooks
            - useState()
            - useContext()
                - A hook for utilizing the React.Context
                - The 'createContext(InitilaValue)'
                    - Used to define a 'global Shareable Object' that can be used across components for Data COmunication
                    - IntialValue
                        - Schema and values for the data as well as the behaiour that can beshared across components
                - Context.Provider
                    - USed by the sender compone t to send 'value'
                        - the 'value' is a complex object that has data as well as behaviors (aka Dispatch Actions)
                - Context.Consumer       
                    - Subcriber
                    - The 'useContext' 

            - useRef()
            - useReducer()
            - useEffect()
            - useMemo()
            - useCallback()
            -... and many more
        - Events
        - JSX/TSX
        - Lifecycle Management
        - The Component<P,S> class
            - P, the 'props'
                - communication of 'data' and 'behavior' across components having parent child relationship
                - an 'immutable' object
            - S, the 'state'
                - Local Components state defined using 'useState()' hook
```` javascript
        const [x, setX] = useState(0);
````
            - the 'x' is the state for the component
            - setX, the React.SetStateAction()
                - This will be dispatched when an event is raised on Compoennt that causes the state to update and hence the component's UI
            - The 'unidirectional data flow'
                - Data is passsed from state to UI
                - On Event of UI from dispatch action to State property     
react-dom
    - Mount and Rendering of the component   

# Component Practices
    - Create a reusable component if the same UI is repeated across multiple components
        - Define Property System for Passing data from parent to Child
        - Define Functions those will be raised at child level so that data can be emitted to parent over the data binding
        - To Notify the state updates across components make sure that the child knows which property will be updated on change from parent  to child level 
    - Create a custom hook if the similar functionaly needs to be executed as component level that updates the '
    'State'       

# Usew of WebPack
https://www.webnethelper.com/2021/10/reactjs17x-creating-application-with.html


