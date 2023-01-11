"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyBookingOrderLineItemResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyBookingOrderLineItemArgs_1 = require("./args/FindManyBookingOrderLineItemArgs");
const BookingOrderLineItem_1 = require("../../../models/BookingOrderLineItem");
const helpers_1 = require("../../../helpers");
let FindManyBookingOrderLineItemResolver = class FindManyBookingOrderLineItemResolver {
    async bookingOrderLineItems(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).bookingOrderLineItem.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [BookingOrderLineItem_1.BookingOrderLineItem], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyBookingOrderLineItemArgs_1.FindManyBookingOrderLineItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyBookingOrderLineItemResolver.prototype, "bookingOrderLineItems", null);
FindManyBookingOrderLineItemResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => BookingOrderLineItem_1.BookingOrderLineItem)
], FindManyBookingOrderLineItemResolver);
exports.FindManyBookingOrderLineItemResolver = FindManyBookingOrderLineItemResolver;
