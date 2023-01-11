"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyBookingOrderResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyBookingOrderArgs_1 = require("./args/FindManyBookingOrderArgs");
const BookingOrder_1 = require("../../../models/BookingOrder");
const helpers_1 = require("../../../helpers");
let FindManyBookingOrderResolver = class FindManyBookingOrderResolver {
    async bookingOrders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).bookingOrder.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [BookingOrder_1.BookingOrder], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyBookingOrderArgs_1.FindManyBookingOrderArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyBookingOrderResolver.prototype, "bookingOrders", null);
FindManyBookingOrderResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => BookingOrder_1.BookingOrder)
], FindManyBookingOrderResolver);
exports.FindManyBookingOrderResolver = FindManyBookingOrderResolver;
