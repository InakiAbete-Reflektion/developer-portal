import SvgIcon from '@/../../packages/ui/components/common/SvgIcon';
import { buildQuerystring, getChangeTypeOptions, getProductOptions } from '@/src/common/changelog';
import axios from 'axios';
import Link from 'next/link';
import { useState } from 'react';
import { ChangelogEntry, ChangelogEntryList } from 'sc-changelog/types/changeLogEntry';
import Product from 'sc-changelog/types/product';
import { Fetcher } from 'swr';
import useSWRInfinite from 'swr/infinite';
import { Option } from 'ui/components/dropdown/MultiSelect';
import ChangelogFilter from './ChangelogFilter';
import ChangelogResultsList from './ChangelogResultsList';

type ChangelogListProps = {
  initialProduct?: Product;
};

const ChangelogList = ({ initialProduct }: ChangelogListProps): JSX.Element => {
  const [selectedProduct, setSelectedProduct] = useState<Option[]>([]);
  const [selectedChange, setSelectedChange] = useState<Option[]>([]);
  const fetcher: Fetcher<ChangelogEntryList<ChangelogEntry[]>, string> = async (url: string) => await axios.get(url).then((response) => response.data);

  const getKey = (pageIndex: any, previousPageData: ChangelogEntryList<ChangelogEntry[]>) => {
    if (previousPageData && !previousPageData.hasNext) {
      return null;
    }

    const cursor = previousPageData ? previousPageData.endCursor : undefined;
    const query = buildQuerystring(selectedProduct, selectedChange, cursor, initialProduct);

    return [`/api/changelog?${query.join('&')}`];
  };

  const { data, error, size, setSize } = useSWRInfinite(getKey, fetcher);
  const items = data ? data.flatMap((data) => data.entries.map((entry) => entry)) : [];

  return (
    <div className="col-span-3">
      <div className={`z-50 ${initialProduct ? 'grid grid-cols-1 lg:grid-cols-2' : ''}`}>
        {initialProduct && (
          <div className="bg-primary-100 text-primary-800 mb-2 mr-2 flex rounded-md px-3 py-2 text-sm">
            <div className="m-auto">
              <strong>Product:</strong> {initialProduct.name}
              <Link href="/changelog" title="Go back to the changelog overview">
                <SvgIcon icon="close" width={24} height={24} className="text-primary-500 relative -top-0.5 left-1 inline-block h-5 w-5 dark:text-red-500" />
              </Link>
            </div>
          </div>
        )}
        {!initialProduct && (
          <ChangelogFilter
            id="productSelector"
            label="Products"
            placeholder="Select one or more products"
            options={getProductOptions()}
            onSelectChange={function (selectedValues: Option[]): void {
              setSelectedProduct(selectedValues);
            }}
          />
        )}
        <ChangelogFilter
          id="changeSelector"
          label="Changes"
          placeholder="Select one or more "
          options={getChangeTypeOptions()}
          onSelectChange={function (selectedValues: Option[]): void {
            setSelectedChange(selectedValues);
          }}
        />
      </div>
      {!error && data && <ChangelogResultsList entries={items} isLoading={false} hasNext={data[data.length - 1].hasNext} onEndTriggered={() => setSize(size + 1)} />}

      {data && !data[data.length - 1].hasNext && <span className={`border-violet text-violet dark:border-teal dark:text-teal mt-5 inline-block w-full border-2 px-3 py-2 text-center text-sm`}>No more results</span>}
    </div>
  );
};

export default ChangelogList;
