import { EventEmitter } from "@angular/core";

export interface Card {
    refreshData: EventEmitter<void>;
    loading: boolean;
    handleRefreshData: () => void
}