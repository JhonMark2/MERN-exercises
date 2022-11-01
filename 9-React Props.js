import * as React from 'react';
const App = () => {
const stories = [
    {
    title: 'The man',
    author: 'Jhon Mark, Ibanez',
    num_comments: 9,
    points: 1,
    objectID: 4,
    },
    {
    title: 'Who cant be move',
    author: 'Vejay Mahilum, Mark Jhon Baronda',
    num_comments: 3,
    points: 7,
    objectID: 1,
    },
];
return (
    <div>
    <h1>Hello I'M Jhon Mark Ibanez :)</h1>
    <hr />
    <List list={stories} />
    </div>
    );
};
const List = (props) => (
    <ul>
    {props.list.map((item) => (
    <Item key={item.objectID} item={item} />
    ))}
    </ul>
);
const Item = (props) => (
    <li>
    <span>
    <a href={props.item.url}>{props.item.title}</a>
    </span>
    <span>{props.item.author}</span>
    <span>{props.item.num_comments}</span>
    <span>{props.item.points}</span>
    </li>
);
export default App;