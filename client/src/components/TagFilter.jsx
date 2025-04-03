function TagFilter({ tags, selectedTag, onSelectTag }) {
  return (
    <div className="tag-filter">
      <h3>Filter by Tag:</h3>
      <div className="tags-container">
        <button
          className={!selectedTag ? 'active' : ''}
          onClick={() => onSelectTag('')}
        >
          All
        </button>
        
        {tags.map((tag, index) => (
          <button
            key={index}
            className={selectedTag === tag ? 'active' : ''}
            onClick={() => onSelectTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TagFilter;