import './App.css';

function App() {
  const demoItems = [
    { id: 1, content: "Item 1", height: 200 },
    { id: 2, content: "Item 2", height: 350 },
    { id: 3, content: "Item 3", height: 360 },
    { id: 4, content: "Item 4", height: 290 },
    { id: 5, content: "Item 5", height: 480 },
    { id: 6, content: "Item 6", height: 120 },
    { id: 7, content: "Item 7", height: 440 },
    { id: 8, content: "Item 8", height: 380 },
    { id: 9, content: "Item 9", height: 160 },
    { id: 10, content: "Item 10", height: 190 },
    { id: 11, content: "Item 11", height: 210 },
    { id: 12, content: "Item 12", height: 170 },
    { id: 13, content: "Item 13", height: 410 },
    { id: 10, content: "Item 14", height: 190 },
    { id: 11, content: "Item 15", height: 240 },
    { id: 12, content: "Item 16", height: 270 },
    { id: 13, content: "Item 17", height: 80 },
  ];

  return (
    <div className="App">
      <MasonryLayout items={demoItems} />
    </div>
  );
}

const MasonryLayout = ({ items }) => {
  return (
    <div className="masonry-layout">
      {items.map((item) => (
        <div
          key={item.id}
          className="masonry-item"
          style={{ height: `${item.height}px` }}
        >
          {item.content}
        </div>
      ))}
    </div>
  );
};

export default App;
