import PreviewSearch from './PreviewSearch';
import SearchInput from './SearchInput';

enum SearchInputRenderMode {
  Disabled,
  Standard,
  PreviewSearch,
}

const SearchInputSwitcher = () => {
  const renderMode: SearchInputRenderMode =
    !process.env.NEXT_PUBLIC_DISCOVER_APP_ENV || !process.env.NEXT_PUBLIC_DISCOVER_APP_CUSTOMER_KEY || !process.env.NEXT_PUBLIC_DISCOVER_APP_API_KEY
      ? SearchInputRenderMode.Disabled
      : process.env.NEXT_PUBLIC_DISCOVER_ENABLE_PREVIEW_SEARCH == 'true'
      ? SearchInputRenderMode.PreviewSearch
      : SearchInputRenderMode.Standard;

  return (
    <>
      {renderMode == SearchInputRenderMode.Disabled ? <div className="text-red pt-3 text-center text-sm font-semibold">Search disabled; please check environment variables to enable</div> : ''}
      {renderMode == SearchInputRenderMode.Standard ? <SearchInput /> : ''}
      {renderMode == SearchInputRenderMode.PreviewSearch ? <PreviewSearch /> : ''}
    </>
  );
};

export default SearchInputSwitcher;
