import Accordion from './components/Accordion';
function App() {
  const items = [
    {
      id: 'fjfhjf12',
      label: 'Can React be use on any project',
      content: 'Yes, React can be use on any project, Yes, React can be use on any project Yes, React can be use on any project, Yes, React can be use on any project',
    },
    {
      id: 'wu2933',
      label: 'Can Java be use on any project',
      content: 'Yes, Java can be use on any project, Yes, Java can be use on any project Yes, Java can be use on any project, Yes, Java can be use on any project',
    },
    {
      id: 'ideh123',
      label: 'Can PhP be use on any project',
      content: 'Yes, PhP can be use on any project, Yes, PhP can be use on any project Yes, PhP can be use on any project, Yes, PhP can be use on any project',
    }
  ];

  return(
    <Accordion items={items}/>
  )
}

export default App;
