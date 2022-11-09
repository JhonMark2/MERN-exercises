import * as React from 'react';
const App = () => {
    const stories = [
        {
        title: 'Wala Akong Pera',
        author: 'Jordan Clarkson',
        num_comments: 3,
        points: 4,
        objectID: 0,
        },
        {
        title: 'Mahinang Nilalang',
        author: 'kevin durant, Andrew E.',
        num_comments: 2,
        points: 5,
        objectID: 1,
        },
    ];

    const [searchTerm, setSearchTerm] = React.useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const searchedStories = stories.filter(function (story) {
        return story.title.includes(searchTerm);
        });

    return (
        <div>
            <h1>Hello BipSU!</h1>
            <Search onSearch={handleSearch} />
    
            <hr />
            <List list={searchedStories} />
            </div>
    );
};
const Search = (props) => (
<div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" onChange={props.onSearch} />
</div>
);

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