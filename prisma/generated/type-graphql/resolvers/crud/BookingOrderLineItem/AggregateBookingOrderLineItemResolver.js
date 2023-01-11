"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateBookingOrderLineItemResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateBookingOrderLineItemArgs_1 = require("./args/AggregateBookingOrderLineItemArgs");
const BookingOrderLineItem_1 = require("../../../models/BookingOrderLineItem");
const AggregateBookingOrderLineItem_1 = require("../../outputs/AggregateBookingOrderLineItem");
const helpers_1 = require("../../../helpers");
let AggregateBookingOrderLineItemResolver = class AggregateBookingOrderLineItemResolver {
    async aggregateBookingOrderLineItem(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).bookingOrderLineItem.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateBookingOrderLineItem_1.AggregateBookingOrderLineItem, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateBookingOrderLineItemArgs_1.AggregateBookingOrderLineItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateBookingOrderLineItemResolver.prototype, "aggregateBookingOrderLineItem", null);
AggregateBookingOrderLineItemResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => BookingOrderLineItem_1.BookingOrderLineItem)
], AggregateBookingOrderLineItemResolver);
exports.AggregateBookingOrderLineItemResolver = AggregateBookingOrderLineItemResolver;
