import { UserCreateNestedOneWithoutNotificationSettingsInput } from "../inputs/UserCreateNestedOneWithoutNotificationSettingsInput";
export declare class NotificationSettingsCreateInput {
    id?: string | undefined;
    newArrivals?: boolean | undefined;
    orderUpdates?: boolean | undefined;
    promotions?: boolean | undefined;
    saleAlerts?: boolean | undefined;
    postsByArtistsIFollow?: boolean | undefined;
    postsByBrandsIFollow?: boolean | undefined;
    User?: UserCreateNestedOneWithoutNotificationSettingsInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
