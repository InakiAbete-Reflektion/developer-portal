// Global
import { buildTab, TabState } from '@coveo/headless';
import { useEffect, useState } from 'react';
// Lib
import { coveoEngine } from '@/src/common/coveo-engine';

interface SearchTabProps {
  id: string;
  expression: string;
  title: string;
  selected?: boolean;
}

const SearchTab = ({ id, expression, title }: SearchTabProps) => {
  const tab = buildTab(coveoEngine, { options: { expression, id } });
  const [tabState, setTabState] = useState<TabState | null>(null);

  useEffect(() => {
    tab.subscribe(() => {
      setTabState(tab.state);
    });
  }, []);

  if (!tabState) {
    return <></>;
  }

  const activeClasses = 'border-b-4 border-theme-link-hover text-theme-link-hover';

  return (
    <button
      onClick={() => {
        tab.select();
      }}
      className={`block py-4 font-bold ${tabState.isActive ? [activeClasses] : ''}`}
    >
      {title}
    </button>
  );
};

export default SearchTab;
