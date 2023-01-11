"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByBookingOrderResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByBookingOrderArgs_1 = require("./args/GroupByBookingOrderArgs");
const BookingOrder_1 = require("../../../models/BookingOrder");
const BookingOrderGroupBy_1 = require("../../outputs/BookingOrderGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByBookingOrderResolver = class GroupByBookingOrderResolver {
    async groupByBookingOrder(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).bookingOrder.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [BookingOrderGroupBy_1.BookingOrderGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByBookingOrderArgs_1.GroupByBookingOrderArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByBookingOrderResolver.prototype, "groupByBookingOrder", null);
GroupByBookingOrderResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => BookingOrder_1.BookingOrder)
], GroupByBookingOrderResolver);
exports.GroupByBookingOrderResolver = GroupByBookingOrderResolver;
