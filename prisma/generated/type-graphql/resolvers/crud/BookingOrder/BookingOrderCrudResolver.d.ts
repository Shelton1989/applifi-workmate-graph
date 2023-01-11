import { GraphQLResolveInfo } from "graphql";
import { AggregateBookingOrderArgs } from "./args/AggregateBookingOrderArgs";
import { CreateBookingOrderArgs } from "./args/CreateBookingOrderArgs";
import { CreateManyBookingOrderArgs } from "./args/CreateManyBookingOrderArgs";
import { DeleteBookingOrderArgs } from "./args/DeleteBookingOrderArgs";
import { DeleteManyBookingOrderArgs } from "./args/DeleteManyBookingOrderArgs";
import { FindFirstBookingOrderArgs } from "./args/FindFirstBookingOrderArgs";
import { FindManyBookingOrderArgs } from "./args/FindManyBookingOrderArgs";
import { FindUniqueBookingOrderArgs } from "./args/FindUniqueBookingOrderArgs";
import { GroupByBookingOrderArgs } from "./args/GroupByBookingOrderArgs";
import { UpdateBookingOrderArgs } from "./args/UpdateBookingOrderArgs";
import { UpdateManyBookingOrderArgs } from "./args/UpdateManyBookingOrderArgs";
import { UpsertBookingOrderArgs } from "./args/UpsertBookingOrderArgs";
import { BookingOrder } from "../../../models/BookingOrder";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateBookingOrder } from "../../outputs/AggregateBookingOrder";
import { BookingOrderGroupBy } from "../../outputs/BookingOrderGroupBy";
export declare class BookingOrderCrudResolver {
    bookingOrder(ctx: any, info: GraphQLResolveInfo, args: FindUniqueBookingOrderArgs): Promise<BookingOrder | null>;
    findFirstBookingOrder(ctx: any, info: GraphQLResolveInfo, args: FindFirstBookingOrderArgs): Promise<BookingOrder | null>;
    bookingOrders(ctx: any, info: GraphQLResolveInfo, args: FindManyBookingOrderArgs): Promise<BookingOrder[]>;
    createBookingOrder(ctx: any, info: GraphQLResolveInfo, args: CreateBookingOrderArgs): Promise<BookingOrder>;
    createManyBookingOrder(ctx: any, info: GraphQLResolveInfo, args: CreateManyBookingOrderArgs): Promise<AffectedRowsOutput>;
    deleteBookingOrder(ctx: any, info: GraphQLResolveInfo, args: DeleteBookingOrderArgs): Promise<BookingOrder | null>;
    updateBookingOrder(ctx: any, info: GraphQLResolveInfo, args: UpdateBookingOrderArgs): Promise<BookingOrder | null>;
    deleteManyBookingOrder(ctx: any, info: GraphQLResolveInfo, args: DeleteManyBookingOrderArgs): Promise<AffectedRowsOutput>;
    updateManyBookingOrder(ctx: any, info: GraphQLResolveInfo, args: UpdateManyBookingOrderArgs): Promise<AffectedRowsOutput>;
    upsertBookingOrder(ctx: any, info: GraphQLResolveInfo, args: UpsertBookingOrderArgs): Promise<BookingOrder>;
    aggregateBookingOrder(ctx: any, info: GraphQLResolveInfo, args: AggregateBookingOrderArgs): Promise<AggregateBookingOrder>;
    groupByBookingOrder(ctx: any, info: GraphQLResolveInfo, args: GroupByBookingOrderArgs): Promise<BookingOrderGroupBy[]>;
}
