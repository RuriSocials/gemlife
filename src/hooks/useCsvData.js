import { useState, useEffect } from 'react';
import Papa from 'papaparse';

/**
 * Custom hook to fetch and parse a CSV file from the public directory.
 * @param {string} csvPath - Path relative to public, e.g. '/data/journal.csv'
 * @returns {{ data: Array, loading: boolean, error: string|null }}
 */
export function useCsvData(csvPath) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchCsv() {
      try {
        setLoading(true);
        const response = await fetch(csvPath);
        if (!response.ok) {
          throw new Error(`Failed to fetch ${csvPath}: ${response.statusText}`);
        }
        const csvText = await response.text();
        const result = Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          dynamicTyping: true,
        });

        if (!cancelled) {
          setData(result.data);
          setError(null);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    fetchCsv();
    return () => { cancelled = true; };
  }, [csvPath]);

  return { data, loading, error };
}
