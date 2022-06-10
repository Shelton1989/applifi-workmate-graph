import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class NotificationSettingsScalarWhereWithAggregatesInput {
    AND?: NotificationSettingsScalarWhereWithAggregatesInput[] | undefined;
    OR?: NotificationSettingsScalarWhereWithAggregatesInput[] | undefined;
    NOT?: NotificationSettingsScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    newArrivals?: BoolWithAggregatesFilter | undefined;
    orderUpdates?: BoolWithAggregatesFilter | undefined;
    promotions?: BoolWithAggregatesFilter | undefined;
    saleAlerts?: BoolWithAggregatesFilter | undefined;
    postsByArtistsIFollow?: BoolWithAggregatesFilter | undefined;
    postsByBrandsIFollow?: BoolWithAggregatesFilter | undefined;
    userId?: StringNullableWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
