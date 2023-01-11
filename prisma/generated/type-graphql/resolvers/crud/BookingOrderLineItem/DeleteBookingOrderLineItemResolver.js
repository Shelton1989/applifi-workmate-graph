"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteBookingOrderLineItemResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteBookingOrderLineItemArgs_1 = require("./args/DeleteBookingOrderLineItemArgs");
const BookingOrderLineItem_1 = require("../../../models/BookingOrderLineItem");
const helpers_1 = require("../../../helpers");
let DeleteBookingOrderLineItemResolver = class DeleteBookingOrderLineItemResolver {
    async deleteBookingOrderLineItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).bookingOrderLineItem.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => BookingOrderLineItem_1.BookingOrderLineItem, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteBookingOrderLineItemArgs_1.DeleteBookingOrderLineItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteBookingOrderLineItemResolver.prototype, "deleteBookingOrderLineItem", null);
DeleteBookingOrderLineItemResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => BookingOrderLineItem_1.BookingOrderLineItem)
], DeleteBookingOrderLineItemResolver);
exports.DeleteBookingOrderLineItemResolver = DeleteBookingOrderLineItemResolver;
