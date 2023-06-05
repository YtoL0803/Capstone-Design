import React, { useState } from 'react';
import { useLazyQuery, gql } from '@apollo/client';

const SEARCH_VISITORS = gql`
  query SearchVisitors($start: DateTime!, $end: DateTime!) {
    visitors_between(start: $start, end: $end) {
      id
      time
    }
  }
`;

function EventSearch() {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  const [searchVisitors, { loading, data }] = useLazyQuery(SEARCH_VISITORS);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchVisitors({ variables: { start, end } });
  };

  return (
    <div>
      <h2>Event Search</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Start Date:</label>
          <input
            type="datetime-local"
            value={start}
            onChange={(e) => setStart(e.target.value)}
          />
        </div>
        <div>
          <label>End Date:</label>
          <input
            type="datetime-local"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
          />
        </div>
        <button type="submit" disabled={loading}>
          Search
        </button>
      </form>
      {data && (
        <ul>
          {data.visitors_between.map((visitor) => (
            <li key={visitor.id}>{visitor.time}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default EventSearch;
