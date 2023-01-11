"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateBookingOrderResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateBookingOrderArgs_1 = require("./args/AggregateBookingOrderArgs");
const BookingOrder_1 = require("../../../models/BookingOrder");
const AggregateBookingOrder_1 = require("../../outputs/AggregateBookingOrder");
const helpers_1 = require("../../../helpers");
let AggregateBookingOrderResolver = class AggregateBookingOrderResolver {
    async aggregateBookingOrder(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).bookingOrder.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateBookingOrder_1.AggregateBookingOrder, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateBookingOrderArgs_1.AggregateBookingOrderArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateBookingOrderResolver.prototype, "aggregateBookingOrder", null);
AggregateBookingOrderResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => BookingOrder_1.BookingOrder)
], AggregateBookingOrderResolver);
exports.AggregateBookingOrderResolver = AggregateBookingOrderResolver;
