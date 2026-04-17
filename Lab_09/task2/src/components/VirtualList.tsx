import { useState, useMemo, useCallback } from "react";
import { FixedSizeList as List, ListChildComponentProps } from "react-window";
import { Item, generateItems } from "../utils/generateItems";

export function VirtualList({ itemCount = 10000, height = 500 }: { itemCount?: number, height?: number }) {
  const [filter, setFilter] = useState("");
  const items = useMemo(() => generateItems(itemCount), [itemCount]);

  const filteredItems = useMemo(() => {
    if (!filter) return items;
    return items.filter(item =>
      item.title.toLowerCase().includes(filter.toLowerCase()) ||
      item.category.toLowerCase().includes(filter.toLowerCase())
    );
  }, [items, filter]);

  const handleFilterChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  }, []);

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <input type="text" placeholder="Filter items..." value={filter} onChange={handleFilterChange} style={{ padding: '10px', width: '100%', marginBottom: '10px' }} />
      <div style={{ marginBottom: '10px' }}>Showing {filteredItems.length} items</div>
      <List height={height} itemCount={filteredItems.length} itemSize={80} width="100%">
        {({ index, style }: ListChildComponentProps) => {
          const item = filteredItems[index];
          return (
            <div style={{ ...style, borderBottom: '1px solid #eee', padding: '10px' }}>
              <h4 style={{ margin: '0 0 5px 0' }}>{item.title}</h4>
              <p style={{ margin: 0, fontSize: '12px', color: '#666' }}>{item.description} - <b>{item.category}</b></p>
            </div>
          );
        }}
      </List>
    </div>
  );
}