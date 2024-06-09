import { Watchlist as TWatchlist } from "../api/watchlist/Watchlist";

export const WATCHLIST_TITLE_FIELD = "id";

export const WatchlistTitle = (record: TWatchlist): string => {
  return record.id?.toString() || String(record.id);
};
